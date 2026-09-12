import { useState } from "react";
import { Save, Check, FileStack, Sparkles, Layers, Info } from "lucide-react";
import { type HomePageData, type AboutPageData } from "@/lib/cms-store";

interface PagesTabProps {
  home: HomePageData;
  about: AboutPageData;
  onSaveHome: (data: HomePageData) => void;
  onSaveAbout: (data: AboutPageData) => void;
}

export function PagesTab({ home, about, onSaveHome, onSaveAbout }: PagesTabProps) {
  const [subTab, setSubTab] = useState<"home" | "about">("home");
  const [homeForm, setHomeForm] = useState<HomePageData>(home);
  const [aboutForm, setAboutForm] = useState<AboutPageData>(about);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (subTab === "home") {
      onSaveHome(homeForm);
    } else {
      onSaveAbout(aboutForm);
    }
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Sayfa İçerik Yönetimi</h1>
          <p className="text-xs text-[#646970]">
            Ana sayfa ve hakkımızda bölümlerindeki metinleri, başlıkları ve sayaçları özelleştirin.
          </p>
        </div>
        {savedNotice && (
          <div className="flex items-center gap-1.5 rounded border border-[#46b450] bg-[#ecf7ed] px-3 py-1.5 text-xs font-semibold text-[#1e4620]">
            <Check className="h-4 w-4" /> Değişiklikler anında kaydedildi ve yayında!
          </div>
        )}
      </div>

      {/* Sub-tabs */}
      <div className="flex border-b border-[#c3c4c7] bg-white px-4 pt-2">
        <button
          type="button"
          onClick={() => setSubTab("home")}
          className={`border-b-2 px-4 py-2.5 text-xs font-bold transition-colors ${
            subTab === "home"
              ? "border-[#2271b1] text-[#2271b1]"
              : "border-transparent text-[#646970] hover:text-[#1d2327]"
          }`}
        >
          Ana Sayfa Bölümleri
        </button>
        <button
          type="button"
          onClick={() => setSubTab("about")}
          className={`border-b-2 px-4 py-2.5 text-xs font-bold transition-colors ${
            subTab === "about"
              ? "border-[#2271b1] text-[#2271b1]"
              : "border-transparent text-[#646970] hover:text-[#1d2327]"
          }`}
        >
          Hakkımızda & Tarihçe
        </button>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSave}
        className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm"
      >
        {subTab === "home" ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold text-[#1d2327] border-b border-[#f0f0f1] pb-2">
                1. Hero (Karşılama) Alanı
              </h2>
              <div className="mt-4 grid gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Üst Rozet Metni (Eyebrow)
                  </label>
                  <input
                    type="text"
                    value={homeForm.heroEyebrow}
                    onChange={(e) => setHomeForm({ ...homeForm, heroEyebrow: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2327]">
                      Ana Başlık (1. Satır)
                    </label>
                    <input
                      type="text"
                      value={homeForm.heroTitleLine1}
                      onChange={(e) => setHomeForm({ ...homeForm, heroTitleLine1: e.target.value })}
                      className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2327]">
                      Ana Başlık (2. Satır)
                    </label>
                    <input
                      type="text"
                      value={homeForm.heroTitleLine2}
                      onChange={(e) => setHomeForm({ ...homeForm, heroTitleLine2: e.target.value })}
                      className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Hero Açıklama Metni
                  </label>
                  <textarea
                    rows={3}
                    value={homeForm.heroDescription}
                    onChange={(e) => setHomeForm({ ...homeForm, heroDescription: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2327]">
                      Birincil Buton Metni
                    </label>
                    <input
                      type="text"
                      value={homeForm.heroPrimaryCtaText}
                      onChange={(e) =>
                        setHomeForm({ ...homeForm, heroPrimaryCtaText: e.target.value })
                      }
                      className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2327]">
                      İkincil Buton Metni
                    </label>
                    <input
                      type="text"
                      value={homeForm.heroSecondaryCtaText}
                      onChange={(e) =>
                        setHomeForm({ ...homeForm, heroSecondaryCtaText: e.target.value })
                      }
                      className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#1d2327] border-b border-[#f0f0f1] pb-2">
                2. Ana Sayfa İstatistik Sayaçları (4 Adet)
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {homeForm.stats.map((stat, i) => (
                  <div key={i} className="rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3">
                    <label className="block text-[11px] font-semibold text-[#50575e]">Değer</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const updated = homeForm.stats.map((s, idx) =>
                          idx === i ? { ...s, value: e.target.value } : s,
                        );
                        setHomeForm({ ...homeForm, stats: updated });
                      }}
                      className="mt-1 w-full rounded border border-[#8c8f94] px-2.5 py-1 text-xs font-bold text-[#1d2327] outline-none focus:border-[#2271b1]"
                    />
                    <label className="mt-2 block text-[11px] font-semibold text-[#50575e]">
                      Etiket
                    </label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const updated = homeForm.stats.map((s, idx) =>
                          idx === i ? { ...s, label: e.target.value } : s,
                        );
                        setHomeForm({ ...homeForm, stats: updated });
                      }}
                      className="mt-1 w-full rounded border border-[#8c8f94] px-2.5 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-bold text-[#1d2327] border-b border-[#f0f0f1] pb-2">
                Misyon & Vizyon
              </h2>
              <div className="mt-4 grid gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Misyonumuz Açıklaması
                  </label>
                  <textarea
                    rows={3}
                    value={aboutForm.missionDesc}
                    onChange={(e) => setAboutForm({ ...aboutForm, missionDesc: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Vizyonumuz Açıklaması
                  </label>
                  <textarea
                    rows={3}
                    value={aboutForm.visionDesc}
                    onChange={(e) => setAboutForm({ ...aboutForm, visionDesc: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#1d2327] border-b border-[#f0f0f1] pb-2">
                Zaman Çizelgesi (Tarihçe)
              </h2>
              <div className="mt-4 space-y-3">
                {aboutForm.timeline.map((item, idx) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-3 rounded border border-[#f0f0f1] bg-[#f6f7f7] p-3"
                  >
                    <div className="col-span-2">
                      <label className="block text-[10px] font-bold text-[#50575e]">Yıl</label>
                      <input
                        type="text"
                        value={item.year}
                        onChange={(e) => {
                          const updated = aboutForm.timeline.map((t, i) =>
                            i === idx ? { ...t, year: e.target.value } : t,
                          );
                          setAboutForm({ ...aboutForm, timeline: updated });
                        }}
                        className="mt-1 w-full rounded border border-[#8c8f94] px-2 py-1 text-xs font-bold text-[#1d2327] outline-none focus:border-[#2271b1]"
                      />
                    </div>
                    <div className="col-span-4">
                      <label className="block text-[10px] font-bold text-[#50575e]">Başlık</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const updated = aboutForm.timeline.map((t, i) =>
                            i === idx ? { ...t, title: e.target.value } : t,
                          );
                          setAboutForm({ ...aboutForm, timeline: updated });
                        }}
                        className="mt-1 w-full rounded border border-[#8c8f94] px-2 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                      />
                    </div>
                    <div className="col-span-6">
                      <label className="block text-[10px] font-bold text-[#50575e]">Açıklama</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => {
                          const updated = aboutForm.timeline.map((t, i) =>
                            i === idx ? { ...t, description: e.target.value } : t,
                          );
                          setAboutForm({ ...aboutForm, timeline: updated });
                        }}
                        className="mt-1 w-full rounded border border-[#8c8f94] px-2 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end border-t border-[#f0f0f1] pt-4">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
          >
            <Save className="h-4 w-4" /> Değişiklikleri Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
