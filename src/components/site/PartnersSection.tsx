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
  logoSrc: string;
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
  { id: "all", label: "Tüm Partnerler (6)", icon: Layers },
  { id: "engines", label: "Oyun Stüdyoları & Topluluk", icon: Cpu },
  { id: "tech", label: "Etkinlik & Platform", icon: Building2 },
  { id: "academy", label: "Sivil Toplum & Sektör", icon: GraduationCap },
];

const PARTNER_LIST: PartnerItem[] = [
  {
    name: "Gaming Istanbul (GIST)",
    category: "engines",
    categoryLabel: "Oyun Stüdyoları & Topluluk",
    badge: "Topluluk Partneri",
    role: "İstanbul Oyun Geliştirici Topluluğu",
    description:
      "İstanbul merkezli oyun geliştirici ekosistemiyle ortak etkinlikler, networking buluşmaları ve mentorluk desteği.",
    highlight: "Ortak Etkinlikler & Mentorluk Ağı",
    logoSrc: "/partners/gaming-istanbul.jpg",
    website: "https://www.gamingistanbul.com",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
  {
    name: "NeoTroy Games",
    category: "engines",
    categoryLabel: "Oyun Stüdyoları & Topluluk",
    badge: "Stüdyo Partneri",
    role: "Bağımsız Oyun Stüdyosu",
    description:
      "Liseli geliştiricilere yönelik profesyonel oyun geliştirme deneyimi paylaşımı, atölyeler ve proje mentorluğu.",
    highlight: "Stüdyo Deneyimi & Proje Mentorluğu",
    logoSrc: "/partners/neotroy-games.jpeg",
    website: "https://www.neotroygames.com",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
  {
    name: "IGDA Türkiye/İzmir",
    category: "academy",
    categoryLabel: "Sivil Toplum & Sektör",
    badge: "Sektör Kuruluşu",
    role: "Uluslararası Oyun Geliştiricileri Derneği",
    description:
      "Global oyun geliştirici camiasına erişim, sektör buluşmaları, kariyer rehberliği ve mesleki gelişim desteği.",
    highlight: "Sektörel Ağ & Mesleki Gelişim",
    logoSrc: "/partners/igda-izmir.jpg",
    website: "https://igda.org",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
  {
    name: "Games for Change Türkiye",
    category: "academy",
    categoryLabel: "Sivil Toplum & Sektör",
    badge: "Sosyal Etki",
    role: "Toplumsal Fayda Odaklı Oyun Girişimi",
    description:
      "Sosyal fayda odaklı oyun tasarımı eğitimleri ve projelerle toplumsal konulara farkındalık kazandırma çalışmaları.",
    highlight: "Sosyal Etki Odaklı Oyun Eğitimleri",
    logoSrc: "/partners/games-for-change-turkiye.jpg",
    website: "https://www.gamesforchange.org",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
  {
    name: "Global Game Jam",
    category: "tech",
    categoryLabel: "Etkinlik & Platform",
    badge: "Etkinlik Partneri",
    role: "Dünyanın En Büyük Game Jam Organizasyonu",
    description:
      "LOGD topluluğunun her yıl resmi katılımcı sitesi olarak yer aldığı, dünya çapındaki en büyük game jam etkinliği.",
    highlight: "Resmi Katılımcı Site Statüsü",
    logoSrc: "/partners/global-game-jam.jpg",
    website: "https://globalgamejam.org",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
  {
    name: "PUBG Mobile",
    category: "tech",
    categoryLabel: "Etkinlik & Platform",
    badge: "Endüstri Partneri",
    role: "Küresel Mobil Oyun Platformu",
    description:
      "Turnuva sponsorluğu, oyun içi etkinlik desteği ve liseli geliştiricilere yönelik sektörel farkındalık iş birlikleri.",
    highlight: "Turnuva & Etkinlik Sponsorluğu",
    logoSrc: "/partners/pubg-mobile.png",
    website: "https://www.pubgmobile.com",
    colorScheme: {
      bg: "bg-white",
      text: "text-navy",
      border: "border-[#e5e5e5]",
      badgeBg: "bg-[#f2f2f2]",
      badgeText: "text-navy",
    },
  },
];

const METRICS = [
  {
    value: "6",
    label: "Stratejik Kurumsal Partner",
    desc: "Stüdyolar, sektör kuruluşları ve platformlar",
  },
  {
    value: "3",
    label: "Sivil Toplum & Sektör İş Birliği",
    desc: "Sektörel gelişim ve sosyal etki ortaklıkları",
  },
  {
    value: "2",
    label: "Küresel Etkinlik Ortaklığı",
    desc: "Global Game Jam ve PUBG Mobile iş birlikleri",
  },
  {
    value: "İzmir",
    label: "Yerel & Ulusal Ağ",
    desc: "İstanbul ve İzmir merkezli topluluk bağlantıları",
  },
];

function PartnerLogoIcon({ partner }: { partner: PartnerItem }) {
  return (
    <img
      src={partner.logoSrc}
      alt={`${partner.name} logosu`}
      loading="lazy"
      decoding="async"
      className="h-full w-full rounded-xl object-contain p-1.5"
    />
  );
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
              Oyun stüdyoları, sektör kuruluşları, sivil toplum girişimleri ve küresel etkinlik
              platformlarıyla kurduğumuz stratejik iş birlikleriyle liseli oyun yapımcılarına
              mentorluk, sektörel ağ ve etkinlik fırsatları sağlıyoruz.
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
                    className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-md transition-transform duration-300 group-hover:scale-105 ${partner.colorScheme.bg} ${partner.colorScheme.border} ${partner.colorScheme.text}`}
                  >
                    <PartnerLogoIcon partner={partner} />
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
