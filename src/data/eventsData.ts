import eventsHeroIsometric from "@/assets/images/events_hero_3d_calendar_1788550809772.webp";

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

export const UPCOMING_EVENTS: UpcomingEvent[] = [];

export const PAST_EVENTS: PastEvent[] = [];

export const EXTRA_PAST_EVENTS: PastEvent[] = [];
