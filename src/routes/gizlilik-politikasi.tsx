import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Lock, Users, AlertCircle, HeartHandshake, Eye } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/gizlilik-politikasi")({
  head: () => ({
    meta: [
      { title: "Gizlilik Politikası | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD Gizlilik Politikası: Lise öğrencilerimizin, üyelerimizin ve ziyaretçilerimizin kişisel verilerinin korunması, gizliliği ve güvenliğine dair esaslar.",
      },
      { property: "og:title", content: "Gizlilik Politikası | LOGD" },
      {
        property: "og:description",
        content:
          "Liseler Oyun Geliştiricileri Derneği (LOGD) gizlilik ilkeleri, veri güvenliği standartları ve kullanıcı hakları.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GizlilikPolitikasiPage,
});

const TOC = [
  { id: "genel-bakis", title: "1. Genel Bakış ve Amaç" },
  { id: "toplanan-bilgiler", title: "2. Toplanan Kişisel Bilgiler" },
  { id: "toplama-yontemleri", title: "3. Bilgilerin Toplanma Biçimi" },
  { id: "kullanim-amaclari", title: "4. Bilgilerin Kullanım Amaçları" },
  { id: "genc-guvenligi", title: "5. 18 Yaş Altı Gençlerin Güvenliği" },
  { id: "bilgi-paylasimi", title: "6. Bilgilerin Paylaşımı ve Aktarımı" },
  { id: "veri-guvenligi", title: "7. Veri Güvenliği Standartları" },
  { id: "veri-saklama", title: "8. Veri Saklama Süreleri" },
  { id: "haklariniz", title: "9. Kullanıcı Olarak Haklarınız" },
  { id: "iletisim", title: "10. İletişim ve Değişiklikler" },
];

function GizlilikPolitikasiPage() {
  return (
    <LegalLayout
      activeDoc="gizlilik"
      title="Gizlilik Politikası"
      subtitle="Liseler Oyun Geliştiricileri Derneği (LOGD) olarak topluluk üyelerimizin, lise öğrencilerimizin ve tüm ziyaretçilerimizin dijital gizliliğini ve veri güvenliğini en yüksek öncelikle koruyoruz."
      lastUpdated="15 Ocak 2025"
      toc={TOC}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* Callout Notice */}
        <div className="flex items-start gap-3.5 rounded-2xl border border-navy/20 bg-secondary/40 p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
          <div className="text-xs leading-relaxed text-foreground sm:text-sm">
            <span className="font-bold">Öğrenci Odaklı Güvenlik Taahhüdümüz:</span> LOGD, kâr amacı
            gütmeyen bir gençlik ve öğrenci derneğidir. Üyelerimizin ve lise öğrencilerimizin
            verileri asla ticari amaçla satılmaz, kiralanmaz veya izinsiz üçüncü taraflarla reklam
            hedeflemesi amacıyla paylaşılmaz.
          </div>
        </div>

        {/* Section 1 */}
        <section id="genel-bakis" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            1. Genel Bakış ve Amaç
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Bu Gizlilik Politikası; <strong>Liseler Oyun Geliştiricileri Derneği (“LOGD”)</strong>{" "}
            tarafından işletilen web sitesi (logd.org.tr), topluluk iletişim kanalları, etkinlik
            başvuru formları ve dijital servislerin kullanımı sırasında elde edilen kişisel
            verilerin toplanması, saklanması, işlenmesi ve korunmasına ilişkin esasları düzenler.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD web sitesini ziyaret ederek, dernek üyelik formunu doldurarak veya etkinliklerimize
            (Game Jam, atölye, mentorluk vb.) katılarak bu politikada belirtilen veri işleme
            koşullarını kabul etmiş olursunuz.
          </p>
        </section>

        {/* Section 2 */}
        <section id="toplanan-bilgiler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            2. Toplanan Kişisel Bilgiler
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD bünyesinde yalnızca topluluk faaliyetlerinin yürütülmesi ve etkinliklerin güvenli
            biçimde organize edilmesi için asgari düzeyde gerekli veriler toplanır:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">Kimlik ve İletişim Bilgileri</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Ad, soyad, doğum tarihi / yaş, e-posta adresi, telefon numarası ve ikamet edilen
                il/ilçe bilgisi.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">Eğitim ve Okul Bilgileri</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Öğrenim görülen lisenin adı, sınıf seviyesi ve varsa okul oyun geliştirme kulübü
                temsilciliği bilgileri.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">Geliştirici ve Proje Verileri</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                İlgi duyulan oyun motorları (Unity, Unreal Engine, Godot vb.), GitHub, Itch.io veya
                portfolyo bağlantıları, takım adı ve yarışma proje teslim dosyaları.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">Teknik ve Trafik Kayıtları</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                IP adresi, tarayıcı türü, ziyaret zamanı, referans URL'ler ve oturum güvenliğini
                sağlayan zorunlu çerez verileri.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="toplama-yontemleri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            3. Bilgilerin Toplanma Biçimi
          </h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong>Doğrudan Tarafınızca Sağlanan Veriler:</strong> Sitemizdeki üyelik kayıt
              formları, Game Jam ve atölye başvuru formları veya e-posta yoluyla ilettiğiniz
              bilgiler.
            </li>
            <li>
              <strong>Otomatik Olarak Toplanan Veriler:</strong> Web sitemizi ziyaret ettiğinizde
              tarayıcınız tarafından gönderilen log kayıtları ve çerezler vasıtasıyla toplanan
              anonim analiz verileri.
            </li>
            <li>
              <strong>Etkinlik Süreçlerinde Elde Edilen Veriler:</strong> Çevrim içi veya yüz yüze
              etkinliklerde çekilen genel hatıra fotoğrafları ve canlı yayın kayıtları (önceden
              bilgilendirme yapılmak kaydıyla).
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="kullanim-amaclari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            4. Bilgilerin Kullanım Amaçları
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Toplanan kişisel verileriniz münhasıran aşağıdaki amaçlarla işlenmektedir:
          </p>
          <div className="space-y-2.5">
            {[
              "Lise öğrencilerine yönelik oyun geliştirme eğitimleri, Game Jam yarışmaları ve mentorluk oturumlarını organize etmek.",
              "Üyelik kayıtlarının onaylanması, üye kartı/sertifika hazırlanması ve topluluk Discord/iletişim kanallarına erişim verilmesi.",
              "Yarışmalarda dereceye giren takımların ödüllerinin teslimi ve sponsor takipleri.",
              "Site altyapısının teknik güvenliğini sağlamak, siber saldırıları ve kötüye kullanımları engellemek.",
              "Mevzuat gereği dernekler kütüğü ve resmi kurumlar nezdinde doğabilecek yasal yükümlülükleri yerine getirmek.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-border/80 bg-card p-3 text-xs leading-relaxed text-foreground sm:text-sm"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-cream">
                  {idx + 1}
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="genc-guvenligi" className="scroll-mt-28 space-y-4">
          <div className="rounded-2xl border border-border bg-sand/30 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-navy">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                5. 18 Yaş Altı Gençlerin Güvenliği ve Veli Hakları
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Topluluğumuzun temel kitlesini lise çağındaki öğrenciler oluşturmaktadır. Bu nedenle
              çocukların ve 18 yaşından küçük gençlerin dijital ortamda korunması temel
              prensibimizdir:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
              <li>
                Öğrencilerimizden asla gereksiz, özel hayatı ihlal edebilecek veya hassas nitelikli
                biyometrik/sağlık verisi talep edilmez.
              </li>
              <li>
                Fiziki etkinliklere katılım veya ödüllü organizasyonlarda, mevzuat uyarınca veli /
                vasi izin belgesi ve bilgilendirmesi temin edilir.
              </li>
              <li>
                Velilerimiz, çocuklarının LOGD bünyesinde işlenen verilerini diledikleri zaman
                inceleme, düzeltme veya kaydının derhal silinmesini talep etme hakkına sahiptir.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="bilgi-paylasimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            6. Bilgilerin Paylaşımı ve Aktarımı
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD, kişisel verilerin gizliliğini temel bir ilke kabul eder. Bilgileriniz yalnızca
            aşağıdaki sınırlı durumlarda paylaşılabilir:
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong>Etkinlik ve Jüri Paylaşımları:</strong> Game Jam'e sunulan oyun projeleri,
              ekip üyelerinin adları ve rumuzları yarışma jürisi ve toplulukla şeffaf değerlendirme
              amacıyla paylaşılır.
            </li>
            <li>
              <strong>Hukuki Zorunluluklar:</strong> Mahkemeler, kolluk kuvvetleri veya Dernekler
              Müdürlüğü gibi yetkili kamu kurum ve kuruluşlarından gelen yasal talepler
              doğrultusunda.
            </li>
            <li>
              <strong>Teknik Altyapı Sağlayıcıları:</strong> Web sitemizin barındırıldığı güvenli
              bulut sunucuları (örneğin sunucu barındırma, e-posta iletim altyapısı) ile veri
              işleyen sıfatıyla ve gizlilik sözleşmeleri kapsamında.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="veri-guvenligi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            7. Veri Güvenliği Standartları
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD, kişisel verilerin yetkisiz erişime, kayba, ifşaya veya değiştirilmesine karşı
            korunması için sektör standardı teknik ve idari güvenlik önlemlerini uygular:
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-start rounded-xl border border-border bg-card p-4">
              <Lock className="h-5 w-5 text-navy" />
              <h3 className="mt-3 text-xs font-bold text-foreground sm:text-sm">
                SSL / TLS Şifreleme
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tüm veri aktarımları 256-bit modern SSL şifreleme protokolleri ile güvence altına
                alınır.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-xl border border-border bg-card p-4">
              <Users className="h-5 w-5 text-navy" />
              <h3 className="mt-3 text-xs font-bold text-foreground sm:text-sm">
                Erişim Kısıtlaması
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Üye verilerine yalnızca görev tanımı gereği yetkilendirilmiş dernek yöneticileri
                erişebilir.
              </p>
            </div>
            <div className="flex flex-col items-start rounded-xl border border-border bg-card p-4">
              <Eye className="h-5 w-5 text-navy" />
              <h3 className="mt-3 text-xs font-bold text-foreground sm:text-sm">
                Düzenli Güvenlik Denetimi
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Sistem açıkları, yazılım güncellemeleri ve veri tabanı güvenliği periyodik olarak
                kontrol edilir.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="veri-saklama" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            8. Veri Saklama Süreleri
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca veya ilgili
            kanunlarda (Dernekler Kanunu, Türk Borçlar Kanunu, KVKK vb.) öngörülen yasal saklama
            süreleri boyunca muhafaza edilir. Amacın sona ermesi veya saklama süresinin dolması
            halinde verileriniz güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.
          </p>
        </section>

        {/* Section 9 */}
        <section id="haklariniz" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            9. Kullanıcı Olarak Haklarınız
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Gizlilik Politikamız ve 6698 sayılı KVKK kapsamında her zaman:
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Hakkınızda hangi verilerin işlendiğini öğrenme ve bilgi talep etme,</li>
            <li>Eksik veya yanlış işlenmiş bilgilerin düzeltilmesini isteme,</li>
            <li>
              Verilerinizin sistemlerimizden tamamen silinmesini veya anonimleştirilmesini talep
              etme,
            </li>
            <li>Rızaya dayalı veri işleme süreçlerinde onayınızı her zaman geri çekme</li>
          </ul>
          <p className="text-sm text-muted-foreground sm:text-base">
            hakkına sahipsiniz. Ayrıntılı haklar için lütfen{" "}
            <a href="/kvkk" className="font-semibold text-foreground underline hover:opacity-80">
              KVKK Aydınlatma Metni
            </a>
            'mizi inceleyiniz.
          </p>
        </section>

        {/* Section 10 */}
        <section id="iletisim" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            10. İletişim ve Politika Değişiklikleri
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            LOGD, yasal mevzuattaki değişiklikler veya dernek faaliyetlerindeki yenilikler nedeniyle
            bu Gizlilik Politikası'nı zaman zaman güncelleyebilir. Güncellenen metin bu sayfada son
            değişiklik tarihi belirtilerek yayınlanır.
          </p>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold text-foreground">Gizlilik İrtibatı:</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Gizlilik politikamız veya kişisel verilerinizle ilgili her türlü soru, görüş ve talep
              için:
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium sm:text-sm">
              <span>
                E-posta:{" "}
                <a
                  href="mailto:info@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  info@logd.org.tr
                </a>
              </span>
              <span>
                KVKK Başvuruları:{" "}
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  kvkk@logd.org.tr
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
