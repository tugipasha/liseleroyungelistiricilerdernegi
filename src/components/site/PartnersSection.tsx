import { useState } from "react";
import {
  Handshake,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Building2,
  GraduationCap,
  Cpu,
  Layers,
  Award,
  ArrowRight,
} from "lucide-react";

export type PartnerCategory = "all" | "engines" | "tech" | "academy";

interface PartnerItem {
  name: string;
  category: PartnerCategory;
  categoryLabel: string;
  badge: string;
  role: string;
  description: string;
  highlight: string;
  iconType:
    | "unity"
    | "unreal"
    | "microsoft"
    | "github"
    | "blender"
    | "itch"
    | "odtu"
    | "gsb"
    | "ibb"
    | "girvak";
  website: string;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

const PARTNER_CATEGORIES: { id: PartnerCategory; label: string; icon: typeof Layers }[] = [
  { id: "all", label: "Tüm Partnerler (10)", icon: Layers },
  { id: "engines", label: "Oyun Motorları & 3D", icon: Cpu },
  { id: "tech", label: "Teknoloji & Bulut", icon: Building2 },
  { id: "academy", label: "Akademi & Kamu", icon: GraduationCap },
];

const PARTNER_LIST: PartnerItem[] = [
  {
    name: "Unreal Engine",
    category: "engines",
    categoryLabel: "Oyun Motoru & 3D",
    badge: "Motor Partneri",
    role: "Gerçek Zamanlı 3D & Simülasyon",
    description:
      "Gelişmiş grafik motoru lisansları, Unreal Engine öğrenci atölyeleri ve teknik seminer desteği.",
    highlight: "Ücretsiz Lisans & Atölye Desteği",
    iconType: "unreal",
    website: "https://www.unrealengine.com",
    colorScheme: {
      bg: "bg-[#1f232b]",
      text: "text-white",
      border: "border-[#353b47]",
      badgeBg: "bg-[#2a2f3b]",
      badgeText: "text-slate-200",
    },
  },
  {
    name: "Unity",
    category: "engines",
    categoryLabel: "Oyun Motoru & 3D",
    badge: "Ekosistem Partneri",
    role: "Oyun Geliştirme Ekosistemi",
    description:
      "LOGD Game Jam etkinliklerinde Unity lisans sponsorluğu, öğrenci sertifikasyonları ve teknik mentorluk.",
    highlight: "Game Jam Sponsorluğu & Pro Lisans",
    iconType: "unity",
    website: "https://unity.com",
    colorScheme: {
      bg: "bg-[#18212b]",
      text: "text-white",
      border: "border-[#2b3949]",
      badgeBg: "bg-[#202d3d]",
      badgeText: "text-slate-200",
    },
  },
  {
    name: "Microsoft",
    category: "tech",
    categoryLabel: "Teknoloji & Bulut",
    badge: "Küresel Teknoloji",
    role: "Bulut & Geliştirici Altyapısı",
    description:
      "Azure for Students bulut sunucu kredileri, yapay zeka servisleri ve teknik seminer erişimi.",
    highlight: "Azure Kredileri & Yapay Zeka Desteği",
    iconType: "microsoft",
    website: "https://www.microsoft.com",
    colorScheme: {
      bg: "bg-[#1e2430]",
      text: "text-white",
      border: "border-[#323d52]",
      badgeBg: "bg-[#263145]",
      badgeText: "text-sky-300",
    },
  },
  {
    name: "GitHub",
    category: "tech",
    categoryLabel: "Teknoloji & Bulut",
    badge: "Geliştirici Araçları",
    role: "Açık Kaynak & Versiyon Kontrolü",
    description:
      "GitHub Student Developer Pack erişimi, ortak açık kaynak geliştirme atölyeleri ve proje repoları.",
    highlight: "Öğrenci Geliştirici Paketi & Git Mentorluğu",
    iconType: "github",
    website: "https://github.com",
    colorScheme: {
      bg: "bg-[#1c2128]",
      text: "text-white",
      border: "border-[#373e47]",
      badgeBg: "bg-[#2d333b]",
      badgeText: "text-slate-200",
    },
  },
  {
    name: "Blender",
    category: "engines",
    categoryLabel: "Oyun Motorları & 3D",
    badge: "Açık Kaynak 3D",
    role: "3D Modelleme & Animasyon",
    description:
      "Liseli oyun geliştiriciler için 3D karakter ve çevre modelleme eğitimleri, ücretsiz asset desteği.",
    highlight: "3D Atölyeler & Açık Kaynak Materyaller",
    iconType: "blender",
    website: "https://www.blender.org",
    colorScheme: {
      bg: "bg-[#2b241c]",
      text: "text-white",
      border: "border-[#4a3928]",
      badgeBg: "bg-[#3d2f20]",
      badgeText: "text-amber-300",
    },
  },
  {
    name: "itch.io",
    category: "tech",
    categoryLabel: "Teknoloji & Bulut",
    badge: "Oyun Vitrini",
    role: "Bağımsız Oyun Dağıtım Platformu",
    description:
      "LOGD Jam projelerinin dünya genelindeki oyuncularla buluştuğu resmi etkinlik sayfası ve vitrin.",
    highlight: "Resmi Jam Sayfası & Global Dağıtım",
    iconType: "itch",
    website: "https://itch.io",
    colorScheme: {
      bg: "bg-[#2e1d23]",
      text: "text-white",
      border: "border-[#522c39]",
      badgeBg: "bg-[#42222d]",
      badgeText: "text-rose-300",
    },
  },
  {
    name: "ODTÜ",
    category: "academy",
    categoryLabel: "Akademi & Kamu",
    badge: "Akademik Partner",
    role: "Orta Doğu Teknik Üniversitesi",
    description:
      "Akademik danışmanlık, kampüs içi oyun geliştirme seminerleri ve üniversite öğrencileriyle mentorluk ağı.",
    highlight: "Akademik Mentorluk & Kampüs İş Birliği",
    iconType: "odtu",
    website: "https://www.metu.edu.tr",
    colorScheme: {
      bg: "bg-[#2a1c3d]",
      text: "text-white",
      border: "border-[#472d69]",
      badgeBg: "bg-[#382354]",
      badgeText: "text-purple-300",
    },
  },
  {
    name: "T.C. Gençlik ve Spor Bakanlığı",
    category: "academy",
    categoryLabel: "Akademi & Kamu",
    badge: "Kamu Desteği",
    role: "Gençlik & Topluluk Destekleri",
    description:
      "81 ildeki Gençlik Merkezleri bünyesinde ortak etkinlik alanları, fiziksel atölyeler ve resmi destek.",
    highlight: "81 İlde Gençlik Merkezi Atölye Alanları",
    iconType: "gsb",
    website: "https://gsb.gov.tr",
    colorScheme: {
      bg: "bg-[#331c19]",
      text: "text-white",
      border: "border-[#5c2d26]",
      badgeBg: "bg-[#45221d]",
      badgeText: "text-red-300",
    },
  },
  {
    name: "İstanbul Büyükşehir Belediyesi",
    category: "academy",
    categoryLabel: "Akademi & Kamu",
    badge: "Yerel Yönetim",
    role: "İnovasyon & Teknoloji Merkezleri",
    description:
      "İBB Teknoloji Merkezleri'nde fiziki hackathon alanları, lojistik destek ve genç oyun stüdyoları kuluçkası.",
    highlight: "Fiziki Hackathon Alanları & Mekan Desteği",
    iconType: "ibb",
    website: "https://www.ibb.istanbul",
    colorScheme: {
      bg: "bg-[#142930]",
      text: "text-white",
      border: "border-[#204957]",
      badgeBg: "bg-[#1a3a45]",
      badgeText: "text-teal-300",
    },
  },
  {
    name: "Girişimcilik Vakfı",
    category: "academy",
    categoryLabel: "Akademi & Kamu",
    badge: "Girişim Ekosistemi",
    role: "Genç Girişimci Ağı (GIRVAK)",
    description:
      "Genç oyun yapımcılarına yönelik girişimcilik kültürü, liderlik atölyeleri, yatırımcı buluşmaları ve staj ağı.",
    highlight: "Girişimcilik Mentorluğu & Staj Ağı",
    iconType: "girvak",
    website: "https://girisimcilikvakfi.org",
    colorScheme: {
      bg: "bg-[#2d2817]",
      text: "text-white",
      border: "border-[#524623]",
      badgeBg: "bg-[#40381e]",
      badgeText: "text-amber-300",
    },
  },
];

const METRICS = [
  {
    value: "10+",
    label: "Stratejik Kurumsal Partner",
    desc: "Global teknoloji devleri, motorlar ve kamu",
  },
  {
    value: "₺2.5M+",
    label: "Sağlanan Lisans & Kaynak",
    desc: "Öğrencilere bedelsiz araç ve sunucu desteği",
  },
  {
    value: "12+",
    label: "Yıllık Ortak Jam & Hackathon",
    desc: "Fiziki ve çevrim içi büyük buluşmalar",
  },
  {
    value: "81 İl",
    label: "Erişilebilir Topluluk",
    desc: "Türkiye geneli eşit imkan ve fırsat ağı",
  },
];

function PartnerLogoIcon({ type }: { type: PartnerItem["iconType"] }) {
  switch (type) {
    case "unity":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm-1 2.3l6.5 3.8-2.6 1.5-6.5-3.8L11 4.3zM5.2 8.7L10 11.5v5.8l-4.8-2.8V8.7zm8.8 5.8V11.5l4.8-2.8v5.8l-4.8 2.8z" />
        </svg>
      );
    case "unreal":
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-current text-[13px] font-black tracking-tight">
          UE
        </div>
      );
    case "microsoft":
      return (
        <div className="grid h-6 w-6 grid-cols-2 gap-0.5">
          <div className="rounded-[1px] bg-[#f25022]" />
          <div className="rounded-[1px] bg-[#7fba00]" />
          <div className="rounded-[1px] bg-[#00a4ef]" />
          <div className="rounded-[1px] bg-[#ffb900]" />
        </div>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "blender":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2a10 10 0 0 0-7.07 17.07l2.12-2.12A7 7 0 1 1 19 12h3A10 10 0 0 0 12 2z" />
          <path d="M12 20a8 8 0 0 1-5.66-2.34l-1.41 1.41A10 10 0 0 0 12 22v-2z" />
        </svg>
      );
    case "itch":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M3 5l2 3v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l2-3H3zm5 5h2v2H8v-2zm6 0h2v2h-2v-2zm-5 4h6v2H9v-2z" />
        </svg>
      );
    case "odtu":
      return <span className="text-base font-black tracking-tight text-white">ODTÜ</span>;
    case "gsb":
      return (
        <div className="flex flex-col items-center leading-none text-white">
          <span className="text-[10px] font-bold">T.C.</span>
          <span className="text-xs font-black tracking-wider">GSB</span>
        </div>
      );
    case "ibb":
      return (
        <div className="flex flex-col items-center leading-none text-white">
          <span className="text-xs font-black tracking-wider">İBB</span>
          <span className="text-[9px] font-semibold text-white/80">OYUN</span>
        </div>
      );
    case "girvak":
      return <span className="text-sm font-black tracking-wider text-white">GIRVAK</span>;
  }
}

export function PartnersSection() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>("all");

  const filteredPartners =
    selectedCategory === "all"
      ? PARTNER_LIST
      : PARTNER_LIST.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="partnerlerimiz"
      aria-labelledby="partnerlerimiz-heading"
      className="content-auto relative overflow-hidden border-t border-cream/10 bg-navy-deep py-20 text-cream lg:py-28"
    >
      {/* Background Ambience Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/10 via-indigo-500/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sand/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-sand">
              <Handshake className="h-3.5 w-3.5" />
              PARTNERLERİMİZ & DESTEKÇİLERİMİZ
            </div>
            <h2
              id="partnerlerimiz-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            >
              Geleceğin geliştiricilerini güçlü ortaklıklarla destekliyoruz.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              Küresel oyun motorları, teknoloji devleri, köklü üniversiteler ve kamu kuruluşlarıyla
              kurduğumuz stratejik iş birlikleriyle liseli oyun yapımcılarına profesyonel araçlar,
              eğitimler, mentorluk ve fiziki alanlar sağlıyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="/iletisim"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-sand px-5 text-sm font-bold text-navy transition-all duration-200 hover:bg-sand/90 hover:shadow-lg active:scale-95"
            >
              Partnerimiz Olun <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Impact Metric Strip */}
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-cream/20 hover:bg-cream/[0.07]"
            >
              <p className="text-2xl font-black tracking-tight text-sand sm:text-3xl lg:text-4xl">
                {m.value}
              </p>
              <h3 className="mt-1.5 text-sm font-bold text-cream">{m.label}</h3>
              <p className="mt-1 text-xs text-cream/60">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-cream/10 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {PARTNER_CATEGORIES.map(({ id, label, icon: CatIcon }) => {
              const isActive = selectedCategory === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedCategory(id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-cream text-navy shadow-sm"
                      : "border border-cream/10 bg-cream/[0.05] text-cream/70 hover:border-cream/20 hover:bg-cream/[0.09] hover:text-cream"
                  }`}
                >
                  <CatIcon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-cream/50">
            {filteredPartners.length} partner gösteriliyor
          </span>
        </div>

        {/* Partners Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-cream/10 bg-gradient-to-b from-cream/[0.06] to-cream/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream/30 hover:bg-cream/[0.09] hover:shadow-xl"
            >
              <div>
                {/* Card Top: Logo Mark + Badges */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-md transition-transform duration-300 group-hover:scale-105 ${partner.colorScheme.bg} ${partner.colorScheme.border} ${partner.colorScheme.text}`}
                  >
                    <PartnerLogoIcon type={partner.iconType} />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${partner.colorScheme.badgeBg} ${partner.colorScheme.badgeText}`}
                    >
                      {partner.badge}
                    </span>
                    <span className="text-[11px] font-medium text-cream/50">
                      {partner.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-extrabold tracking-tight text-cream">
                      {partner.name}
                    </h3>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${partner.name} resmi internet sitesini ziyaret et (yeni sekmede açılır)`}
                      className="rounded-lg p-1 text-cream/40 transition-colors hover:bg-cream/10 hover:text-cream"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-sand/80">{partner.role}</p>

                  <p className="mt-3 text-xs leading-relaxed text-cream/70 sm:text-[13px]">
                    {partner.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Highlight Feature */}
              <div className="mt-5 border-t border-cream/10 pt-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-cream/90">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-sand" />
                  <span className="line-clamp-1">{partner.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Callout Banner */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-sand/30 bg-gradient-to-r from-sand/15 via-cream/[0.07] to-transparent p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sand">
                <Sparkles className="h-3.5 w-3.5" />
                KURUMSAL İŞ BİRLİĞİ VE DESTEK
              </div>
              <h3 className="mt-2 text-xl font-extrabold text-cream sm:text-2xl">
                Liseli gençlerin oyun geliştirme serüvenine güç katın.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-cream/75 sm:text-sm">
                Kurumunuzu veya şirketinizi LOGD ekosistemine dahil ederek geleceğin yazılımcı ve
                tasarımcılarına mentorluk, araç desteği ve sponsorluk sağlayabilirsiniz.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/iletisim"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-sand px-6 text-sm font-bold text-navy transition-all duration-200 hover:bg-sand/90 hover:shadow-md"
              >
                İş Birliği Başvurusu <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/hakkimizda"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-cream/20 bg-cream/5 px-5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
