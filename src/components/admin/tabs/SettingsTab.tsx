import { useState } from "react";
import {
  Save,
  Check,
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  MapPin,
  Share2,
  KeyRound,
} from "lucide-react";
import { type SiteSettings } from "@/lib/cms-store";

interface SettingsTabProps {
  settings: SiteSettings;
  onSaveSettings: (settings: SiteSettings) => void;
}

export function SettingsTab({ settings, onSaveSettings }: SettingsTabProps) {
  const [form, setForm] = useState<SiteSettings>(settings);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings(form);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Genel Site & Güvenlik Ayarları</h1>
          <p className="text-xs text-[#646970]">
            Site kimliği, SEO anahtar kelimeleri, iletişim bilgileri, sosyal medya ve admin giriş
            şifresini yapılandırın.
          </p>
        </div>
        {savedNotice && (
          <div className="flex items-center gap-1.5 rounded border border-[#46b450] bg-[#ecf7ed] px-3.5 py-1.5 text-xs font-semibold text-[#1e4620]">
            <Check className="h-4 w-4" /> Tüm ayarlar başarıyla kaydedildi!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Site Identity */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 border-b border-[#f0f0f1] pb-2 text-sm font-bold text-[#1d2327]">
            <Globe className="h-4 w-4 text-[#2271b1]" /> 1. Site Kimliği & Meta SEO
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                Site Başlığı (Title)
              </label>
              <input
                type="text"
                required
                value={form.siteTitle}
                onChange={(e) => setForm({ ...form, siteTitle: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">Slogan (Tagline)</label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                Logo Görsel URL'si
              </label>
              <input
                type="text"
                value={form.logoUrl}
                onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">Dernek Kütük No</label>
              <input
                type="text"
                value={form.associationNumber}
                onChange={(e) => setForm({ ...form, associationNumber: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#1d2327]">
                Meta Açıklama (Search Engines)
              </label>
              <textarea
                rows={2}
                value={form.metaDescription}
                onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#1d2327]">
                SEO Anahtar Kelimeler (Keywords)
              </label>
              <input
                type="text"
                value={form.keywords}
                onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Contact Info */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 border-b border-[#f0f0f1] pb-2 text-sm font-bold text-[#1d2327]">
            <Mail className="h-4 w-4 text-[#2271b1]" /> 2. İletişim Bilgileri
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                Resmi E-posta (Genel)
              </label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">KVKK E-posta</label>
              <input
                type="email"
                value={form.kvkkEmail}
                onChange={(e) => setForm({ ...form, kvkkEmail: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">Telefon</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">Adres / Şehir</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Social Links */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 border-b border-[#f0f0f1] pb-2 text-sm font-bold text-[#1d2327]">
            <Share2 className="h-4 w-4 text-[#2271b1]" /> 3. Sosyal Medya Bağlantıları
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">Instagram URL</label>
              <input
                type="text"
                value={form.instagramUrl}
                onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                Discord Davet URL
              </label>
              <input
                type="text"
                value={form.discordUrl}
                onChange={(e) => setForm({ ...form, discordUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                GitHub Organizasyon URL
              </label>
              <input
                type="text"
                value={form.githubUrl}
                onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                YouTube Kanal URL
              </label>
              <input
                type="text"
                value={form.youtubeUrl}
                onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1d2327]">
                X (Twitter) Profil URL
              </label>
              <input
                type="text"
                value={form.twitterUrl}
                onChange={(e) => setForm({ ...form, twitterUrl: e.target.value })}
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Security & Master Passcode */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 border-b border-[#f0f0f1] pb-2 text-sm font-bold text-[#1d2327]">
            <KeyRound className="h-4 w-4 text-[#2271b1]" /> 4. Yönetim Paneli Güvenliği & Giriş
            Şifresi
          </h2>
          <div className="mt-4 max-w-md">
            <label className="block text-xs font-semibold text-[#1d2327]">
              Yönetici Master Giriş Şifresi
            </label>
            <input
              type="text"
              required
              value={form.adminPasscode}
              onChange={(e) => setForm({ ...form, adminPasscode: e.target.value })}
              className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 font-mono text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
            />
            <p className="mt-1 text-[11px] text-[#646970]">
              Gizli yönetim adresine (/yonetim-logd-2025) giriş yaparken sorulacak şifredir.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded bg-[#2271b1] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
          >
            <Save className="h-4 w-4" /> Tüm Ayarları Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
