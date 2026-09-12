import { useState, useEffect } from "react";
import { Cookie, ShieldCheck, Settings2, X, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { type CookiePreferences } from "@/lib/cookie-settings";

const STORAGE_KEY = "logd_cookie_preferences_v1";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
    savedAt: "",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences(JSON.parse(stored));
      } else {
        // Defer until browser is idle and critical render is complete to prevent forced reflow
        const show = () => {
          if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            window.requestIdleCallback(() => setIsOpen(true), { timeout: 3500 });
          } else {
            setTimeout(() => setIsOpen(true), 2500);
          }
        };

        if (document.readyState === "complete") {
          show();
        } else {
          window.addEventListener("load", show, { once: true });
        }
        return () => window.removeEventListener("load", show);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setModalOpen(true);
    };
    window.addEventListener("logd-open-cookie-settings", handleOpen);
    return () => window.removeEventListener("logd-open-cookie-settings", handleOpen);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const updated = { ...prefs, necessary: true, savedAt: new Date().toISOString() };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setIsOpen(false);
    setModalOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      savedAt: "",
    });
  };

  const handleAcceptNecessary = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      savedAt: "",
    });
  };

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      {isOpen && (
        <div
          id="cookie-consent-banner"
          role="region"
          aria-label="Çerez İzni Bildirimi"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-[960px] animate-in fade-in slide-in-from-bottom-5 duration-300 sm:bottom-6 sm:left-6 sm:right-6"
        >
          <div className="card-elevate relative flex flex-col justify-between gap-5 rounded-2xl border border-border/90 bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:p-6 md:flex-row md:items-center">
            {/* Close / Dismiss to minimum */}
            <button
              onClick={handleAcceptNecessary}
              aria-label="Kapat ve gerekli çerezleri kabul et"
              className="absolute right-3.5 top-3.5 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Banner Text */}
            <div className="flex items-start gap-4 pr-6 sm:pr-0">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy sm:flex">
                <Cookie className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                  Çerez Tercihleriniz ve Gizliliğiniz
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  LOGD olarak, web sitemizde deneyiminizi iyileştirmek, içerikleri optimize etmek ve
                  topluluk etkinliklerimizi duyurmak için çerezler kullanıyoruz. Detaylı bilgi için{" "}
                  <a
                    href="/gizlilik-politikasi"
                    className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
                  >
                    Gizlilik Politikası
                  </a>
                  ,{" "}
                  <a
                    href="/kvkk"
                    className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
                  >
                    KVKK Metni
                  </a>{" "}
                  ve{" "}
                  <a
                    href="/cerez-politikasi"
                    className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
                  >
                    Çerez Politikası
                  </a>
                  'nı inceleyebilirsiniz.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex shrink-0 flex-wrap items-center gap-2 pt-1 md:pt-0">
              <button
                id="cookie-settings-btn"
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Settings2 className="h-3.5 w-3.5" />
                Özelleştir
              </button>

              <button
                id="cookie-necessary-btn"
                type="button"
                onClick={handleAcceptNecessary}
                className="inline-flex h-9 items-center rounded-lg border border-border bg-secondary/60 px-3.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Tümünü Reddet
              </button>

              <button
                id="cookie-accept-all-btn"
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-navy-deep px-4 text-xs font-bold text-cream shadow-sm transition-opacity hover:opacity-90"
              >
                <Check className="h-3.5 w-3.5" />
                Tümünü Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Persistent Cookie Trigger (reopen preferences anytime) */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Çerez Tercihlerini Yönet"
          title="Çerez Tercihleri"
          className="fixed bottom-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/95 text-navy-deep shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-card hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-navy-deep/40"
        >
          <Cookie className="h-5 w-5" />
        </button>
      )}

      {/* Preferences Dialog / Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          id="cookie-preferences-dialog"
          className="max-h-[90vh] overflow-y-auto sm:max-w-lg"
        >
          <DialogHeader>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-navy">
                <ShieldCheck className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold">Çerez Tercihleri ve İzinler</DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Hangi çerez kategorilerini kabul etmek istediğinizi seçebilirsiniz.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-2 space-y-4 text-left">
            {/* Category 1: Zorunlu */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-secondary/30 p-3.5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground sm:text-sm">
                    Zorunlu Çerezler
                  </span>
                  <span className="rounded bg-navy/10 px-1.5 py-0.5 text-[10px] font-semibold text-navy">
                    Her zaman aktif
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Sitenin temel işlevlerinin (güvenlik, sayfa geçişleri, oturum ve çerez tercihleri)
                  düzgün çalışması için teknik olarak gereklidir. Kapatılamaz.
                </p>
              </div>
              <Switch checked={true} disabled aria-label="Zorunlu çerezler" />
            </div>

            {/* Category 2: İşlevsel */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-3.5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-foreground sm:text-sm">
                  İşlevsel Çerezler
                </span>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Dil seçimi (TR/EN/DE), yazı tipi boyutu ve site içi kişiselleştirilmiş
                  tercihlerinizi hatırlamamızı sağlar.
                </p>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, functional: checked }))
                }
                aria-label="İşlevsel çerezler izni"
              />
            </div>

            {/* Category 3: Analitik */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-3.5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-foreground sm:text-sm">
                  Performans ve Analitik Çerezleri
                </span>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Ziyaretçi sayıları, popüler sayfalar ve gezinme trafiğini anonim istatistiki
                  olarak analiz ederek siteyi geliştirmemize yardımcı olur.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
                aria-label="Performans ve analitik çerezleri izni"
              />
            </div>

            {/* Category 4: Pazarlama / Tanıtım */}
            <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-3.5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-foreground sm:text-sm">
                  Etkinlik ve Duyuru Çerezleri
                </span>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Yeni Game Jam, atölye ve lise turnuvaları duyurularının ilgi alanlarınıza uygun
                  şekilde iletilmesine katkı sağlar.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
                aria-label="Etkinlik ve duyuru çerezleri izni"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col-reverse justify-end gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-4 text-xs font-semibold text-foreground hover:bg-secondary"
            >
              Vazgeç
            </button>
            <button
              type="button"
              onClick={() => savePreferences(preferences)}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-navy-deep px-4 text-xs font-bold text-cream hover:opacity-90"
            >
              <Check className="h-3.5 w-3.5" />
              Tercihlerimi Kaydet
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
