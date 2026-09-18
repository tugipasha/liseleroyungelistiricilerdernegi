import { useEffect, useState } from "react";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";
import { useI18n } from "@/lib/i18n";

interface HeaderProps {
  activeNav?: string;
}

export function Header({ activeNav }: HeaderProps) {
  const { locale, setLocale, locales, currentLocaleInfo, t } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "home", label: t("nav.home"), href: "/" },
    { key: "about", label: t("nav.about"), href: "/hakkimizda" },
    { key: "team", label: t("nav.team"), href: "/ekibimiz" },
    { key: "events", label: t("nav.events"), href: "/etkinlikler" },
    { key: "showcase", label: t("nav.showcase"), href: "/projeler" },
    { key: "news", label: t("nav.news"), href: "/haberler" },
    { key: "contact", label: t("nav.contact"), href: "/iletisim" },
  ];

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="LOGD logosu"
            width={44}
            height={44}
            fetchPriority="high"
            decoding="async"
            className="h-11 w-11 rounded-lg"
          />
          <span className="text-xl font-extrabold tracking-tight text-cream">LOGD</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive =
              activeNav === item.label ||
              activeNav === item.key ||
              (activeNav === "Ana Sayfa" && item.key === "home") ||
              (activeNav === "Hakkımızda" && item.key === "about") ||
              (activeNav === "Ekibimiz" && item.key === "team") ||
              (activeNav === "Etkinlikler" && item.key === "events") ||
              (activeNav === "Showcase" && item.key === "showcase") ||
              (activeNav === "Haberler" && item.key === "news") ||
              (activeNav === "İletişim" && item.key === "contact");
            return (
              <a
                key={item.key}
                href={item.href}
                className={
                  isActive
                    ? "relative pb-1 text-sm font-semibold text-cream"
                    : "text-sm font-medium text-cream/80 transition-colors hover:text-cream"
                }
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cream" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Language Selector */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-label={t("header.selectLanguage")}
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              className="flex h-9 items-center gap-1.5 rounded-md border border-cream/25 px-3 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10"
            >
              <Globe className="h-4 w-4" />
              <span>{currentLocaleInfo.short}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-md border border-cream/20 bg-navy-deep py-1 shadow-2xl backdrop-blur-md">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLocale(l.code);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors ${
                      locale === l.code
                        ? "bg-cream/20 font-bold text-cream"
                        : "text-cream/90 hover:bg-cream/15 hover:text-cream"
                    }`}
                  >
                    <span>{l.nativeName}</span>
                    <span className="text-xs text-cream/60">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={t("header.menuToggleAria")}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-cream lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-6 rounded-xl border border-cream/15 bg-navy-deep/95 p-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-cream/85 hover:bg-cream/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-3 flex items-center justify-between border-t border-cream/10 pt-3">
            <span className="flex items-center gap-1.5 text-xs text-cream/70">
              <Globe className="h-3.5 w-3.5" />
              {t("header.selectLanguage")}
            </span>
            <div className="flex items-center gap-1.5">
              {locales.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLocale(l.code)}
                  className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors ${
                    locale === l.code
                      ? "bg-cream text-navy"
                      : "bg-cream/10 text-cream/80 hover:bg-cream/20 hover:text-cream"
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
