import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  useCMS,
  type NewsPost,
  type CMSUpcomingEvent,
  type CMSGameProject,
  type PartnerItem,
  type TeamMember,
  type MediaAsset,
  type SiteSettings,
  type HomePageData,
  type AboutPageData,
} from "@/lib/cms-store";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar, type AdminTab } from "@/components/admin/AdminSidebar";
import { DashboardTab } from "@/components/admin/tabs/DashboardTab";
import { NewsTab } from "@/components/admin/tabs/NewsTab";
import { EventsTab } from "@/components/admin/tabs/EventsTab";
import { GamesTab } from "@/components/admin/tabs/GamesTab";
import { PagesTab } from "@/components/admin/tabs/PagesTab";
import { TeamTab } from "@/components/admin/tabs/TeamTab";
import { PartnersTab } from "@/components/admin/tabs/PartnersTab";
import { MediaTab } from "@/components/admin/tabs/MediaTab";
import { SettingsTab } from "@/components/admin/tabs/SettingsTab";
import { BackupTab } from "@/components/admin/tabs/BackupTab";

export const Route = createFileRoute("/yonetim-logd-2025")({
  head: () => ({
    meta: [
      { title: "LOGD Yönetim Masası | WordPress Kapsamlı Yönetim Paneli" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPanelPage,
});

function AdminPanelPage() {
  const { data: cms, update, reset } = useCMS();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check authentication status on client
  useEffect(() => {
    const isSessionAuth = sessionStorage.getItem("logd_admin_auth") === "true";
    const isLocalAuth = localStorage.getItem("logd_admin_auth") === "true";
    setIsAuthenticated(isSessionAuth || isLocalAuth);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("logd_admin_auth");
    localStorage.removeItem("logd_admin_auth");
    setIsAuthenticated(false);
  };

  // Quick Draft from Dashboard
  const handleSaveQuickDraft = (title: string, content: string) => {
    const newPost: NewsPost = {
      id: "taslak-" + Date.now(),
      title,
      excerpt: content.slice(0, 100) + (content.length > 100 ? "..." : ""),
      content: [content],
      category: "Duyurular",
      date: new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      readTime: "2 dk",
      image:
        "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/news_gamejam_stage_1788553284412.webp",
      isFeatured: false,
      status: "draft",
    };
    update((prev) => ({
      news: [newPost, ...prev.news],
    }));
    showToast("Hızlı taslak başarıyla kaydedildi.");
  };

  // News CRUD
  const handleSavePost = (post: NewsPost) => {
    update((prev) => {
      const exists = prev.news.some((p) => p.id === post.id);
      const news = exists
        ? prev.news.map((p) => (p.id === post.id ? post : p))
        : [post, ...prev.news];
      return { news };
    });
    showToast(`"${post.title}" yazısı kaydedildi.`);
  };

  const handleDeletePost = (id: string) => {
    update((prev) => ({
      news: prev.news.filter((p) => p.id !== id),
    }));
    showToast("Yazı silindi.");
  };

  // Events CRUD
  const handleSaveEvent = (event: CMSUpcomingEvent) => {
    update((prev) => {
      const exists = prev.events.some((e) => e.id === event.id);
      const events = exists
        ? prev.events.map((e) => (e.id === event.id ? event : e))
        : [event, ...prev.events];
      return { events };
    });
    showToast(`"${event.title}" etkinliği kaydedildi.`);
  };

  const handleDeleteEvent = (id: string) => {
    update((prev) => ({
      events: prev.events.filter((e) => e.id !== id),
    }));
    showToast("Etkinlik silindi.");
  };

  // Games CRUD
  const handleSaveGame = (game: CMSGameProject) => {
    update((prev) => {
      const exists = prev.games.some((g) => g.id === game.id);
      const games = exists
        ? prev.games.map((g) => (g.id === game.id ? game : g))
        : [game, ...prev.games];
      return { games };
    });
    showToast(`"${game.title}" projesi kaydedildi.`);
  };

  const handleDeleteGame = (id: string) => {
    update((prev) => ({
      games: prev.games.filter((g) => g.id !== id),
    }));
    showToast("Proje silindi.");
  };

  // Pages
  const handleSaveHome = (homeData: HomePageData) => {
    update(() => ({ home: homeData }));
    showToast("Ana sayfa bölümleri güncellendi.");
  };

  const handleSaveAbout = (aboutData: AboutPageData) => {
    update(() => ({ about: aboutData }));
    showToast("Hakkımızda sayfası güncellendi.");
  };

  // Team
  const handleSaveMember = (member: TeamMember) => {
    update((prev) => {
      const exists = prev.team.some((m) => m.id === member.id);
      const team = exists
        ? prev.team.map((m) => (m.id === member.id ? member : m))
        : [...prev.team, member];
      return { team };
    });
    showToast(`"${member.name}" ekip üyesi güncellendi.`);
  };

  const handleDeleteMember = (id: string) => {
    update((prev) => ({
      team: prev.team.filter((m) => m.id !== id),
    }));
    showToast("Ekip üyesi silindi.");
  };

  // Partners
  const handleSavePartner = (partner: PartnerItem) => {
    update((prev) => {
      const exists = prev.partners.some((p) => p.id === partner.id);
      const partners = exists
        ? prev.partners.map((p) => (p.id === partner.id ? partner : p))
        : [...prev.partners, partner];
      return { partners };
    });
    showToast(`"${partner.name}" partneri kaydedildi.`);
  };

  const handleDeletePartner = (id: string) => {
    update((prev) => ({
      partners: prev.partners.filter((p) => p.id !== id),
    }));
    showToast("Partner silindi.");
  };

  // Media
  const handleAddMedia = (asset: MediaAsset) => {
    update((prev) => ({
      media: [asset, ...prev.media],
    }));
    showToast("Yeni ortam varlığı kütüphaneye eklendi.");
  };

  const handleDeleteMedia = (id: string) => {
    update((prev) => ({
      media: prev.media.filter((m) => m.id !== id),
    }));
    showToast("Ortam varlığı silindi.");
  };

  // Settings
  const handleSaveSettings = (settings: SiteSettings) => {
    update(() => ({ settings }));
    showToast("Site ve güvenlik ayarları güncellendi.");
  };

  // Wait for client auth determination
  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f0f0f1] text-xs text-[#50575e]">
        Yönetim oturumu kontrol ediliyor...
      </div>
    );
  }

  // If unauthenticated, show WordPress login screen
  if (!isAuthenticated) {
    return (
      <AdminLogin
        onSuccess={() => setIsAuthenticated(true)}
        correctPasscode={cms.settings.adminPasscode || "logd2025"}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f0f0f1] font-sans antialiased text-[#3c434a]">
      {/* WordPress Top Admin Bar */}
      <AdminHeader
        onLogout={handleLogout}
        onNavigateTab={(tab) => setActiveTab(tab as AdminTab)}
        lastSavedAt={cms.lastSavedAt}
      />

      {/* Main Workspace */}
      <div className="flex flex-1">
        {/* WordPress Left Navigation Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          counts={{
            news: cms.news.length,
            events: cms.events.length,
            games: cms.games.length,
            team: cms.team.length,
            partners: cms.partners.length,
          }}
        />

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-8">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="mb-6 flex items-center justify-between rounded border-l-4 border-[#2271b1] bg-white p-3.5 text-xs text-[#1d2327] shadow-sm animate-fade-in">
              <span>{toastMessage}</span>
              <button
                type="button"
                onClick={() => setToastMessage(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                ✕
              </button>
            </div>
          )}

          {/* Active Tab View */}
          {activeTab === "dashboard" && (
            <DashboardTab
              cms={cms}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onSaveQuickDraft={handleSaveQuickDraft}
            />
          )}

          {activeTab === "news" && (
            <NewsTab news={cms.news} onSavePost={handleSavePost} onDeletePost={handleDeletePost} />
          )}

          {activeTab === "events" && (
            <EventsTab
              events={cms.events}
              onSaveEvent={handleSaveEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          )}

          {activeTab === "games" && (
            <GamesTab
              games={cms.games}
              onSaveGame={handleSaveGame}
              onDeleteGame={handleDeleteGame}
            />
          )}

          {activeTab === "pages" && (
            <PagesTab
              home={cms.home}
              about={cms.about}
              onSaveHome={handleSaveHome}
              onSaveAbout={handleSaveAbout}
            />
          )}

          {activeTab === "team" && (
            <TeamTab
              team={cms.team}
              onSaveMember={handleSaveMember}
              onDeleteMember={handleDeleteMember}
            />
          )}

          {activeTab === "partners" && (
            <PartnersTab
              partners={cms.partners}
              onSavePartner={handleSavePartner}
              onDeletePartner={handleDeletePartner}
            />
          )}

          {activeTab === "media" && (
            <MediaTab
              media={cms.media}
              onAddMedia={handleAddMedia}
              onDeleteMedia={handleDeleteMedia}
            />
          )}

          {activeTab === "settings" && (
            <SettingsTab settings={cms.settings} onSaveSettings={handleSaveSettings} />
          )}

          {activeTab === "backup" && (
            <BackupTab cms={cms} onRefreshData={() => update((prev) => ({ ...prev }))} />
          )}
        </main>
      </div>
    </div>
  );
}
