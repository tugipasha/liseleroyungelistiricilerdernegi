import { useEffect, useState, lazy, Suspense } from "react";
import { Globe, Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";

// Dynamically imported to eliminate ~25KB from initial page bundle and TBT
const SearchModal = lazy(() =>
  import("@/components/site/SearchModal").then((m) => ({ default: m.SearchModal })),
);

const preloadSearch = () => {
  import("@/components/site/SearchModal");
};

interface HeaderProps {
  activeNav?: string;
}

const NAV = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ekibimiz", href: "/ekibimiz" },
  { label: "Etkinlikler", href: "/etkinlikler" },
  { label: "Showcase", href: "/projeler" },
  { label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
];

const LANGS = ["Türkçe", "English", "Deutsch"];

export function Header({ activeNav }: HeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("TR");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [langOpen]);

  // Global Ctrl+K / Cmd+K listener to trigger search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          {NAV.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
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
          {/* Search Button (Desktop & Mobile) */}
          <button
            type="button"
            aria-label="Arama yap"
            title="Arama yap (Ctrl+K)"
            onMouseEnter={preloadSearch}
            onFocus={preloadSearch}
            onClick={() => setSearchOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-label="Dil seçimi"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              className="flex h-9 items-center gap-1.5 rounded-md border border-cream/25 px-3 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10"
            >
              <Globe className="h-4 w-4" />
              {lang}
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-md border border-cream/20 bg-navy-deep py-1 shadow-2xl backdrop-blur-md">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l === "Türkçe" ? "TR" : l === "English" ? "EN" : "DE");
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-cream/90 transition-colors hover:bg-cream/15 hover:text-cream"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label="Menüyü aç veya kapat"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-cream lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-6 rounded-xl border border-cream/15 bg-navy-deep/95 p-4 backdrop-blur lg:hidden">
          <div className="mb-3 flex items-center justify-between border-b border-cream/10 pb-3">
            <button
              type="button"
              onMouseEnter={preloadSearch}
              onFocus={preloadSearch}
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
              className="flex w-full items-center gap-2 rounded-lg bg-cream/10 px-3 py-2 text-xs font-medium text-cream/90 transition-colors hover:bg-cream/20"
            >
              <Search className="h-4 w-4 text-sand" />
              <span>Sitede arama yap...</span>
            </button>
          </div>

          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-cream/85 hover:bg-cream/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Global Search Dialog - Lazy loaded on demand */}
      {searchOpen && (
        <Suspense fallback={null}>
          <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      )}
    </header>
  );
}
