import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Calendar, MapPin, Globe } from "lucide-react";
import { type CMSUpcomingEvent } from "@/lib/cms-store";

interface EventsTabProps {
  events: CMSUpcomingEvent[];
  onSaveEvent: (event: CMSUpcomingEvent) => void;
  onDeleteEvent: (id: string) => void;
}

export function EventsTab({ events, onSaveEvent, onDeleteEvent }: EventsTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingEvent, setEditingEvent] = useState<CMSUpcomingEvent | null>(null);
  const [isNew, setIsNew] = useState(false);

  const filteredEvents = events.filter((ev) => {
    const matchesSearch =
      ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === "all" || ev.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleStartNew = () => {
    setIsNew(true);
    setEditingEvent({
      id: "etkinlik-" + Date.now(),
      title: "",
      day: "15-18",
      month: "EKİM",
      category: "Game Jam",
      mode: "Offline",
      description: "",
      dateRange: "15 - 18 Ekim 2025",
      locationOrTime: "İzmir / Hibrit",
      image:
        "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/event_anatolia_jam_1788549107894.webp",
      status: "published",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent || !editingEvent.title.trim()) return;
    onSaveEvent(editingEvent);
    setEditingEvent(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Etkinlikler & Game Jam'ler</h1>
          <p className="text-xs text-[#646970]">
            Yaklaşan ve geçmiş tüm etkinlikleri, jam tarihlerini ve atölyeleri yönetin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Etkinlik Ekle
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded border border-[#c3c4c7] bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded border border-[#8c8f94] px-2.5 py-1 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
          >
            <option value="all">Tüm Kategoriler</option>
            <option value="Game Jam">Game Jam</option>
            <option value="Atölye">Atölye</option>
            <option value="Seminer">Seminer</option>
            <option value="Etkinlik">Etkinlik</option>
          </select>
          <span className="text-xs text-[#646970]">
            Toplam: <strong>{filteredEvents.length}</strong> etkinlik
          </span>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8c8f94]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Etkinliklerde ara..."
            className="rounded border border-[#8c8f94] py-1 pl-8 pr-3 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border border-[#c3c4c7] bg-white shadow-sm">
        <table className="w-full text-left text-xs text-[#2c3338]">
          <thead className="border-b border-[#c3c4c7] bg-[#f6f7f7] text-[11px] font-bold uppercase text-[#50575e]">
            <tr>
              <th className="px-4 py-2.5">Tarih Rozeti</th>
              <th className="px-4 py-2.5">Etkinlik Adı & Detay</th>
              <th className="px-4 py-2.5">Kategori & Tür</th>
              <th className="px-4 py-2.5">Konum / Saat</th>
              <th className="px-4 py-2.5 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f0f1]">
            {filteredEvents.map((ev) => (
              <tr key={ev.id} className="hover:bg-[#f6f7f7]/80">
                <td className="px-4 py-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded border border-[#c3c4c7] bg-[#f6f7f7] font-bold text-[#1d2327]">
                    <span className="text-xs leading-none">{ev.day}</span>
                    <span className="mt-0.5 text-[9px] uppercase tracking-wider text-[#2271b1]">
                      {ev.month}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-bold text-[#1d2327] hover:text-[#2271b1]">{ev.title}</span>
                  <p className="mt-0.5 line-clamp-1 max-w-md text-[11px] text-[#646970]">
                    {ev.description}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="inline-block w-fit rounded bg-[#f0f0f1] px-2 py-0.5 text-[10px] font-semibold text-[#50575e]">
                      {ev.category}
                    </span>
                    <span className="text-[10px] text-[#8c8f94]">{ev.mode}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#646970]">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#8c8f94]" />
                    <span>{ev.locationOrTime}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNew(false);
                        setEditingEvent(ev);
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
                          confirm(`"${ev.title}" etkinliğini silmek istediğinize emin misiniz?`)
                        ) {
                          onDeleteEvent(ev.id);
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
            {filteredEvents.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-xs text-[#646970]">
                  Eşleşen etkinlik bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg border border-[#c3c4c7] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f1] px-6 py-4">
              <h2 className="text-sm font-bold text-[#1d2327]">
                {isNew ? "Yeni Etkinlik Ekle" : "Etkinliği Düzenle"}
              </h2>
              <button
                type="button"
                onClick={() => setEditingEvent(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Etkinlik Başlığı
                </label>
                <input
                  type="text"
                  required
                  value={editingEvent.title}
                  onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                  placeholder="Örn: Anatolia Game Jam 2025"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Gün Rozeti (Örn: 10-14)
                  </label>
                  <input
                    type="text"
                    required
                    value={editingEvent.day}
                    onChange={(e) => setEditingEvent({ ...editingEvent, day: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Ay Rozeti (Örn: OCA, ŞUB, MAY)
                  </label>
                  <input
                    type="text"
                    required
                    value={editingEvent.month}
                    onChange={(e) => setEditingEvent({ ...editingEvent, month: e.target.value })}
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Kategori</label>
                  <select
                    value={editingEvent.category}
                    onChange={(e) =>
                      setEditingEvent({
                        ...editingEvent,
                        category: e.target.value as CMSUpcomingEvent["category"],
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="Game Jam">Game Jam</option>
                    <option value="Atölye">Atölye</option>
                    <option value="Seminer">Seminer</option>
                    <option value="Etkinlik">Etkinlik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Mod (Format)</label>
                  <select
                    value={editingEvent.mode}
                    onChange={(e) =>
                      setEditingEvent({
                        ...editingEvent,
                        mode: e.target.value as "Online" | "Offline",
                      })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  >
                    <option value="Offline">Offline (Yüz Yüze)</option>
                    <option value="Online">Online (Çevrim İçi)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Tarih Aralığı Açıklaması
                  </label>
                  <input
                    type="text"
                    value={editingEvent.dateRange}
                    onChange={(e) =>
                      setEditingEvent({ ...editingEvent, dateRange: e.target.value })
                    }
                    placeholder="Örn: 10 - 14 Ocak 2025"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">
                    Konum veya Saat
                  </label>
                  <input
                    type="text"
                    value={editingEvent.locationOrTime}
                    onChange={(e) =>
                      setEditingEvent({ ...editingEvent, locationOrTime: e.target.value })
                    }
                    placeholder="Örn: İzmir Gençlik Merkezi veya 19:00"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Etkinlik Açıklaması
                </label>
                <textarea
                  rows={3}
                  value={editingEvent.description}
                  onChange={(e) =>
                    setEditingEvent({ ...editingEvent, description: e.target.value })
                  }
                  placeholder="Etkinlik hakkında detaylı bilgi..."
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Görsel URL'si</label>
                <input
                  type="text"
                  value={editingEvent.image}
                  onChange={(e) => setEditingEvent({ ...editingEvent, image: e.target.value })}
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#f0f0f1] pt-4">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
                >
                  {isNew ? "Etkinliği Kaydet" : "Değişiklikleri Güncelle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
