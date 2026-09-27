import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Search,
  X,
  FileText,
  Gamepad2,
  Calendar,
  Newspaper,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: "sayfa" | "oyun" | "etkinlik" | "haber" | "ekip";
  categoryLabel: string;
  href: string;
  badge?: string;
}

const SEARCH_DATABASE: SearchItem[] = [
  // Sayfalar
  {
    id: "page-home",
    title: "Ana Sayfa",
    description: "LOGD resmi web sitesi, topluluk istatistikleri, etkinlikler ve katılma formu.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/",
  },
  {
    id: "page-about",
    title: "Hakkımızda",
    description: "LOGD'nin vizyonu, misyonu, değerleri, yolculuğu ve kurumsal hedefleri.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/hakkimizda",
  },
  {
    id: "page-team",
    title: "Ekibimiz",
    description: "LOGD yönetim kurulu, teknik kadro, koordinatörler ve çalışma kolları.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/ekibimiz",
  },
  {
    id: "page-events",
    title: "Etkinlikler & Game Jam'ler",
    description: "Düzenlenen ve yaklaşan Game Jam maratonları, atölyeler, seminerler.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/etkinlikler",
  },
  {
    id: "page-projects",
    title: "Showcase & Oyunlar",
    description: "Lise öğrencilerinin ürettiği oyunları incele, oyna ve geri bildirim ver.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/projeler",
  },
  {
    id: "page-news",
    title: "Haberler & Blog",
    description: "Topluluk duyuruları, sektör incelemeleri, röportajlar ve güncel rehberler.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/haberler",
  },
  {
    id: "page-contact",
    title: "İletişim & Başvuru",
    description: "Bize ulaşın, sponsorluk teklifleri ve dernek iletişim kanalları.",
    category: "sayfa",
    categoryLabel: "Sayfa",
    href: "/iletisim",
  },
  {
    id: "page-privacy",
    title: "Gizlilik Politikası",
    description: "Kişisel verilerin korunması ve gizlilik standartlarımız.",
    category: "sayfa",
    categoryLabel: "Yasal",
    href: "/gizlilik-politikasi",
  },
  {
    id: "page-kvkk",
    title: "KVKK Aydınlatma Metni",
    description: "6698 sayılı Kanun kapsamında kişisel verilerin işlenmesi ve haklarınız.",
    category: "sayfa",
    categoryLabel: "Yasal",
    href: "/kvkk",
  },
  {
    id: "page-cookies",
    title: "Çerez Politikası",
    description: "Web sitemizde kullanılan çerezler, saklama süreleri ve tercih yönetimi.",
    category: "sayfa",
    categoryLabel: "Yasal",
    href: "/cerez-politikasi",
  },

  // Oyunlar & Projeler (YANJAM)
  {
    id: "game-diveboat",
    title: "DiveBoat",
    description:
      "İki oyunculu (co-op) 3D simülasyon oyunu. Dalgıç ve Shipman rolünde derin sularda koordinasyon ve takım çalışması. YANJAM.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "YANJAM Co-op",
  },
  {
    id: "game-abyss-cat",
    title: "Abyss Cat",
    description:
      "Touhou esintili zorlu bullet-hell oyunu! Dalgıç kedi ile 1000 metre derine dalın ve boss savaşlarına girin. YANJAM.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "YANJAM Web",
  },
  {
    id: "game-dive-and-find",
    title: "Dive&Find",
    description:
      "Okyanusun derinliklerinde kayıp batık hazineleri toplayıp ekipmanlarınızı yükselttiğiniz 2D keşif oyunu. YANJAM.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "YANJAM Simülasyon",
  },
  {
    id: "game-taxed-mars",
    title: "Taxed Mars",
    description:
      "Mars derinliklerinde 'Marsın Kalbi' madenini arayıp vergi memuruna yakalanmamaya çalıştığınız aksiyon oyunu. Unreal Engine.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "Unreal Engine",
  },
  {
    id: "game-drequetions",
    title: "Drequetions",
    description:
      "Matematik test kağıdı çözerken uyuyakalan çocuğun sayılarla girdiği mizahi 1 vs 10 dövüş oyunu. Godot 2D.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "YANJAM Mizah",
  },
  {
    id: "game-man-of-the-pipe",
    title: "Man Of The Pipe",
    description:
      "Boru hatları ve mekanik labirentlerde tempolu aksiyon ve roguelite hayatta kalma oyunu. Unity.",
    category: "oyun",
    categoryLabel: "Oyun / Showcase",
    href: "/projeler",
    badge: "YANJAM Roguelite",
  },

  // Etkinlikler
  {
    id: "event-1",
    title: "Global Game Jam NEXT 2025",
    description:
      "Liselilere özel uluslararası 48 saatlik oyun geliştirme maratonu ve canlı jüri değerlendirmesi.",
    category: "etkinlik",
    categoryLabel: "Etkinlik",
    href: "/etkinlikler",
    badge: "Yaklaşan",
  },
  {
    id: "event-2",
    title: "Anatolia Game Jam 2025",
    description: "450'den fazla lise öğrencisinin katıldığı büyük ulusal game jam maratonu.",
    category: "etkinlik",
    categoryLabel: "Etkinlik",
    href: "/etkinlikler",
    badge: "Tamamlandı",
  },
  {
    id: "event-3",
    title: "Unreal Engine 5 ile Lise Atölyesi",
    description:
      "Lumen, Nanite ve Blueprint sistemlerinin uygulamalı olarak anlatıldığı teknik atölye.",
    category: "etkinlik",
    categoryLabel: "Etkinlik",
    href: "/etkinlikler",
    badge: "Atölye",
  },
  {
    id: "event-4",
    title: "Pixel Art ve Sprite Animasyon Eğitimi",
    description: "Aseprite kullanarak retro 2D piksel sanatının temelleri ve oyun içi entegrasyon.",
    category: "etkinlik",
    categoryLabel: "Etkinlik",
    href: "/etkinlikler",
    badge: "Tasarım",
  },

  // Haberler
  {
    id: "news-1",
    title: "Anatolia Game Jam 2025 Başarıyla Tamamlandı!",
    description:
      "48 saatlik kesintisiz maratonda 72 oynanabilir prototip oyun üretildi ve kazananlar açıklandı.",
    category: "haber",
    categoryLabel: "Haber",
    href: "/haberler",
    badge: "GameJam",
  },
  {
    id: "news-2",
    title: "Pixel Art Atölyesi’nden Harika Çalışmalar",
    description:
      "Atölye katılımcısı liselilerin ürettiği retro karakterler ve açık kaynak varlık kütüphanesi.",
    category: "haber",
    categoryLabel: "Haber",
    href: "/haberler",
    badge: "Topluluk",
  },
  {
    id: "news-3",
    title: "Unreal Engine 5.4 Öne Çıkan Özellikleri",
    description:
      "Performans iyileştirmeleri, Motion Matching ve lise geliştiricileri için hazırladığımız UE kılavuzu.",
    category: "haber",
    categoryLabel: "Haber",
    href: "/haberler",
    badge: "Rehber",
  },
  {
    id: "news-4",
    title: "Toplulukta Yeni Mentorluk Programı Başlıyor!",
    description:
      "Sektör profesyonelleri ile lise geliştiricilerini buluşturan 6 haftalık birebir mentorluk süreci.",
    category: "haber",
    categoryLabel: "Haber",
    href: "/haberler",
    badge: "Kariyer",
  },

  // Ekip & Topluluk Başkanları
  {
    id: "team-1",
    title: "Yavuz Deniz - Aydın Fen Lisesi",
    description: "Aydın Fen Lisesi LOGD Topluluk Başkanı. Okul temsilciliği ve oyun kulübü.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "Fen Lisesi",
  },
  {
    id: "team-2",
    title: "Efkan Şenol - Bornova Anadolu Lisesi",
    description:
      "Bornova Anadolu Lisesi LOGD Topluluk Başkanı. Oyun maratonları ve kulüp koordinasyonu.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "Anadolu Lisesi",
  },
  {
    id: "team-3",
    title: "Deniz Ak - İzmir Fen Lisesi (İFL)",
    description: "İzmir Fen Lisesi LOGD Topluluk Başkanı. Algoritma ve oyun geliştirme topluluğu.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "Fen Lisesi",
  },
  {
    id: "team-4",
    title: "Mehmet Kaan Cengiz - İzmir Atatürk Lisesi",
    description: "İzmir Atatürk Lisesi LOGD Topluluk Başkanı. Lise oyun geliştirme koordinatörü.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "Anadolu Lisesi",
  },
  {
    id: "team-5",
    title: "Furkan Yurt - Cihat Kora Anadolu Lisesi",
    description: "Cihat Kora Anadolu Lisesi LOGD Topluluk Başkanı. Kulüp ve atölye organizatörü.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "Anadolu Lisesi",
  },
  {
    id: "team-6",
    title: "Akif Ersoy Armağan - Mazhar Zorlu MTAL",
    description: "Mazhar Zorlu MTAL LOGD Topluluk Başkanı. Bilişim ve oyun motoru atölyeleri.",
    category: "ekip",
    categoryLabel: "Temsilci",
    href: "/ekibimiz",
    badge: "MTAL",
  },
];

const CATEGORY_ICONS = {
  sayfa: FileText,
  oyun: Gamepad2,
  etkinlik: Calendar,
  haber: Newspaper,
  ekip: Users,
};

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  // Reset query on close
  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveCategory("all");
    }
  }, [open]);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SEARCH_DATABASE.filter((item) => {
      const matchCategory = activeCategory === "all" || item.category === activeCategory;
      if (!matchCategory) return false;

      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
      );
    });
  }, [query, activeCategory]);

  const handleSelect = (href: string) => {
    onOpenChange(false);
    window.location.href = href;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        id="search-modal-dialog"
        className="max-h-[85vh] w-[95vw] max-w-2xl overflow-hidden p-0 sm:rounded-2xl"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{t("search.title")}</DialogTitle>
          <DialogDescription>{t("search.description")}</DialogDescription>
        </DialogHeader>

        {/* Search Header Bar */}
        <div className="flex items-center border-b border-border bg-card px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            id="site-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.inputPlaceholder")}
            autoFocus
            className="ml-3 w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none sm:text-base"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mr-2 rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Aramayı temizle"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <span className="hidden rounded bg-secondary px-2 py-0.5 text-[11px] font-mono text-muted-foreground sm:inline-block">
            ESC
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-border/60 bg-muted/40 px-4 py-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {t("search.categoriesAll")}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("oyun")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "oyun"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            {t("search.categoryGame")}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("etkinlik")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "etkinlik"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" />
            {t("search.categoryEvent")}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("haber")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "haber"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Newspaper className="h-3.5 w-3.5" />
            {t("search.categoryNews")}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("ekip")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "ekip"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            {t("search.categoryTeam")}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("sayfa")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-medium transition-colors ${
              activeCategory === "sayfa"
                ? "bg-navy-deep text-cream font-semibold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            {t("search.categoryPage")}
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[55vh] overflow-y-auto p-2 sm:p-3">
          {filteredResults.length > 0 ? (
            <div className="space-y-1">
              {filteredResults.map((item) => {
                const IconComponent = CATEGORY_ICONS[item.category] || FileText;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.href)}
                    className="group flex w-full items-center justify-between gap-3 rounded-xl p-3 text-left transition-colors hover:bg-secondary/70 focus:bg-secondary/70 focus:outline-none"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-muted-foreground shadow-xs transition-colors group-hover:bg-navy-deep group-hover:text-cream">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-foreground group-hover:text-navy-deep">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="rounded-full bg-sand/20 px-2 py-0.5 text-[10px] font-bold text-navy">
                              {item.badge}
                            </span>
                          )}
                          <span className="text-[11px] font-medium text-muted-foreground">
                            • {item.categoryLabel}
                          </span>
                        </div>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Search className="h-6 w-6" />
              </div>
              <h4 className="mt-3 text-sm font-bold text-foreground">
                {t("search.noResultsTitle")}
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">{t("search.noResultsDesc")}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Game Jam", "Unreal", "Unity", "Ekibimiz", "Hakkımızda", "Showcase"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      <Sparkles className="h-3 w-3 text-sand" />
                      {tag}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-border/70 bg-card px-4 py-2.5 text-[11px] text-muted-foreground">
          <span>
            {filteredResults.length} {t("search.title")}
          </span>
          <div className="hidden sm:flex items-center gap-3">
            <span>↑↓ {t("search.keyboardNavigate")}</span>
            <span>↵ {t("search.keyboardSelect")}</span>
            <span>ESC {t("search.keyboardClose")}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
