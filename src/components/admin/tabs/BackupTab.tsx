import { useState } from "react";
import { Download, Upload, RefreshCw, Check, AlertTriangle, Copy, Database } from "lucide-react";
import { exportCMSJson, importCMSJson, resetCMSToDefaults, type CMSData } from "@/lib/cms-store";

interface BackupTabProps {
  cms: CMSData;
  onRefreshData: () => void;
}

export function BackupTab({ cms, onRefreshData }: BackupTabProps) {
  const [jsonInput, setJsonInput] = useState("");
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const jsonStr = exportCMSJson();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `logd-site-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const jsonStr = exportCMSJson();
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jsonInput.trim()) return;
    const ok = importCMSJson(jsonInput);
    if (ok) {
      setImportStatus("success");
      onRefreshData();
      setJsonInput("");
    } else {
      setImportStatus("error");
    }
  };

  const handleReset = () => {
    if (
      confirm(
        "DİKKAT: Tüm sitedeki özel değişiklikler sıfırlanacak ve orijinal varsayılan verilere dönülecektir. Onaylıyor musunuz?",
      )
    ) {
      resetCMSToDefaults();
      onRefreshData();
      alert("Site verileri orijinal fabrika ayarlarına sıfırlandı.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#1d2327]">Veri Yedekleme & İçe/Dışa Aktarma</h1>
        <p className="text-xs text-[#646970]">
          Sitenizin tüm içeriğini (yazılar, etkinlikler, projeler, ayarlar) tek bir JSON dosyası
          olarak yedekleyin veya başka bir ortamdan içe aktarın.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Export Card */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-sm font-bold text-[#1d2327]">
            <Download className="h-4 w-4 text-[#2271b1]" /> 1. Yedeği İndir / Dışa Aktar
          </h2>
          <p className="mt-1 text-xs text-[#646970]">
            Şu an sitede bulunan tüm verileri (yazılar, sayfalar, etkinlikler, ayarlar)
            bilgisayarınıza JSON dosyası olarak kaydedin.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-2 rounded bg-[#2271b1] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96]"
            >
              <Download className="h-4 w-4" /> JSON Yedeğini İndir
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-2 rounded border border-[#8c8f94] px-4 py-2 text-xs font-semibold text-[#2c3338] hover:bg-[#f0f0f1]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#46b450]" /> Kopyalandı!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Panoya Kopyala
                </>
              )}
            </button>
          </div>
        </div>

        {/* Import Card */}
        <div className="rounded border border-[#c3c4c7] bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-sm font-bold text-[#1d2327]">
            <Upload className="h-4 w-4 text-[#2271b1]" /> 2. JSON Yedeğini İçe Aktar
          </h2>
          <p className="mt-1 text-xs text-[#646970]">
            Daha önce indirdiğiniz JSON yedeğini buraya yapıştırarak sitenizi geri yükleyin.
          </p>

          {importStatus === "success" && (
            <div className="mt-3 flex items-center gap-1.5 rounded border border-[#46b450] bg-[#ecf7ed] p-2.5 text-xs text-[#1e4620]">
              <Check className="h-4 w-4 shrink-0" /> Yedek başarıyla geri yüklendi ve siteye
              uygulandı!
            </div>
          )}

          {importStatus === "error" && (
            <div className="mt-3 flex items-center gap-1.5 rounded border border-[#d63638] bg-[#fcf0f0] p-2.5 text-xs text-[#d63638]">
              <AlertTriangle className="h-4 w-4 shrink-0" /> Geçersiz JSON formatı. Lütfen kontrol
              ediniz.
            </div>
          )}

          <form onSubmit={handleImport} className="mt-4">
            <textarea
              rows={4}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="JSON metnini buraya yapıştırınız..."
              className="w-full rounded border border-[#8c8f94] p-2.5 font-mono text-[11px] text-[#2c3338] outline-none focus:border-[#2271b1]"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                disabled={!jsonInput.trim()}
                className="flex items-center gap-2 rounded bg-[#2271b1] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#135e96] disabled:opacity-50"
              >
                <Upload className="h-4 w-4" /> Yedeği Uygula
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Danger Zone: Factory Reset */}
      <div className="rounded border border-[#d63638]/40 bg-[#fcf0f0] p-6">
        <h2 className="flex items-center gap-2 text-sm font-bold text-[#d63638]">
          <AlertTriangle className="h-4 w-4" /> Tehlikeli Bölge: Varsayılanlara Sıfırla
        </h2>
        <p className="mt-1 text-xs text-[#646970]">
          Yerel tarayıcı veritabanındaki tüm özel değişiklikleri siler ve siteyi ilk kurulduğu
          orijinal durumuna döndürür.
        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-[#d63638] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b32d2e]"
          >
            Varsayılan Ayarlara Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
}
