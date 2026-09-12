import { useState } from "react";
import {
  FileText,
  Calendar,
  Gamepad2,
  Users,
  Handshake,
  CheckCircle,
  Zap,
  ArrowUpRight,
  Plus,
  Clock,
  Sparkles,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { type CMSData, type NewsPost } from "@/lib/cms-store";
import { type AdminTab } from "../AdminSidebar";

interface DashboardTabProps {
  cms: CMSData;
  onNavigateTab: (tab: AdminTab) => void;
  onSaveQuickDraft: (title: string, content: string) => void;
}

export function DashboardTab({ cms, onNavigateTab, onSaveQuickDraft }: DashboardTabProps) {
  const [draftTitle, setDraftTitle] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [draftSuccess, setDraftSuccess] = useState(false);

  const handleDraftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftTitle.trim()) return;
    onSaveQuickDraft(draftTitle, draftContent);
    setDraftTitle("");
    setDraftContent("");
    setDraftSuccess(true);
    setTimeout(() => setDraftSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col justify-between gap-4 rounded border border-[#c3c4c7] bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">LOGD Yönetim Masasına Hoş Geldiniz</h1>
          <p className="mt-1 text-xs text-[#646970]">
            Liseler Oyun Geliştiricileri Derneği resmi web sitesinin tüm içeriğini, yazılarını,
            etkinliklerini ve ayarlarını bu panelden anlık olarak düzenleyebilirsiniz.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded border border-[#2271b1] bg-white px-3 py-1.5 text-xs font-semibold text-[#2271b1] hover:bg-[#f0f6fc]"
          >
            Siteyi Canlı Gör <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Grid: At a Glance + Quick Draft */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* At a Glance */}
        <div className="rounded border border-[#c3c4c7] bg-white shadow-sm">
          <div className="border-b border-[#f0f0f1] px-5 py-3.5">
            <h2 className="text-sm font-bold text-[#1d2327]">Bir Bakışta</h2>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => onNavigateTab("news")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <FileText className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-lg font-bold text-[#1d2327]">{cms.news.length}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Haber & Yazı</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("events")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <Calendar className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-lg font-bold text-[#1d2327]">{cms.events.length}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Etkinlik</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("games")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <Gamepad2 className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-lg font-bold text-[#1d2327]">{cms.games.length}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Proje & Oyun</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("team")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <Users className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-lg font-bold text-[#1d2327]">{cms.team.length}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Ekip Üyesi</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("partners")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <Handshake className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-lg font-bold text-[#1d2327]">{cms.partners.length}</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Partner</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("settings")}
                className="flex flex-col rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3 text-left transition hover:border-[#2271b1] hover:bg-[#f0f6fc]"
              >
                <div className="flex items-center justify-between">
                  <Globe className="h-4 w-4 text-[#2271b1]" />
                  <span className="text-xs font-bold text-[#46b450]">Aktif</span>
                </div>
                <span className="mt-1 text-xs font-medium text-[#50575e]">Genel Ayarlar</span>
              </button>
            </div>

            <div className="mt-5 border-t border-[#f0f0f1] pt-4 text-xs text-[#646970]">
              <p>LOGD web uygulaması TanStack Start ve WordPress CMS altyapısıyla çalışıyor.</p>
            </div>
          </div>
        </div>

        {/* Quick Draft */}
        <div className="rounded border border-[#c3c4c7] bg-white shadow-sm">
          <div className="border-b border-[#f0f0f1] px-5 py-3.5">
            <h2 className="text-sm font-bold text-[#1d2327]">Hızlı Taslak</h2>
          </div>
          <form onSubmit={handleDraftSubmit} className="p-5">
            {draftSuccess && (
              <div className="mb-3 rounded border border-[#46b450] bg-[#ecf7ed] p-2 text-xs text-[#1e4620]">
                ✓ Taslak başarıyla Yazılar bölümüne kaydedildi!
              </div>
            )}
            <div>
              <label
                htmlFor="quick-draft-title"
                className="block text-xs font-semibold text-[#1d2327]"
              >
                Başlık
              </label>
              <input
                id="quick-draft-title"
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                placeholder="Örn: Yeni Game Jam Başvuruları..."
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-1.5 text-xs text-[#2c3338] outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1]"
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="quick-draft-content"
                className="block text-xs font-semibold text-[#1d2327]"
              >
                Aklınızda ne var?
              </label>
              <textarea
                id="quick-draft-content"
                rows={3}
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
                placeholder="Taslak içeriğinizi yazınız..."
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-1.5 text-xs text-[#2c3338] outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1]"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                disabled={!draftTitle.trim()}
                className="rounded bg-[#2271b1] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#135e96] disabled:opacity-50"
              >
                Taslağı Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* System Health & Performance */}
      <div className="rounded border border-[#c3c4c7] bg-white p-5 shadow-sm">
        <h2 className="text-sm font-bold text-[#1d2327]">Site Sağlığı ve Performans Durumu</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="flex items-start gap-2.5 rounded border border-[#f0f0f1] p-3">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#46b450]" />
            <div>
              <p className="text-xs font-semibold text-[#1d2327]">Lighthouse Mobil & PC 95+</p>
              <p className="text-[11px] text-[#646970]">
                Yazı tipleri yerel, responsive hero preloadları devrede, render blokajı yok.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded border border-[#f0f0f1] p-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#46b450]" />
            <div>
              <p className="text-xs font-semibold text-[#1d2327]">Gizli URL Güvenliği</p>
              <p className="text-[11px] text-[#646970]">
                Yönetim paneli genel arama motorlarından ve ziyaretçilerden gizlidir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded border border-[#f0f0f1] p-3">
            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-[#2271b1]" />
            <div>
              <p className="text-xs font-semibold text-[#1d2327]">Anlık Senkronizasyon</p>
              <p className="text-[11px] text-[#646970]">
                Bu panelde yapılan değişiklikler tüm sitede anında canlıya yansır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
