import { useState } from "react";
import { Plus, School, Phone, Mail } from "lucide-react";
import { type TeamMember } from "@/lib/cms-store";

interface TeamTabProps {
  team: TeamMember[];
  onSaveMember: (member: TeamMember) => void;
  onDeleteMember: (id: string) => void;
}

export function TeamTab({ team, onSaveMember, onDeleteMember }: TeamTabProps) {
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleStartNew = () => {
    setIsNew(true);
    setEditingMember({
      id: "baskan-" + Date.now(),
      name: "",
      role: "Topluluk Başkanı",
      school: "",
      phone: "",
      email: "Business@logddev.com",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember || !editingMember.name.trim()) return;
    onSaveMember(editingMember);
    setEditingMember(null);
    setIsNew(false);
  };

  const getInitials = (name: string) => {
    if (!name) return "TP";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">
            Lise Topluluk Başkanları & Temsilciler
          </h1>
          <p className="text-xs text-[#646970]">
            Liselerdeki LOGD okul başkanlarını ve topluluk temsilcilerini ekleyin, düzenleyin veya
            kaldırın.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Topluluk Başkanı Ekle
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-between rounded border border-[#c3c4c7] bg-white p-4 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1d2327] text-xs font-bold text-white shadow-inner">
                  {getInitials(member.name)}
                </div>
                <div>
                  <h3 className="font-bold text-[#1d2327]">{member.name}</h3>
                  <p className="text-[11px] font-medium text-[#2271b1]">
                    {member.role || "Topluluk Başkanı"}
                  </p>
                </div>
              </div>

              <div className="mt-3.5 space-y-1.5 text-xs text-[#646970]">
                {member.school && (
                  <div className="flex items-center gap-1.5 font-medium text-[#2c3338]">
                    <School className="h-3.5 w-3.5 shrink-0 text-[#2271b1]" />
                    <span className="truncate">{member.school}</span>
                  </div>
                )}
                {member.phone && (
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-[#8c8f94]" />
                    <span>{member.phone}</span>
                  </div>
                )}
                {member.email && (
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#8c8f94]" />
                    <span className="truncate">{member.email}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-end gap-2 border-t border-[#f0f0f1] pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsNew(false);
                  setEditingMember(member);
                }}
                className="rounded border border-[#8c8f94] px-2.5 py-1 text-xs font-semibold text-[#2271b1] hover:bg-[#f0f6fc]"
              >
                Düzenle
              </button>
              <button
                type="button"
                onClick={() => {
                  if (
                    confirm(`"${member.name}" temsilci kaydını silmek istediğinize emin misiniz?`)
                  ) {
                    onDeleteMember(member.id);
                  }
                }}
                className="rounded border border-[#8c8f94] px-2.5 py-1 text-xs font-semibold text-[#d63638] hover:bg-[#fcf0f0]"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-lg border border-[#c3c4c7] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f1] px-6 py-4">
              <h2 className="text-sm font-bold text-[#1d2327]">
                {isNew ? "Yeni Topluluk Başkanı Ekle" : "Topluluk Başkanını Düzenle"}
              </h2>
              <button
                type="button"
                onClick={() => setEditingMember(null)}
                className="text-[#646970] hover:text-[#1d2327]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 p-6">
              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Okul Adı</label>
                <input
                  type="text"
                  required
                  value={editingMember.school || ""}
                  onChange={(e) => setEditingMember({ ...editingMember, school: e.target.value })}
                  placeholder="Örn: İzmir Fen Lisesi (İFL)"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Temsil Eden Başkanın Adı
                </label>
                <input
                  type="text"
                  required
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  placeholder="Örn: Deniz Ak"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Görev / Rol</label>
                <input
                  type="text"
                  required
                  value={editingMember.role || "Topluluk Başkanı"}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  placeholder="Örn: Topluluk Başkanı"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">Telefon No</label>
                  <input
                    type="text"
                    value={editingMember.phone || ""}
                    onChange={(e) => setEditingMember({ ...editingMember, phone: e.target.value })}
                    placeholder="Örn: 0544 394 84 76"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">E-posta</label>
                  <input
                    type="email"
                    value={editingMember.email || ""}
                    onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                    placeholder="Business@logddev.com"
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#f0f0f1] pt-4">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#2271b1] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
                >
                  {isNew ? "Kaydı Ekle" : "Değişiklikleri Güncelle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
