import { useState, useEffect } from "react";
import {
  UPCOMING_EVENTS as DEFAULT_UPCOMING,
  HERO_STATS as DEFAULT_EVENT_STATS,
} from "@/data/eventsData";
import {
  PRIMARY_GAMES as DEFAULT_GAMES,
  SHOWCASE_STATS as DEFAULT_GAME_STATS,
} from "@/data/showcaseGames";

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  logoUrl: string;
  metaDescription: string;
  keywords: string;
  associationNumber: string;
  contactEmail: string;
  kvkkEmail: string;
  phone: string;
  address: string;
  instagramUrl: string;
  discordUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  youtubeUrl: string;
  twitterUrl: string;
  adminPasscode: string;
}

export interface HomePageData {
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  heroPrimaryCtaText: string;
  heroPrimaryCtaLink: string;
  heroSecondaryCtaText: string;
  heroSecondaryCtaLink: string;
  stats: Array<{ value: string; label: string }>;
  communityTitle: string;
  communityDesc: string;
  communityCtaText: string;
  communityCtaLink: string;
  newsletterHeading: string;
  newsletterDesc: string;
}

export interface AboutPageData {
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  stats: Array<{ value: string; label: string }>;
  values: Array<{ id: string; title: string; desc: string }>;
  timeline: Array<{ id: string; year: string; title: string; description: string }>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  school?: string;
  phone?: string;
  image?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Etkinlikler" | "Topluluk" | "Industry News" | "Duyurular";
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
  status: "published" | "draft";
}

export interface CMSUpcomingEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  image: string;
  category: "Game Jam" | "Seminer" | "Atölye" | "Etkinlik";
  mode: "Online" | "Offline";
  description: string;
  dateRange: string;
  locationOrTime: string;
  status?: "published" | "draft";
}

export interface CMSGameProject {
  id: string;
  title: string;
  image: string;
  platform: "PC" | "Web" | "Mobil" | "Konsol";
  genre: "Macera" | "Aksiyon" | "Bulmaca" | "Strateji" | "Simülasyon" | "Platform";
  year: number;
  rating: number;
  category: "Game Jam" | "Yarışma" | "Atölye" | "Topluluk Projesi" | "Eğitim Projesi";
  event: string;
  developer: string;
  school: string;
  description: string;
  engine: string;
  demoUrl?: string | undefined;
  status?: "published" | "draft" | undefined;
  views?: string | undefined;
  numericViews?: number | undefined;
  itchId?: number | undefined;
  authorUrl?: string | undefined;
  tags?: string[] | undefined;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  tier: "Platinum" | "Gold" | "Silver" | "Community";
  description: string;
  websiteUrl: string;
  logoUrl?: string | undefined;
}

export interface MediaAsset {
  id: string;
  title: string;
  url: string;
  type: "image" | "document";
  size?: string;
  date: string;
}

export interface CMSData {
  settings: SiteSettings;
  home: HomePageData;
  about: AboutPageData;
  team: TeamMember[];
  news: NewsPost[];
  events: CMSUpcomingEvent[];
  games: CMSGameProject[];
  partners: PartnerItem[];
  media: MediaAsset[];
  lastSavedAt: string;
}

const CMS_STORAGE_KEY = "logd_cms_store_v3";

export const DEFAULT_CMS_DATA: CMSData = {
  settings: {
    siteTitle: "LOGD | Liseler Oyun Geliştiricileri Derneği",
    tagline: "Liseliler İçin, Liselilerle Geleceğin Oyunlarını İnşa Ediyoruz",
    logoUrl: "/__l5e/assets-v1/d1c732d8-9587-4251-91e2-848b03f215e9/logd-logo.webp",
    metaDescription:
      "Liseli oyun geliştiricilerinin resmî sivil toplum kuruluşu: projeler, Anatolia Game Jam, eğitimler ve fırsatlar.",
    keywords:
      "LOGD, Liseler Oyun Geliştiricileri Derneği, dernek kütük 35-089-005, lise oyun geliştirme, game jam, lise bilişim kulüpleri, Unity, Godot, Unreal Engine",
    associationNumber: "35-089-005",
    contactEmail: "Business@logddev.com",
    kvkkEmail: "kvkk@logd.org.tr",
    phone: "+90 (232) 483 3500",
    address: "Konak, İzmir, Türkiye",
    instagramUrl:
      "https://www.instagram.com/logddev?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    discordUrl: "https://discord.gg/per2RTmmP",
    linkedinUrl:
      "https://www.linkedin.com/company/liseler-oyun-geli%C5%9Ftiriciler-derne%C4%9Fi/posts/?viewAsMember=true",
    githubUrl: "https://github.com/logd-org",
    youtubeUrl: "https://www.youtube.com/@logdresmi",
    twitterUrl: "https://x.com/logdresmi",
    adminPasscode: "logd2025",
  },
  home: {
    heroEyebrow: "Türkiye'nin En Büyük Liseli Oyun Geliştirici Ağı",
    heroTitleLine1: "Geleceğin oyunlarını",
    heroTitleLine2: "liselerden başlatıyoruz.",
    heroDescription:
      "Türkiye genelinde lise öğrencilerini oyun geliştirme, kodlama, 3D modelleme ve dijital sanat etrafında buluşturan bağımsız sivil toplum kuruluşu.",
    heroPrimaryCtaText: "Topluluğa Katıl",
    heroPrimaryCtaLink: "#katil",
    heroSecondaryCtaText: "Projeleri İncele",
    heroSecondaryCtaLink: "/projeler",
    stats: [
      { value: "81", label: "İlde Aktif Ağ" },
      { value: "600+", label: "Gönüllü Mentor" },
      { value: "45+", label: "Game Jam" },
      { value: "10K+", label: "Lise Öğrencisi" },
    ],
    communityTitle: "Birlikte büyüyen büyük bir aile.",
    communityDesc:
      "Türkiye'nin 81 ilinde yer alan liseli geliştiriciler, sektörün mentorlarıyla büyüyen bir topluluğun parçası olun.",
    communityCtaText: "Topluluğa Katıl",
    communityCtaLink: "#katil",
    newsletterHeading: "Sıradaki projede sen de varsın.",
    newsletterDesc: "Etkinliklerden haberdar ol, içeriklerden yararlan ve topluluğun parçası kal.",
  },
  about: {
    missionTitle: "Misyon",
    missionDesc:
      "Lise çağındaki oyun geliştirici gençlerin öğrenme, üretme ve paylaşma süreçlerini sürekli kılan bir topluluk modelini hayata geçirerek sektörün gerçek üretim dinamikleriyle buluşturmak. Geleceğin oyun geliştiricilerinin yetişmesine katkı sağlamak.",
    visionTitle: "Vizyon",
    visionDesc:
      "Lise çağındaki genç yetenekleri erken aşamada destekleyerek Türkiye genelinde sürdürülebilir topluluk ağları kurmak ve liseli geliştiricilerin fikirlerini sektörel standartlarda projelere dönüştürerek oyun sektörünün geleceğine yön vermelerini sağlamak.",
    stats: [
      { value: "10.000+", label: "Geliştirici Genç" },
      { value: "45+", label: "Etkinlik" },
      { value: "81", label: "İlde Aktif" },
      { value: "600+", label: "Gönüllü Mentor" },
    ],
    values: [
      {
        id: "v1",
        title: "Eşit Fırsat & Kapsayıcılık",
        desc: "Türkiye'nin hangi ilinde olursanız olun, donanım veya imkân engelini mentorlukla aşıyoruz.",
      },
      {
        id: "v2",
        title: "Açık Kaynak & Paylaşım",
        desc: "Bilgi paylaştıkça büyür. Topluluk kodlarını, eğitimlerini ve araçlarını herkese açık tutuyoruz.",
      },
      {
        id: "v3",
        title: "Üretim Odaklılık",
        desc: "Sadece tüketici değil, geleceğin oyunlarını tasarlayan yaratıcı üreticiler yetiştiriyoruz.",
      },
      {
        id: "v4",
        title: "Mentorluk ve Rehberlik",
        desc: "Sektör profesyonelleriyle gençleri doğrudan eşleştirerek gerçek dünya deneyimi sağlıyoruz.",
      },
    ],
    timeline: [
      {
        id: "t1",
        year: "2025",
        title: "Kuruluş ve İlk Buluşma",
        description:
          "Kasım 2025'te LOGD fikri doğdu; liseli oyun geliştiricileri tek çatı altında toplayan ilk adımlar atıldı.",
      },
      {
        id: "t2",
        year: "2026 (Erken Dönem)",
        title: "Etkinlikler ve Eğitimler",
        description:
          "Game jam'ler, mentorluklar ve atölye çalışmalarıyla topluluk yapımızı güçlendirdik ve üye ağımızı genişlettik.",
      },
      {
        id: "t3",
        year: "2026 (Günümüz)",
        title: "Sektörel Üretim",
        description:
          "Genç yeteneklerin fikirlerini sektörel standartlarda projelere dönüştürmelerini desteklemeyi sürdürüyoruz.",
      },
      {
        id: "t4",
        year: "Gelecek",
        title: "Ulusal Ekosistem",
        description:
          "Türkiye'nin her ilindeki lise öğrencilerine ulaşarak liseli geliştiricilerin geleceğine yön vermeyi hedefliyoruz.",
      },
    ],
  },
  team: [
    {
      id: "baskan-yavuz-deniz",
      name: "Yavuz Deniz",
      role: "Topluluk Başkanı",
      school: "Aydın Fen Lisesi",
      phone: "0553 832 83 66",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-poyraz",
      name: "Poyraz",
      role: "Topluluk Başkanı",
      school: "Bahçeşehir Fentek",
      phone: "0542 631 09 82",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-efkan-senol",
      name: "Efkan Şenol",
      role: "Topluluk Başkanı",
      school: "Bornova Anadolu Lisesi",
      phone: "0530 887 97 56",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-furkan-yurt",
      name: "Furkan Yurt",
      role: "Topluluk Başkanı",
      school: "Cihat Kora Anadolu Lisesi",
      phone: "0554 188 22 59",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-deniz-ak",
      name: "Deniz Ak",
      role: "Topluluk Başkanı",
      school: "İzmir Fen Lisesi (İFL)",
      phone: "0544 394 84 76",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-mehmet-kaan-cengiz",
      name: "Mehmet Kaan Cengiz",
      role: "Topluluk Başkanı",
      school: "İzmir Atatürk Lisesi",
      phone: "0544 925 32 32",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-cem-bal",
      name: "Cem Bal",
      role: "Topluluk Başkanı",
      school: "İzmir Kız Lisesi",
      phone: "0542 891 15 66",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-gorkem",
      name: "Görkem",
      role: "Topluluk Başkanı",
      school: "Karşıyaka Anadolu Lisesi",
      phone: "0536 747 02 34",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-akif-ersoy-armagan",
      name: "Akif Ersoy Armağan",
      role: "Topluluk Başkanı",
      school: "Mazhar Zorlu MTAL",
      phone: "0545 974 96 99",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-ata-barmanbek",
      name: "Ata Barmanbek",
      role: "Topluluk Başkanı",
      school: "NUMTAL",
      phone: "0530 128 18 20",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-buse",
      name: "Buse",
      role: "Topluluk Başkanı",
      school: "ŞAKALOTT",
      phone: "0507 509 10 56",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-ela",
      name: "Ela",
      role: "Topluluk Başkanı",
      school: "UHÇAL",
      phone: "0555 163 29 91",
      email: "Business@logddev.com",
    },
    {
      id: "baskan-kagan-akyurek",
      name: "Kağan Akyürek",
      role: "Topluluk Başkanı",
      school: "Yunus Emre Anadolu Lisesi",
      phone: "0554 195 29 58",
      email: "Business@logddev.com",
    },
  ],
  news: [],
  events: [],
  games: DEFAULT_GAMES.map((g) => ({
    ...g,
    status: "published" as const,
  })),
  partners: [
    {
      id: "epic-games",
      name: "Epic Games",
      category: "Oyun Motoru & Teknoloji",
      tier: "Platinum",
      description: "Unreal Engine eğitim lisansları ve küresel mentorluk desteği.",
      websiteUrl: "https://www.unrealengine.com",
    },
    {
      id: "unity",
      name: "Unity Technologies",
      category: "Oyun Motoru",
      tier: "Platinum",
      description: "Öğrenci sertifikasyonları ve Game Jam ödül sponsorluğu.",
      websiteUrl: "https://unity.com",
    },
    {
      id: "tubitak",
      name: "TÜBİTAK",
      category: "Ar-Ge ve Bilimsel Destek",
      tier: "Gold",
      description: "Gençlik bilim ve teknoloji projeleri hibe desteği.",
      websiteUrl: "https://www.tubitak.gov.tr",
    },
    {
      id: "intel",
      name: "Intel",
      category: "Donanım & Donanım Sponsoru",
      tier: "Gold",
      description: "Game Jam atölyeleri donanım altyapısı.",
      websiteUrl: "https://www.intel.com",
    },
    {
      id: "google-developers",
      name: "Google for Developers",
      category: "Yazılım ve Bulut",
      tier: "Silver",
      description: "Google Cloud altyapısı ve öğrenci geliştirici topluluk desteği.",
      websiteUrl: "https://developers.google.com",
    },
  ],
  media: [
    {
      id: "m1",
      title: "LOGD Resmi Logo",
      url: "/__l5e/assets-v1/d1c732d8-9587-4251-91e2-848b03f215e9/logd-logo.webp",
      type: "image",
      size: "42 KB",
      date: "05 Eyl 2026",
    },
    {
      id: "m2",
      title: "Hero Background (Masaüstü)",
      url: "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/hero-bg.webp",
      type: "image",
      size: "168 KB",
      date: "05 Eyl 2026",
    },
    {
      id: "m3",
      title: "Hero Background (Mobil)",
      url: "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/hero-bg-mobile.webp",
      type: "image",
      size: "44 KB",
      date: "05 Eyl 2026",
    },
  ],
  lastSavedAt: new Date().toISOString(),
};

/**
 * Reads data from localStorage or fallback to defaults
 */
export function getCMSData(): CMSData {
  if (typeof window === "undefined") {
    return DEFAULT_CMS_DATA;
  }
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (!raw) return DEFAULT_CMS_DATA;
    const parsed = JSON.parse(raw);
    const hasOldMocks = parsed?.games?.some((g: CMSGameProject) =>
      ["beyond-the-hills", "cyber-heist", "skybound", "project-nova", "echoes-of-mirava"].includes(
        g.id,
      ),
    );
    const hasGGJ = parsed?.games?.some((g: CMSGameProject) => g.id === "roots-of-tomorrow");
    let games: CMSGameProject[] = parsed?.games || [];
    if (hasOldMocks || !games.length || !hasGGJ) {
      const existingMap = new Map<string, CMSGameProject>(games.map((g) => [g.id, g]));
      games = DEFAULT_CMS_DATA.games.map((dg) => existingMap.get(dg.id) || dg);
    }
    // Filter out removed games
    games = games.filter((g) => !["feed-em", "deep-divers", "hizli-mucadele"].includes(g.id));

    // Filter out representative/mock news and events
    const mockNewsIds = new Set([
      "anatolia-game-jam-2025-kayitlari-basladi",
      "pixel-art-ve-animasyon-atolyesi-tamamlandi",
      "oyun-sektorunde-kariyer-ve-mentorluk-agi-genisliyor",
      "anatolia-game-jam-2025",
      "pixel-art-atolyesi-harika-calismalar",
      "unreal-engine-5-4-ozellikleri",
      "yeni-mentorluk-programi-basliyor",
      "logd-topluluk-bulusmasi-istanbul",
      "global-game-jam-2025-kayitlari",
      "blender-karakter-modelleme-rehberi",
    ]);
    const news: CMSNewsArticle[] = (parsed?.news || []).filter(
      (n: CMSNewsArticle) => !mockNewsIds.has(n.id),
    );

    const mockEventIds = new Set([
      "snowy-jam-2025",
      "ggj-next-2025",
      "oyun-tasariminda-hikaye-anlatimi",
      "pixel-art-atolyesi",
      "indie-games-showcase",
      "unity-2d-game-jam",
      "blender-ile-3d-modelleme-atolyesi",
      "mentorluk-ve-gelistirici-bulusmasi",
      "unreal-engine-5e-giris",
      "global-game-jam-2025",
      "izmir-indie-games-showcase",
      "godot-4-game-jam",
      "oyun-muzigi-ve-ses-tasarimi",
    ]);
    const events: CMSUpcomingEvent[] = (parsed?.events || []).filter(
      (e: CMSUpcomingEvent) => !mockEventIds.has(e.id),
    );

    const hasOldTimeline = parsed?.about?.timeline?.some(
      (t: { year?: string }) => t.year === "2018" || t.year === "2024+",
    );
    const hasOldMission =
      parsed?.about?.missionTitle === "Misyonumuz" &&
      parsed?.about?.missionDesc?.includes("dört bir yanındaki");
    const about =
      hasOldTimeline || hasOldMission || !parsed?.about
        ? DEFAULT_CMS_DATA.about
        : { ...DEFAULT_CMS_DATA.about, ...(parsed.about || {}) };

    const rawSettings = parsed?.settings || {};
    const settings = { ...DEFAULT_CMS_DATA.settings, ...rawSettings };
    if (settings.discordUrl === "https://discord.gg/logd" || !settings.discordUrl) {
      settings.discordUrl = DEFAULT_CMS_DATA.settings.discordUrl;
    }
    if (settings.instagramUrl?.includes("logdresmi") || !settings.instagramUrl) {
      settings.instagramUrl = DEFAULT_CMS_DATA.settings.instagramUrl;
    }
    if (!settings.linkedinUrl) {
      settings.linkedinUrl = DEFAULT_CMS_DATA.settings.linkedinUrl;
    }

    return {
      ...DEFAULT_CMS_DATA,
      ...parsed,
      games,
      news,
      events,
      settings,
      home: { ...DEFAULT_CMS_DATA.home, ...(parsed.home || {}) },
      about,
    };
  } catch (err) {
    console.error("Failed to parse CMS data from localStorage:", err);
    return DEFAULT_CMS_DATA;
  }
}

/**
 * Saves CMS data to localStorage and emits change event
 */
export function saveCMSData(updated: Partial<CMSData>): CMSData {
  const current = getCMSData();
  const nextData: CMSData = {
    ...current,
    ...updated,
    lastSavedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(nextData));
      window.dispatchEvent(new CustomEvent("logd-cms-change", { detail: nextData }));
    } catch (e) {
      console.error("Failed to persist CMS data:", e);
    }
  }

  return nextData;
}

/**
 * Resets CMS data to original defaults
 */
export function resetCMSToDefaults(): CMSData {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CMS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("logd-cms-change", { detail: DEFAULT_CMS_DATA }));
  }
  return DEFAULT_CMS_DATA;
}

/**
 * Exports CMS data as formatted JSON string
 */
export function exportCMSJson(): string {
  const data = getCMSData();
  return JSON.stringify(data, null, 2);
}

/**
 * Imports CMS data from JSON string
 */
export function importCMSJson(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== "object") return false;
    saveCMSData(parsed);
    return true;
  } catch (e) {
    console.error("Invalid CMS JSON:", e);
    return false;
  }
}

/**
 * React hook to reactively consume and update CMS state across components
 */
export function useCMS() {
  const [data, setData] = useState<CMSData>(getCMSData);

  useEffect(() => {
    // Initial sync
    setData(getCMSData());

    const handleCmsChange = (e: Event) => {
      const customEvent = e as CustomEvent<CMSData>;
      if (customEvent.detail) {
        setData(customEvent.detail);
      } else {
        setData(getCMSData());
      }
    };

    window.addEventListener("logd-cms-change", handleCmsChange);
    window.addEventListener("storage", (e) => {
      if (e.key === CMS_STORAGE_KEY) {
        setData(getCMSData());
      }
    });

    return () => {
      window.removeEventListener("logd-cms-change", handleCmsChange);
    };
  }, []);

  const update = (updater: (prev: CMSData) => Partial<CMSData>) => {
    const nextPart = updater(data);
    const updated = saveCMSData(nextPart);
    setData(updated);
  };

  return {
    data,
    update,
    reset: () => {
      const reset = resetCMSToDefaults();
      setData(reset);
    },
  };
}
