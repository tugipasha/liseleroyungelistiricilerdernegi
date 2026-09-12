import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Gamepad2, Star, ExternalLink } from "lucide-react";
import { type CMSGameProject } from "@/lib/cms-store";

interface GamesTabProps {
  games: CMSGameProject[];
  onSaveGame: (game: CMSGameProject) => void;
  onDeleteGame: (id: string) => void;
}

export function GamesTab({ games, onSaveGame, onDeleteGame }: GamesTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("all");
  const [editingGame, setEditingGame] = useState<CMSGameProject | null>(null);
  const [isNew, setIsNew] = useState(false);

  const filteredGames = games.filter((g) => {
    const matchesSearch =
      g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === "all" || g.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  const handleStartNew = () => {
    setIsNew(true);
    setEditingGame({
      id: "oyun-" + Date.now(),
      title: "",
      image: "/games/diveboat.png",
      platform: "PC",
      genre: "Simülasyon",
      year: 2026,
      rating: 4.8,
      category: "Game Jam",
      event: "YANJAM",
      developer: "Lise Geliştirici Ekibi",
      school: "LOGD Topluluğu",
      description: "",
      engine: "Unity",
      demoUrl: "https://itch.io/jam/yanjam/entries",
      status: "published",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGame || !editingGame.title.trim()) return;
    onSaveGame(editingGame);
    setEditingGame(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Projeler & Oyunlar</h1>
          <p className="text-xs text-[#646970]">
            Liseli ekiplerin geliştirdiği vitrin oyunlarını ve projelerini yönetin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Proje Ekle
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-[#c3c4c7] bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="rounded border border-[#8c8f94] px-2.5 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
          >
            <option value="all">Tüm Türler</option>
            <option value="Macera">Macera</option>
            <option value="Aksiyon">Aksiyon</option>
            <option value="Bulmaca">Bulmaca</option>
            <option value="Strateji">Strateji</option>
            <option value="Platform">Platform</option>
          </select>
          <span className="text-xs text-[#646970]">
            Toplam: <strong>{filteredGames.length}</strong> proje
          </span>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8c8f94]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Projelerde ara..."
            className="rounded border border-[#8c8f94] py-1 pl-8 pr-3 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border border-[#c3c4c7] bg-white shadow-sm">
        <table className="w-full text-left text-xs text-[#2c3338]">
          <thead className="border-b border-[#c3c4c7] bg-[#f6f7f7] text-[11px] font-bold uppercase text-[#50575e]">
            <tr>
              <th className="px-4 py-2.5">Proje & Görsel</th>
              <th className="px-4 py-2.5">Tür & Motor</th>
              <th className="px-4 py-2.5">Geliştirici & Okul</th>
              <th className="px-4 py-2.5">Puan</th>
              <th className="px-4 py-2.5 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f1]">
            {filteredGames.map((game) => (
              <tr key={game.id} className="hover:bg-[#f6f7f7]/80">
                <td className="px-4 py-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={game.image}
                      alt=""
                      className="h-10 w-14 rounded object-cover border border-[#c3c4c7]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div>
                      <span className="font-bold text-[#1d2327] hover:text-[#2271b1]">
                        {game.title}
                      </span>
                      <p className="mt-0.5 line-clamp-1 max-w-xs text-[11px] text-[#646970]">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded bg-[#f0f0f1] px-2 py-0.5 text-[10px] font-semibold text-[#50575e]">
                    {game.genre}
                  </span>
                  <span className="ml-1.5 text-[11px] text-[#8c8f94]">{game.engine}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="text-[#1d2327] font-medium">{game.developer}</div>
                  <div className="text-[10px] text-[#8c8f94]">{game.school}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-[#e39c12] font-semibold">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span>{game.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNew(false);
                        setEditingGame(game);
                      }}
                      className="rounded border border-[#8c8f94] p-1 text-[#2271b1] hover:bg-[#f0f6fc]"
                      title="Düzenle"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          confirm(`"${game.title}" projesini silmek istediğinize emin misiniz?`)
                        ) {
                          onDeleteGame(game.id);
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
            {filteredGames.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-[#646970]">
                  Eşleşen proje bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg border border-[#c3c4c7] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f1] px-6 py-4">
              <h2 className="text-sm font-bold text-[#1d2327]">
                {isNew ? "Yeni Proje Ekle" : "Projeyi Düzenle"}
              </h2>
              <button
                type="button"
                onClick={() => setEditingGame(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Oyun / Proje Adı
                </label>
                <input
                  type="text"
                  required
                  value={editingGame.title}
                  onChange={(e) => setEditingGame({ ...editingGame, title: e.target.value })}
                  placeholder="Örn: Beyond the Hills"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Tür</label>
                  <select
                    value={editingGame.genre}
                    onChange={(e) =>
                      setEditingGame({
                        ...editingGame,
                        genre: e.target.value as CMSGameProject["genre"],
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="Macera">Macera</option>
                    <option value="Aksiyon">Aksiyon</option>
                    <option value="Bulmaca">Bulmaca</option>
                    <option value="Strateji">Strateji</option>
                    <option value="Platform">Platform</option>
                    <option value="Simülasyon">Simülasyon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Oyun Motoru</label>
                  <input
                    type="text"
                    value={editingGame.engine}
                    onChange={(e) => setEditingGame({ ...editingGame, engine: e.target.value })}
                    placeholder="Unity / Godot / Unreal"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Geliştirici Ekip
                  </label>
                  <input
                    type="text"
                    value={editingGame.developer}
                    onChange={(e) => setEditingGame({ ...editingGame, developer: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Okul</label>
                  <input
                    type="text"
                    value={editingGame.school}
                    onChange={(e) => setEditingGame({ ...editingGame, school: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Açıklama</label>
                <textarea
                  rows={2}
                  value={editingGame.description}
                  onChange={(e) => setEditingGame({ ...editingGame, description: e.target.value })}
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Demo / İndirme URL
                  </label>
                  <input
                    type="text"
                    value={editingGame.demoUrl || ""}
                    onChange={(e) => setEditingGame({ ...editingGame, demoUrl: e.target.value })}
                    placeholder="https://itch.io/..."
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Görsel URL</label>
                  <input
                    type="text"
                    value={editingGame.image}
                    onChange={(e) => setEditingGame({ ...editingGame, image: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#f0f0f1] pt-4">
                <button
                  type="button"
                  onClick={() => setEditingGame(null)}
                  className="rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
                >
                  {isNew ? "Projeyi Kaydet" : "Değişiklikleri Güncelle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
