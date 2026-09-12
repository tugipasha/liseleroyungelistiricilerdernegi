import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Check,
  X,
  FileText,
  Image as ImageIcon,
  Eye,
} from "lucide-react";
import { type NewsPost } from "@/lib/cms-store";

interface NewsTabProps {
  news: NewsPost[];
  onSavePost: (post: NewsPost) => void;
  onDeletePost: (id: string) => void;
}

export function NewsTab({ news, onSavePost, onDeletePost }: NewsTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [isNew, setIsNew] = useState(false);

  const filteredNews = news.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleStartNew = () => {
    setIsNew(true);
    setEditingPost({
      id: "yazi-" + Date.now(),
      title: "",
      excerpt: "",
      content: [""],
      category: "Duyurular",
      date: new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      readTime: "3 dk",
      image:
        "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/news_gamejam_stage_1788553284412.webp",
      isFeatured: false,
      status: "published",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost || !editingPost.title.trim()) return;
    onSavePost(editingPost);
    setEditingPost(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Yazılar & Haberler</h1>
          <p className="text-xs text-[#646970]">
            Sitede yayınlanan tüm haberleri, duyuruları ve içerikleri yönetin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Yazı Ekle
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-[#c3c4c7] bg-white p-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded border border-[#8c8f94] px-2.5 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
          >
            <option value="all">Tüm Kategoriler</option>
            <option value="Etkinlikler">Etkinlikler</option>
            <option value="Topluluk">Topluluk</option>
            <option value="Industry News">Industry News</option>
            <option value="Duyurular">Duyurular</option>
          </select>
          <span className="text-xs text-[#646970]">
            Toplam: <strong>{filteredNews.length}</strong> yazı
          </span>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8c8f94]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Yazılarda ara..."
            className="rounded border border-[#8c8f94] py-1 pl-8 pr-3 text-xs text-[#2c3338] outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1]"
          />
        </div>
      </div>

      {/* Posts Table */}
      <div className="overflow-x-auto rounded border border-[#c3c4c7] bg-white shadow-sm">
        <table className="w-full text-left text-xs text-[#2c3338]">
          <thead className="border-b border-[#c3c4c7] bg-[#f6f7f7] text-[11px] font-bold uppercase text-[#50575e]">
            <tr>
              <th className="px-4 py-2.5">Görsel & Başlık</th>
              <th className="px-4 py-2.5">Kategori</th>
              <th className="px-4 py-2.5">Tarih</th>
              <th className="px-4 py-2.5">Durum</th>
              <th className="px-4 py-2.5 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f1]">
            {filteredNews.map((post) => (
              <tr key={post.id} className="hover:bg-[#f6f7f7]/80">
                <td className="px-4 py-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={post.image}
                      alt=""
                      className="h-10 w-14 rounded object-cover border border-[#c3c4c7]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div>
                      <span className="font-bold text-[#1d2327] hover:text-[#2271b1]">
                        {post.title}
                      </span>
                      {post.isFeatured && (
                        <span className="ml-2 rounded bg-[#fcf0db] px-1.5 py-0.5 text-[10px] font-semibold text-[#8a5d00]">
                          Öne Çıkan
                        </span>
                      )}
                      <p className="mt-0.5 line-clamp-1 max-w-md text-[11px] text-[#646970]">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded bg-[#f0f0f1] px-2 py-0.5 text-[11px] text-[#50575e]">
                    {post.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#646970]">{post.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      post.status === "draft"
                        ? "bg-[#f0f0f1] text-[#646970]"
                        : "bg-[#ecf7ed] text-[#1e4620]"
                    }`}
                  >
                    {post.status === "draft" ? "Taslak" : "Yayında"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNew(false);
                        setEditingPost(post);
                      }}
                      className="rounded border border-[#8c8f94] p-1 text-[#2271b1] hover:bg-[#f0f6fc]"
                      title="Düzenle"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`"${post.title}" yazısını silmek istediğinize emin misiniz?`)) {
                          onDeletePost(post.id);
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
            {filteredNews.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-[#646970]">
                  Eşleşen yazı bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit / New Modal */}
      {editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[#c3c4c7] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f1] px-6 py-4">
              <h2 className="text-sm font-bold text-[#1d2327]">
                {isNew ? "Yeni Yazı Ekle" : "Yazıyı Düzenle"}
              </h2>
              <button
                type="button"
                onClick={() => setEditingPost(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Yazı Başlığı</label>
                <input
                  type="text"
                  required
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  placeholder="Başlık giriniz..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Kategori</label>
                  <select
                    value={editingPost.category}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        category: e.target.value as NewsPost["category"],
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="Etkinlikler">Etkinlikler</option>
                    <option value="Topluluk">Topluluk</option>
                    <option value="Industry News">Industry News</option>
                    <option value="Duyurular">Duyurular</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Yayın Durumu</label>
                  <select
                    value={editingPost.status || "published"}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        status: e.target.value as "published" | "draft",
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="published">Yayında (Aktif)</option>
                    <option value="draft">Taslak (Gizli)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Kısa Özet (Excerpt)
                </label>
                <textarea
                  rows={2}
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  placeholder="Yazı kartında görünecek kısa özet..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Görsel URL / Varlık Yolu
                </label>
                <input
                  type="text"
                  value={editingPost.image}
                  onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                  placeholder="/assets/... veya https://..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Tarih</label>
                  <input
                    type="text"
                    value={editingPost.date}
                    onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Okuma Süresi</label>
                  <input
                    type="text"
                    value={editingPost.readTime}
                    onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-[#1d2327]">
                  <input
                    type="checkbox"
                    checked={editingPost.isFeatured || false}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, isFeatured: e.target.checked })
                    }
                    className="rounded border-[#8c8f94] text-[#2271b1] focus:ring-[#2271b1]"
                  />
                  Bu yazıyı 'Öne Çıkan' olarak işaretle
                </label>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Yazı İçerik Paragrafları
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingPost({
                        ...editingPost,
                        content: [...(editingPost.content || []), ""],
                      })
                    }
                    className="text-xs font-semibold text-[#2271b1] hover:underline"
                  >
                    + Paragraf Ekle
                  </button>
                </div>
                <div className="mt-2 space-y-2">
                  {editingPost.content.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <textarea
                        rows={3}
                        value={p}
                        onChange={(e) => {
                          const updated = [...editingPost.content];
                          updated[idx] = e.target.value;
                          setEditingPost({ ...editingPost, content: updated });
                        }}
                        placeholder={`Paragraf ${idx + 1}...`}
                        className="w-full rounded border border-[#8c8f94] px-3 py-1.5 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                      />
                      {editingPost.content.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = editingPost.content.filter((_, i) => i !== idx);
                            setEditingPost({ ...editingPost, content: updated });
                          }}
                          className="mt-1 text-[#d63638] hover:text-[#b32d2e]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#f0f0f1] pt-4">
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  className="rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
                >
                  {isNew ? "Yazıyı Yayınla" : "Değişiklikleri Kaydet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
