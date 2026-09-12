import { ExternalLink, Plus, LogOut, CheckCircle, RefreshCw, Home, Layers } from "lucide-react";

interface AdminHeaderProps {
  onLogout: () => void;
  onNavigateTab: (tab: string) => void;
  lastSavedAt: string;
}

export function AdminHeader({ onLogout, onNavigateTab, lastSavedAt }: AdminHeaderProps) {
  const formattedTime = new Date(lastSavedAt).toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="sticky top-0 z-50 flex h-10 w-full items-center justify-between border-b border-[#2c3338] bg-[#1d2327] px-4 text-xs text-[#c3c4c7]">
      {/* Left side: Site link & Quick actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#2271b1] text-[10px] font-black text-white">
            W
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-[#f0f0f1] transition-colors hover:text-[#72aee6]"
            title="Siteyi yeni sekmede görüntüle"
          >
            <Home className="h-3.5 w-3.5 text-[#72aee6]" />
            <span className="hidden sm:inline">Liseler Oyun Geliştiricileri Derneği</span>
            <span className="sm:hidden">LOGD</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <span className="h-3.5 w-px bg-[#3c434a]" />
          <button
            type="button"
            onClick={() => onNavigateTab("news")}
            className="flex items-center gap-1 rounded px-2 py-1 text-[#c3c4c7] transition-colors hover:bg-[#2c3338] hover:text-[#72aee6]"
          >
            <Plus className="h-3.5 w-3.5 text-[#2271b1]" />
            <span>Yeni Yazı</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("events")}
            className="flex items-center gap-1 rounded px-2 py-1 text-[#c3c4c7] transition-colors hover:bg-[#2c3338] hover:text-[#72aee6]"
          >
            <Plus className="h-3.5 w-3.5 text-[#2271b1]" />
            <span>Yeni Etkinlik</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("games")}
            className="flex items-center gap-1 rounded px-2 py-1 text-[#c3c4c7] transition-colors hover:bg-[#2c3338] hover:text-[#72aee6]"
          >
            <Plus className="h-3.5 w-3.5 text-[#2271b1]" />
            <span>Yeni Proje</span>
          </button>
        </div>
      </div>

      {/* Right side: Sync Status, Admin Info & Logout */}
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-1.5 text-[11px] text-[#a7aaad] lg:flex">
          <CheckCircle className="h-3.5 w-3.5 text-[#46b450]" />
          <span>Canlı Senkronize</span>
          <span className="text-[#646970]">({formattedTime})</span>
        </div>

        <div className="flex items-center gap-2 border-l border-[#3c434a] pl-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3c434a] text-[11px] font-bold text-[#f0f0f1]">
            Y
          </div>
          <span className="hidden font-medium text-[#f0f0f1] sm:inline">Yönetici</span>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-1 rounded bg-[#d63638]/20 px-2 py-1 text-[11px] font-medium text-[#ff8085] transition hover:bg-[#d63638] hover:text-white"
          title="Yönetim oturumunu sonlandır"
        >
          <LogOut className="h-3 w-3" />
          <span className="hidden sm:inline">Çıkış Yap</span>
        </button>
      </div>
    </header>
  );
}
