import { createFileRoute } from "@tanstack/react-router";
import { Cookie, Sliders, ShieldCheck, Laptop, HelpCircle, CheckCircle2 } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";
import { openCookieSettings } from "@/lib/cookie-settings";

export const Route = createFileRoute("/cerez-politikasi")({
  head: () => ({
    meta: [
      { title: "Çerez Politikası | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD Çerez Politikası: Web sitemizde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğinize dair detaylı rehber.",
      },
      { property: "og:title", content: "Çerez Politikası | LOGD" },
      {
        property: "og:description",
        content:
          "Liseler Oyun Geliştiricileri Derneği web sitesinde kullanılan çerezler, saklama süreleri ve tercihlerinizi kontrol etme yöntemleri.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CerezPolitikasiPage,
});

const TOC = [
  { id: "cerez-nedir", title: "1. Çerez (Cookie) Nedir?" },
  { id: "kullanim-amaci", title: "2. Çerezleri Neden Kullanıyoruz?" },
  { id: "cerez-turleri", title: "3. Sitemizde Kullanılan Çerez Türleri" },
  { id: "cerez-envanteri", title: "4. Ayrıntılı Çerez Envanteri Tablosu" },
  { id: "tercih-yonetimi", title: "5. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?" },
  { id: "tarayici-ayarlari", title: "6. Popüler Tarayıcılarda Çerez Ayarları" },
  { id: "guncellemeler", title: "7. Politika Değişiklikleri ve İletişim" },
];

const COOKIE_LIST = [
  {
    name: "logd_cookie_preferences_v1",
    provider: "LOGD",
    purpose: "Ziyaretçinin çerez onay tercihlerini saklar ve sonraki ziyaretlerde hatırlar.",
    duration: "1 Yıl",
    type: "Zorunlu",
  },
  {
    name: "session_token / csrf",
    provider: "LOGD",
    purpose: "Web sitesi formlarının güvenliğini sağlar ve yetkisiz sahte istekleri önler.",
    duration: "Oturum Boyunca",
    type: "Zorunlu",
  },
  {
    name: "logd_lang_pref",
    provider: "LOGD",
    purpose: "Kullanıcının dil seçimini (TR, EN, DE) tarayıcıda saklar.",
    duration: "6 Ay",
    type: "İşlevsel",
  },
  {
    name: "_ga / _gid / _gat",
    provider: "Google Analytics / Analitik",
    purpose: "Ziyaretçi trafiğini, en çok ziyaret edilen sayfaları anonim olarak raporlar.",
    duration: "2 Yıl / 24 Saat",
    type: "Performans / Analitik",
  },
  {
    name: "event_banner_dismissed",
    provider: "LOGD",
    purpose: "Kapatılan Game Jam veya duyuru bildirim bantlarının tekrar çıkmasını engeller.",
    duration: "30 Gün",
    type: "İşlevsel",
  },
];

function CerezPolitikasiPage() {
  return (
    <LegalLayout
      activeDoc="cerez"
      title="Çerez Politikası"
      subtitle="Liseler Oyun Geliştiricileri Derneği (“LOGD”) olarak web sitemizden en verimli şekilde yararlanabilmeniz ve kullanıcı deneyiminizi geliştirmek için çerezler (cookies) kullanıyoruz."
      lastUpdated="15 Ocak 2025"
      toc={TOC}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* Interactive Manager Callout */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-navy/20 bg-card p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy">
              <Sliders className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground sm:text-base">
                Anlık Çerez Tercihleriniz
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Tercihlerinizi dilediğiniz zaman güncelleyebilir veya izinlerinizi geri
                çekebilirsiniz.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={openCookieSettings}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-navy-deep px-5 text-xs font-bold text-cream shadow-sm hover:opacity-90 sm:text-sm"
          >
            <Cookie className="h-4 w-4" />
            Tercihleri Yönet
          </button>
        </div>

        {/* Section 1 */}
        <section id="cerez-nedir" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            1. Çerez (Cookie) Nedir?
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Çerezler (Cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla
            bilgisayarınıza, tabletinize veya akıllı telefonunuza kaydedilen küçük metin
            dosyalarıdır. Bu dosyalar, web sitesinin sizi hatırlamasını, oturumunuzu sürdürmesini ve
            size daha hızlı, güvenli ve kişiselleştirilmiş bir deneyim sunmasını sağlar.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            Çerezler kişisel cihazınızda herhangi bir zararlı yazılım çalıştırmaz ve
            bilgisayarınızdaki özel dosyalarınıza erişemez.
          </p>
        </section>

        {/* Section 2 */}
        <section id="kullanim-amaci" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            2. Çerezleri Neden Kullanıyoruz?
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD web sitesinde çerezler başlıca şu amaçlarla kullanılmaktadır:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Sitemizin temel fonksiyonlarının güvenli ve kesintisiz çalışmasını sağlamak.",
              "Form gönderimlerinde ve üyelik adımlarında güvenlik doğrulaması (CSRF) yapmak.",
              "Dil tercihinizi (TR, EN, DE) hatırlayarak her defasında yeniden seçmenizi önlemek.",
              "Ziyaretçi sayılarını ve popüler oyun/proje içeriklerini anonim olarak analiz etmek.",
              "Topluluk Game Jam ve atölye duyurularının erişilebilirliğini artırmak.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3.5 text-xs sm:text-[13px]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span className="text-foreground/90">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="cerez-turleri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            3. Sitemizde Kullanılan Çerez Türleri
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  A. Kesinlikle Gerekli (Zorunlu) Çerezler
                </h3>
                <span className="rounded bg-navy/10 px-2 py-0.5 text-[11px] font-semibold text-navy">
                  Zorunlu
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Web sitemizin çalışması için teknik olarak zorunludur. Sayfa geçişleri, güvenli
                alanlara erişim ve çerez onay tercihinizin saklanması bu çerezlerle sağlanır.
                Kapatılması halinde site düzgün çalışmayabilir.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  B. İşlevsel Çerezler
                </h3>
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground">
                  İsteğe Bağlı
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Web sitemizi kişiselleştirmenizi sağlar. Örneğin seçtiğiniz dil veya kapatılan
                duyuru pencereleri bu çerezlerle hatırlanır.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  C. Performans ve Analitik Çerezleri
                </h3>
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground">
                  İsteğe Bağlı
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Ziyaretçilerin web sitemizi nasıl kullandığını (en çok hangi oyunların incelendiği,
                hangi sayfaların açıldığı) anonim olarak ölçer. Bu sayede platformumuzu
                öğrencilerimiz için sürekli geliştirebiliriz.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  D. Etkinlik ve Tanıtım Çerezleri
                </h3>
                <span className="rounded bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground">
                  İsteğe Bağlı
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Öğrencilerimize yönelik yeni Game Jam etkinlikleri, atölyeler ve burs/ödül
                duyurularının ilgili kitlelere ulaşması amacıyla kullanılır.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="cerez-envanteri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            4. Ayrıntılı Çerez Envanteri Tablosu
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Web sitemizde aktif olarak kullanılan temel çerezler aşağıdaki tabloda listelenmiştir:
          </p>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-border bg-secondary/60 font-bold text-foreground">
                  <tr>
                    <th className="p-3 sm:p-4">Çerez Adı</th>
                    <th className="p-3 sm:p-4">Sağlayıcı</th>
                    <th className="p-3 sm:p-4">Amacı</th>
                    <th className="p-3 sm:p-4">Süresi</th>
                    <th className="p-3 sm:p-4">Türü</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70 text-muted-foreground">
                  {COOKIE_LIST.map((c) => (
                    <tr key={c.name} className="hover:bg-secondary/20">
                      <td className="p-3 font-mono font-semibold text-foreground sm:p-4">
                        {c.name}
                      </td>
                      <td className="p-3 sm:p-4">{c.provider}</td>
                      <td className="p-3 sm:p-4">{c.purpose}</td>
                      <td className="p-3 whitespace-nowrap sm:p-4">{c.duration}</td>
                      <td className="p-3 whitespace-nowrap sm:p-4">
                        <span
                          className={`rounded px-2 py-0.5 text-[11px] font-semibold ${
                            c.type === "Zorunlu"
                              ? "bg-navy/10 text-navy"
                              : "bg-secondary text-foreground"
                          }`}
                        >
                          {c.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="tercih-yonetimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            5. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD web sitesini ilk ziyaret ettiğinizde bir çerez bildirim paneli karşılar. Buradan
            yalnızca zorunlu çerezleri kabul edebilir veya tercihlerinizi dilediğiniz gibi
            özelleştirebilirsiniz.
          </p>
          <div className="rounded-xl border border-border bg-secondary/30 p-5">
            <h3 className="text-sm font-bold text-foreground">
              Tercihleri Yenilemek İster misiniz?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Aşağıdaki butona tıklayarak tercih panelini istediğiniz an tekrar açabilir ve daha
              önce verdiğiniz izinleri değiştirebilirsiniz.
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={openCookieSettings}
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-navy-deep px-5 text-xs font-bold text-cream shadow-sm hover:opacity-90 sm:text-sm"
              >
                <Sliders className="h-4 w-4" />
                Çerez Tercihlerini Şimdi Değiştir
              </button>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="tarayici-ayarlari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            6. Popüler Tarayıcılarda Çerez Ayarları
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            İnternet tarayıcınızın ayarlarını değiştirerek de çerezleri tamamen engelleyebilir veya
            mevcut çerezleri silebilirsiniz. Popüler tarayıcıların çerez yönetimi sayfaları:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-foreground sm:text-sm">Google Chrome</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Ayarlar › Gizlilik ve Güvenlik › Üçüncü Taraf Çerezleri adımlarını izleyin.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-foreground sm:text-sm">Mozilla Firefox</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Seçenekler › Gizlilik ve Güvenlik › Çerezler ve Site Verileri sekmesini kullanın.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-foreground sm:text-sm">Apple Safari</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tercihler › Gizlilik › Tüm Çerezleri Engelle seçeneğini yapılandırın.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-xs font-bold text-foreground sm:text-sm">Microsoft Edge</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Ayarlar › Çerezler ve Site İzinleri menüsünden tercihlerinizi belirleyin.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="guncellemeler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            7. Politika Değişiklikleri ve İletişim
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD, yasal düzenlemelere veya sitemizde kullanılan teknolojilere bağlı olarak bu Çerez
            Politikası'nı güncelleme hakkını saklı tutar.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            Çerez politikamıza ilişkin tüm soru ve önerileriniz için{" "}
            <a href="mailto:info@logd.org.tr" className="font-semibold text-navy hover:underline">
              info@logd.org.tr
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
