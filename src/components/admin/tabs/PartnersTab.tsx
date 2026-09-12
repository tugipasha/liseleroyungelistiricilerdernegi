import { useState } from "react";
import { Plus, Edit2, Trash2, Handshake, ExternalLink } from "lucide-react";
import { type PartnerItem } from "@/lib/cms-store";

interface PartnersTabProps {
  partners: PartnerItem[];
  onSavePartner: (partner: PartnerItem) => void;
  onDeletePartner: (id: string) => void;
}

export function PartnersTab({ partners, onSavePartner, onDeletePartner }: PartnersTabProps) {
  const [editingPartner, setEditingPartner] = useState<PartnerItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleStartNew = () => {
    setIsNew(true);
    setEditingPartner({
      id: "partner-" + Date.now(),
      name: "",
      category: "Teknoloji Destekçisi",
      tier: "Gold",
      description: "",
      websiteUrl: "https://",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPartner || !editingPartner.name.trim()) return;
    onSavePartner(editingPartner);
    setEditingPartner(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Partnerler & Destekçiler</h1>
          <p className="text-xs text-[#646970]">
            Sektörel sponsorları, STK ve üniversite iş birliklerini düzenleyin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Partner Ekle
        </button>
      </div>

      <div className="overflow-x-auto rounded border border-[#c3c4c7] bg-white shadow-sm">
        <table className="w-full text-left text-xs text-[#2c3338]">
          <thead className="border-b border-[#c3c4c7] bg-[#f6f7f7] text-[11px] font-bold uppercase text-[#50575e]">
            <tr>
              <th className="px-4 py-2.5">Kurum / Firma Adı</th>
              <th className="px-4 py-2.5">Seviye (Tier)</th>
              <th className="px-4 py-2.5">Kategori</th>
              <th className="px-4 py-2.5">Açıklama</th>
              <th className="px-4 py-2.5 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f1]">
            {partners.map((p) => (
              <tr key={p.id} className="hover:bg-[#f6f7f7]/80">
                <td className="px-4 py-3 font-bold text-[#1d2327]">
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2271b1] hover:underline"
                  >
                    {p.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      p.tier === "Platinum"
                        ? "bg-[#e5e7eb] text-[#374151]"
                        : p.tier === "Gold"
                          ? "bg-[#fef3c7] text-[#92400e]"
                          : "bg-[#e0e7ff] text-[#3730a3]"
                    }`}
                  >
                    {p.tier}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#50575e]">{p.category}</td>
                <td className="px-4 py-3 text-[#646970] line-clamp-1 max-w-sm">{p.description}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNew(false);
                        setEditingPartner(p);
                      }}
                      className="rounded border border-[#8c8f94] p-1 text-[#2271b1] hover:bg-[#f0f6fc]"
                      title="Düzenle"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`"${p.name}" partnerini silmek istediğinize emin misiniz?`)) {
                          onDeletePartner(p.id);
                        }
                      }}
                      className="rounded border border-[#8c8f94] p-1 text-[#d63638] hover:bg-[#fcf0f0]"
                      title="Sil"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-lg border border-[#c3c4c7] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f1] px-6 py-4">
              <h2 className="text-sm font-bold text-[#1d2327]">
                {isNew ? "Yeni Partner Ekle" : "Partneri Düzenle"}
              </h2>
              <button
                type="button"
                onClick={() => setEditingPartner(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Kurum / Marka Adı
                </label>
                <input
                  type="text"
                  required
                  value={editingPartner.name}
                  onChange={(e) => setEditingPartner({ ...editingPartner, name: e.target.value })}
                  placeholder="Örn: Epic Games"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Seviye (Tier)
                  </label>
                  <select
                    value={editingPartner.tier}
                    onChange={(e) =>
                      setEditingPartner({
                        ...editingPartner,
                        tier: e.target.value as PartnerItem["tier"],
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Kategori</label>
                  <input
                    type="text"
                    value={editingPartner.category}
                    onChange={(e) =>
                      setEditingPartner({ ...editingPartner, category: e.target.value })
                    }
                    placeholder="Örn: Oyun Motoru & Teknoloji"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Web Sitesi URL</label>
                <input
                  type="url"
                  value={editingPartner.websiteUrl}
                  onChange={(e) =>
                    setEditingPartner({ ...editingPartner, websiteUrl: e.target.value })
                  }
                  placeholder="https://..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Destek Açıklaması
                </label>
                <textarea
                  rows={2}
                  value={editingPartner.description}
                  onChange={(e) =>
                    setEditingPartner({ ...editingPartner, description: e.target.value })
                  }
                  placeholder="İş birliği ve destek kapsamı..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#f0f0f1] pt-4">
                <button
                  type="button"
                  onClick={() => setEditingPartner(null)}
                  className="rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
                >
                  {isNew ? "Partneri Kaydet" : "Değişiklikleri Güncelle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
