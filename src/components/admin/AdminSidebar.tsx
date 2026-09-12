import {
  LayoutDashboard,
  FileText,
  Calendar,
  Gamepad2,
  FileStack,
  Users,
  Handshake,
  Image,
  Settings,
  Database,
  ChevronRight,
} from "lucide-react";

export type AdminTab =
  | "dashboard"
  | "news"
  | "events"
  | "games"
  | "pages"
  | "team"
  | "partners"
  | "media"
  | "settings"
  | "backup";

interface AdminSidebarProps {
  activeTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
  counts: {
    news: number;
    events: number;
    games: number;
    team: number;
    partners: number;
  };
}

export function AdminSidebar({ activeTab, onSelectTab, counts }: AdminSidebarProps) {
  const MENU_ITEMS = [
    {
      id: "dashboard" as AdminTab,
      label: "Başlangıç",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "news" as AdminTab,
      label: "Yazılar & Haberler",
      icon: FileText,
      badge: counts.news,
    },
    {
      id: "events" as AdminTab,
      label: "Etkinlikler",
      icon: Calendar,
      badge: counts.events,
    },
    {
      id: "games" as AdminTab,
      label: "Projeler & Oyunlar",
      icon: Gamepad2,
      badge: counts.games,
    },
    {
      id: "pages" as AdminTab,
      label: "Sayfa Yönetimi",
      icon: FileStack,
      badge: null,
    },
    {
      id: "team" as AdminTab,
      label: "Ekip & Mentorlar",
      icon: Users,
      badge: counts.team,
    },
    {
      id: "partners" as AdminTab,
      label: "Partnerler & Sponsorlar",
      icon: Handshake,
      badge: counts.partners,
    },
    {
      id: "media" as AdminTab,
      label: "Ortam / Medya",
      icon: Image,
      badge: null,
    },
    {
      id: "settings" as AdminTab,
      label: "Genel Ayarlar",
      icon: Settings,
      badge: null,
    },
    {
      id: "backup" as AdminTab,
      label: "Yedek & Veri İçe/Dışa",
      icon: Database,
      badge: null,
    },
  ];

  return (
    <aside className="w-56 shrink-0 border-r border-[#2c3338] bg-[#1d2327] text-[#c3c4c7]">
      <div className="py-2">
        <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#646970]">
          Yönetim Masası
        </div>
        <nav className="mt-1 space-y-0.5">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`group flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-medium transition-colors ${
                  isActive
                    ? "border-l-4 border-[#72aee6] bg-[#2271b1] text-white"
                    : "text-[#c3c4c7] hover:bg-[#2c3338] hover:text-[#72aee6]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "text-white" : "text-[#8c8f94] group-hover:text-[#72aee6]"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge !== null && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#2c3338] text-[#a7aaad] group-hover:bg-[#3c434a]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Secret URL badge reminder */}
      <div className="mx-3 mt-8 rounded border border-[#2c3338] bg-[#22282d] p-3 text-[11px] text-[#8c8f94]">
        <p className="font-semibold text-[#c3c4c7]">Gizli Erişim Adresi:</p>
        <p className="mt-1 truncate font-mono text-[10px] text-[#72aee6]">/yonetim-logd-2025</p>
        <p className="mt-2 text-[10px] leading-tight text-[#646970]">
          Yetkisiz ziyaretçiler şifresiz giriş yapamaz.
        </p>
      </div>
    </aside>
  );
}
