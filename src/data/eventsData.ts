import eventsHeroIsometric from "@/assets/images/events_hero_3d_calendar_1788550809772.webp";
import eventAnatoliaJam from "@/assets/images/event_anatolia_jam_1788549107894.webp";
import eventStorytelling from "@/assets/images/event_storytelling_1788550825708.webp";
import eventPixelArt from "@/assets/images/event_pixel_art_1788550843151.webp";
import eventNeonTrophy from "@/assets/images/event_neon_trophy_1788550863178.webp";

import eventUnityJam from "@/assets/images/event_unity_jam_1788549144680.webp";
import eventBlenderWorkshop from "@/assets/images/event_blender_thumb_1788550878871.webp";
import eventMentoring from "@/assets/images/event_mentoring_thumb_1788550908613.webp";
import eventUnrealEngine from "@/assets/images/event_unreal_thumb_1788550893530.webp";
import eventGlobalJam from "@/assets/images/event_global_jam_1788549176358.webp";
import eventIzmirShowcase from "@/assets/images/event_izmir_showcase_1788549161031.webp";

export { eventsHeroIsometric };

export interface UpcomingEvent {
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
  isTime?: boolean;
}

export interface PastEvent {
  id: string;
  title: string;
  image: string;
  category: "Game Jam" | "Atölye" | "Seminer" | "Etkinlik";
  mode: "Online" | "Offline";
  date: string;
  attendees: string;
  description: string;
}

export const HERO_STATS = [
  { value: "300+", label: "Etkinlik", icon: "calendar" },
  { value: "18K+", label: "Katılımcı", icon: "users" },
  { value: "25", label: "Şehir", icon: "map-pin" },
  { value: "85", label: "Ortaklık", icon: "trophy" },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "snowy-jam-2025",
    day: "10-14",
    month: "OCA",
    title: "Snowy Jam 2025",
    image: eventAnatoliaJam,
    category: "Game Jam",
    mode: "Offline",
    description:
      "Numtal Game Dev önderliğinde topluluğumuzdaki 10 okulda eş zamanlı olarak düzenlenen Gamejam etkinliğimiz.",
    dateRange: "10 - 14 Ocak 2025",
    locationOrTime: "10 Okul Eşzamanlı",
    isTime: false,
  },
  {
    id: "ggj-next-2025",
    day: "15",
    month: "ŞUB",
    title: "GGJ Next 2025 (Türkiye)",
    image: eventGlobalJam,
    category: "Game Jam",
    mode: "Offline",
    description:
      "Genç geliştiriciler için dünyanın en büyük game jam organizasyonunun Türkiye ayağı. Türkiye'deki ilk fiziksel GGJ Next etkinliği!",
    dateRange: "15 Şubat 2025",
    locationOrTime: "İzmir & Hibrit",
    isTime: false,
  },
  {
    id: "oyun-tasariminda-hikaye-anlatimi",
    day: "05",
    month: "HAZ",
    title: "Oyun Tasarımında Hikaye Anlatımı",
    image: eventStorytelling,
    category: "Seminer",
    mode: "Online",
    description: "İyi bir oyunun ardındaki güçlü hikaye yapıları ve anlatı teknikleri.",
    dateRange: "5 Haziran 2025",
    locationOrTime: "20:00",
    isTime: true,
  },
  {
    id: "pixel-art-atolyesi",
    day: "14",
    month: "HAZ",
    title: "Pixel Art Atölyesi",
    image: eventPixelArt,
    category: "Atölye",
    mode: "Offline",
    description: "Temelden ileri seviyeye pixel art tekniklerini öğreniyoruz.",
    dateRange: "14 Haziran 2025",
    locationOrTime: "İzmir",
    isTime: false,
  },
  {
    id: "indie-games-showcase",
    day: "28",
    month: "HAZ",
    title: "Indie Games Showcase",
    image: eventNeonTrophy,
    category: "Etkinlik",
    mode: "Offline",
    description:
      "Bağımsız geliştiricilerin oyunlarını sergilediği ve test oyuncularla buluştuğu özel bir gün.",
    dateRange: "28 Haziran 2025",
    locationOrTime: "Ankara",
    isTime: false,
  },
];

export const PAST_EVENTS: PastEvent[] = [
  {
    id: "unity-2d-game-jam",
    title: "Unity 2D Game Jam",
    image: eventUnityJam,
    category: "Game Jam",
    mode: "Online",
    date: "14 - 15 Haziran 2025",
    attendees: "1250 Katılımcı",
    description:
      "Türkiye genelinde yüzlerce lise öğrencisinin katıldığı 2D oyun geliştirme maratonu. 48 saatte 140'tan fazla proje üretildi.",
  },
  {
    id: "blender-ile-3d-modelleme-atolyesi",
    title: "Blender ile 3D Modelleme Atölyesi",
    image: eventBlenderWorkshop,
    category: "Atölye",
    mode: "Offline",
    date: "31 Mayıs 2025",
    attendees: "85 Katılımcı",
    description:
      "Oyunlar için düşük poligonlu (low-poly) karakter ve çevre tasarımı pratikleri üzerine yüz yüze atölye.",
  },
  {
    id: "mentorluk-ve-gelistirici-bulusmasi",
    title: "Mentorluk & Geliştirici Buluşması",
    image: eventMentoring,
    category: "Etkinlik",
    mode: "Offline",
    date: "17 Mayıs 2025",
    attendees: "120 Katılımcı",
    description:
      "Oyun sektöründeki deneyimli stüdyo kurucuları ve kıdemli yazılımcılarla lise ekiplerini bir araya getiren mentorluk oturumu.",
  },
  {
    id: "unreal-engine-5e-giris",
    title: "Unreal Engine 5'e Giriş",
    image: eventUnrealEngine,
    category: "Seminer",
    mode: "Online",
    date: "3 Mayıs 2025",
    attendees: "760 Katılımcı",
    description:
      "Nanite, Lumen ve Blueprints temellerinin sıfırdan ele alındığı kapsamlı canlı yayın semineri.",
  },
  {
    id: "global-game-jam-2025",
    title: "Global Game Jam 2025",
    image: eventGlobalJam,
    category: "Game Jam",
    mode: "Offline",
    date: "31 Ocak - 2 Şubat 2025",
    attendees: "2000 Katılımcı",
    description:
      "Dünyanın en büyük oyun geliştirme etkinliğinin yerel LOGD merkezlerindeki eşzamanlı hibrit buluşması.",
  },
  {
    id: "izmir-indie-games-showcase",
    title: "İzmir Indie Games Showcase",
    image: eventIzmirShowcase,
    category: "Etkinlik",
    mode: "Offline",
    date: "5 Temmuz 2024",
    attendees: "540 Katılımcı",
    description:
      "Genç ekiplerin hazırladığı bağımsız demoların canlı olarak oynandığı ve geri bildirim toplandığı showcase buluşması.",
  },
];

export const EXTRA_PAST_EVENTS: PastEvent[] = [
  {
    id: "godot-4-game-jam",
    title: "Godot 4 Hızlı Başlangıç Jam'i",
    image: eventUnityJam,
    category: "Game Jam",
    mode: "Online",
    date: "12 - 14 Nisan 2024",
    attendees: "980 Katılımcı",
    description:
      "Açık kaynaklı Godot motoruyla hafif ve yaratıcı mekaniklerin denendiği çevrimiçi oyun maratonu.",
  },
  {
    id: "oyun-muzigi-ve-ses-tasarimi",
    title: "Oyun Müziği & Ses Tasarımı Atölyesi",
    image: eventMentoring,
    category: "Atölye",
    mode: "Online",
    date: "22 Mart 2024",
    attendees: "340 Katılımcı",
    description:
      "FMOD ve Audacity kullanarak atmosferik oyun sesleri ve döngüsel müzik besteleme rehberi.",
  },
];
