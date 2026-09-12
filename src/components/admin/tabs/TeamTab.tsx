import { useState } from "react";
import { Plus, Edit2, Trash2, Users, Mail, Linkedin, Github } from "lucide-react";
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
      id: "ekip-" + Date.now(),
      name: "",
      role: "Koordinatör",
      image: "/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/team_ahmet_1788547015900.webp",
      email: "info@logd.org.tr",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember || !editingMember.name.trim()) return;
    onSaveMember(editingMember);
    setEditingMember(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#1d2327]">Ekip & Mentor Yönetimi</h1>
          <p className="text-xs text-[#646970]">
            Yönetim ekibini, topluluk liderlerini ve mentorları ekleyin, düzenleyin veya kaldırın.
          </p>
        </div>
        <button
          type="button"
          onClick={handleStartNew}
          className="inline-flex items-center gap-1.5 rounded bg-[#2271b1] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
        >
          <Plus className="h-4 w-4" /> Yeni Ekip Üyesi Ekle
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex flex-col justify-between rounded border border-[#c3c4c7] bg-white p-4 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={member.image}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover border border-[#c3c4c7]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div>
                  <h3 className="font-bold text-[#1d2327]">{member.name}</h3>
                  <p className="text-[11px] font-medium text-[#2271b1]">{member.role}</p>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-xs text-[#646970]">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#8c8f94]" />
                  <span className="truncate">{member.email}</span>
                </div>
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
                  if (confirm(`"${member.name}" üyesini silmek istediğinize emin misiniz?`)) {
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
                {isNew ? "Yeni Ekip Üyesi Ekle" : "Ekip Üyesini Düzenle"}
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
                <label className="block text-xs font-semibold text-[#1d2327]">Ad Soyad</label>
                <input
                  type="text"
                  required
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  placeholder="Örn: Ahmet Yılmaz"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">Görev / Rol</label>
                <input
                  type="text"
                  required
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  placeholder="Örn: Topluluk Yöneticisi"
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">
                  Profil Fotoğrafı URL
                </label>
                <input
                  type="text"
                  value={editingMember.image}
                  onChange={(e) => setEditingMember({ ...editingMember, image: e.target.value })}
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d2327]">E-posta</label>
                <input
                  type="email"
                  value={editingMember.email}
                  onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                  className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">LinkedIn URL</label>
                  <input
                    type="text"
                    value={editingMember.linkedin}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, linkedin: e.target.value })
                    }
                    className="mt-1 w-full rounded border border-[#8c8f94] px-3 py-2 text-xs text-[#2c3338] outline-none focus:border-[#2271b1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1d2327]">GitHub URL</label>
                  <input
                    type="text"
                    value={editingMember.github}
                    onChange={(e) => setEditingMember({ ...editingMember, github: e.target.value })}
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
                  {isNew ? "Üyeyi Kaydet" : "Değişiklikleri Güncelle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
