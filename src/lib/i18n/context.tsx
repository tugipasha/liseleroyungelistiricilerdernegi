import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  Locale,
  LocaleInfo,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  TranslationDictionary,
} from "./types";
import { dictionaries } from "./locales";

const STORAGE_KEY = "logd_preferred_language";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: LocaleInfo[];
  currentLocaleInfo: LocaleInfo;
  t: (path: string, params?: Record<string, string | number>, fallback?: string) => string;
  dictionary: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    // 1. URL search param: ?lang=en or ?lang=de
    const searchParams = new URLSearchParams(window.location.search);
    const urlLang = searchParams.get("lang")?.toLowerCase() as Locale;
    if (urlLang && dictionaries[urlLang]) {
      return urlLang;
    }

    // 2. LocalStorage
    const stored = localStorage.getItem(STORAGE_KEY) as Locale;
    if (stored && dictionaries[stored]) {
      return stored;
    }

    // 3. Browser language
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang === "de") return "de";
    if (browserLang === "en") return "en";
  } catch (err) {
    console.warn("Could not determine initial language, falling back to default:", err);
  }

  return DEFAULT_LOCALE;
}

function resolvePath(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== "object") return undefined;
  const segments = path.split(".");
  let current: unknown = obj;
  for (const segment of segments) {
    if (current === null || current === undefined) return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    if (!dictionaries[newLocale]) {
      console.warn(`Locale '${newLocale}' is not supported.`);
      return;
    }
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      // Dispatch custom event for decoupled components
      window.dispatchEvent(
        new CustomEvent("logd_locale_changed", { detail: { locale: newLocale } }),
      );
    } catch (e) {
      console.warn("Failed to persist language preference:", e);
    }
  }, []);

  // Synchronize HTML element lang attribute on mount and change
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Sync across browser tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue && dictionaries[e.newValue as Locale]) {
        setLocaleState(e.newValue as Locale);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const currentLocaleInfo = useMemo(() => {
    return SUPPORTED_LOCALES.find((l) => l.code === locale) || SUPPORTED_LOCALES[0];
  }, [locale]);

  const dictionary = useMemo(() => {
    return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
  }, [locale]);

  const fallbackDictionary = dictionaries[DEFAULT_LOCALE];

  const t = useCallback(
    (path: string, params?: Record<string, string | number>, fallback?: string): string => {
      // 1. Try active dictionary
      let val = resolvePath(dictionary, path);

      // 2. Fall back to default dictionary if missing
      if (val === undefined || val === null || val === "") {
        val = resolvePath(fallbackDictionary, path);
      }

      // 3. Fall back to explicit fallback or path
      if (val === undefined || val === null) {
        val = fallback !== undefined ? fallback : path;
      }

      let text = String(val);

      // 4. Interpolate {paramName} placeholders if any
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }

      return text;
    },
    [dictionary, fallbackDictionary],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      locales: SUPPORTED_LOCALES,
      currentLocaleInfo,
      t,
      dictionary,
    }),
    [locale, setLocale, currentLocaleInfo, t, dictionary],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an <I18nProvider />");
  }
  return ctx;
}

export const useTranslation = useI18n;
