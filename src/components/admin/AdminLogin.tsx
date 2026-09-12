import { useState, type FormEvent } from "react";
import { Lock, KeyRound, ArrowRight, ShieldCheck, AlertCircle, Eye, EyeOff } from "lucide-react";

interface AdminLoginProps {
  onSuccess: () => void;
  correctPasscode: string;
}

export function AdminLogin({ onSuccess, correctPasscode }: AdminLoginProps) {
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError("Lütfen yönetim şifresini giriniz.");
      return;
    }

    if (passcode.trim() === correctPasscode.trim()) {
      setError("");
      if (rememberMe) {
        localStorage.setItem("logd_admin_auth", "true");
      } else {
        sessionStorage.setItem("logd_admin_auth", "true");
      }
      onSuccess();
    } else {
      setError("Geçersiz yönetim şifresi. Lütfen yetkili şifrenizi kontrol ediniz.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f0f1] px-4 py-12 font-sans text-[#3c434a]">
      <div className="w-full max-w-[360px]">
        {/* WordPress Style Brand Icon */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2271b1] text-white shadow-md">
            <span className="text-2xl font-black tracking-wider">LOGD</span>
          </div>
          <h1 className="mt-3 text-lg font-bold text-[#1d2327]">LOGD Yönetim Masası</h1>
          <p className="mt-0.5 text-xs text-[#646970]">WordPress Kapsamlı Yönetim Paneli</p>
        </div>

        {/* Error Notice */}
        {error && (
          <div className="mb-4 flex items-start gap-2.5 border-l-4 border-[#d63638] bg-white p-3.5 text-xs text-[#1d2327] shadow-sm">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#d63638]" />
            <div>
              <strong>HATA:</strong> {error}
            </div>
          </div>
        )}

        {/* Secret URL info banner */}
        <div className="mb-4 flex items-center gap-2 rounded border border-[#c3c4c7] bg-white px-3 py-2 text-[11px] text-[#50575e] shadow-sm">
          <ShieldCheck className="h-4 w-4 text-[#2271b1]" />
          <span>Bu gizli yönetim URL'si yalnızca yetkili yöneticilere açıktır.</span>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm"
        >
          <div>
            <label htmlFor="passcode" className="block text-xs font-semibold text-[#1d2327]">
              Yönetici Giriş Anahtarı (Şifre)
            </label>
            <div className="relative mt-2">
              <input
                id="passcode"
                type={showPassword ? "text" : "password"}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError("");
                }}
                placeholder="Şifrenizi giriniz..."
                autoFocus
                className="w-full rounded border border-[#8c8f94] px-3 py-2 pr-10 text-sm text-[#2c3338] outline-none transition-colors focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#646970] hover:text-[#1d2327]"
                aria-label="Şifreyi Göster"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-[#50575e]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-[#8c8f94] text-[#2271b1] focus:ring-[#2271b1]"
              />
              Beni Hatırla
            </label>
            <span className="text-[11px] text-[#2271b1]">Varsayılan: logd2025</span>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-[#2271b1] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#135e96] active:bg-[#0a4b78]"
            >
              <KeyRound className="h-4 w-4" /> Yönetim Paneline Giriş Yap
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-6 text-center text-xs text-[#646970]">
          <a href="/" className="text-[#2271b1] hover:underline">
            ← Liseler Oyun Geliştiricileri Derneği Sitesine Dön
          </a>
        </div>
      </div>
    </div>
  );
}
