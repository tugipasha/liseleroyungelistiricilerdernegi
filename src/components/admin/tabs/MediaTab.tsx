import { useState } from "react";
import { Plus, Copy, Check, Trash2, Image as ImageIcon, ExternalLink } from "lucide-react";
import { type MediaAsset } from "@/lib/cms-store";

interface MediaTabProps {
  media: MediaAsset[];
  onAddMedia: (asset: MediaAsset) => void;
  onDeleteMedia: (id: string) => void;
}

export function MediaTab({ media, onAddMedia, onDeleteMedia }: MediaTabProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;
    onAddMedia({
      id: "media-" + Date.now(),
      title: newTitle.trim(),
      url: newUrl.trim(),
      type: "image",
      size: "WebP / CDN",
      date: new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    });
    setNewTitle("");
    setNewUrl("");
    setIsAdding(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Ortam / Medya Kütüphanesi</h1>
          <p className="text-xs text-[#646970]">
            Sitede kullanılan tüm logo, afiş ve fotoğrafların URL'lerini kopyalayın veya yeni
            görseller ekleyin.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Ortam Ekle
        </button>
      </div>

      {isAdding && (
        <form
          onSubmit={handleAdd}
          className="rounded border border-[#2271b1] bg-white p-4 shadow-sm"
        >
          <h3 className="text-xs font-bold text-[#1d2327]">Yeni Görsel Bağlantısı Ekle</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-[11px] font-semibold text-[#50575e]">
                Görsel Başlığı / Açıklaması
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Örn: Yeni Etkinlik Afişi 2025"
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-1.5 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-[#50575e]">
                Görsel URL Adresi
              </label>
              <input
                type="text"
                required
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://... veya /assets/..."
                className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-1.5 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
              />
            </div>
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="rounded border border-[#8c8f94] px-3 py-1 text-xs text-[#2c3338]"
            >
              İptal
            </button>
            <button
              type="submit"
              className="rounded bg-[#2271b1] px-4 py-1 text-xs font-semibold text-white hover:bg-[#135e96]"
            >
              Kütüphaneye Ekle
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded border border-[#c3c4c7] bg-white shadow-sm"
          >
            <div className="relative flex h-36 items-center justify-center bg-[#f0f0f1]">
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-3.5">
              <div>
                <h4 className="text-xs font-bold text-[#1d2327] line-clamp-1">{item.title}</h4>
                <p className="mt-1 font-mono text-[10px] text-[#646970] line-clamp-1">{item.url}</p>
                <div className="mt-1 flex items-center gap-2 text-[10px] text-[#8c8f94]">
                  <span>{item.date}</span>
                  {item.size && <span>• {item.size}</span>}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#f0f0f1] pt-2">
                <button
                  type="button"
                  onClick={() => handleCopy(item.id, item.url)}
                  className="flex items-center gap-1 text-[11px] font-semibold text-[#2271b1] hover:underline"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#46b450]" /> Kopyalandı!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> URL'yi Kopyala
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteMedia(item.id)}
                  className="text-[#d63638] hover:text-[#b32d2e]"
                  title="Sil"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
