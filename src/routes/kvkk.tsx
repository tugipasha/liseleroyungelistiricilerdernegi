import { createFileRoute } from "@tanstack/react-router";
import { Scale, CheckCircle2, AlertTriangle, Mail, HelpCircle, FileCheck } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/kvkk")({
  head: () => ({
    meta: [
      { title: "KVKK Aydınlatma Metni | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca Liseler Oyun Geliştiricileri Derneği (LOGD) Aydınlatma Metni ve Veri Sahibi Hakları.",
      },
      { property: "og:title", content: "KVKK Aydınlatma Metni | LOGD" },
      {
        property: "og:description",
        content:
          "6698 sayılı KVKK kapsamında kişisel verilerinizin işlenme amaçları, hukuki sebepleri ve haklarınız hakkında aydınlatma metni.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: KvkkPage,
});

const TOC = [
  { id: "veri-sorumlusu", title: "1. Veri Sorumlusunun Kimliği" },
  { id: "islenen-veriler", title: "2. İşlenen Kişisel Veri Kategorileri" },
  { id: "isleme-amaclari", title: "3. Kişisel Veri İşleme Amaçları" },
  { id: "hukuki-sebepler", title: "4. Toplama Yöntemi ve Hukuki Sebepleri" },
  { id: "veri-aktarimi", title: "5. Kişisel Verilerin Aktarımı" },
  { id: "genc-ve-veli", title: "6. Lise Öğrencileri ve Veli İzni Esasları" },
  { id: "ilgili-kisi-haklari", title: "7. KVKK Madde 11 Kapsamındaki Haklar" },
  { id: "basvuru-usulu", title: "8. Başvuru Usul ve Esasları" },
];

const DATA_CATEGORIES = [
  {
    category: "Kimlik Verileri",
    details:
      "Ad, soyad, doğum tarihi, yaş, T.C. kimlik numarası (yalnızca ödüllü yarışmalarda mevzuat gerektirdiğinde).",
    purpose: "Üye ve katılımcı kimliğinin doğrulanması, sertifika ve ödül teslimi.",
  },
  {
    category: "İletişim Verileri",
    details: "E-posta adresi, cep telefonu numarası, bulunulan il ve ilçe bilgisi.",
    purpose: "Etkinlik duyuruları, takım eşleştirme bildirimleri, mentorluk irtibatı.",
  },
  {
    category: "Eğitim & Okul Verileri",
    details: "Öğrenim görülen lisenin adı, sınıf seviyesi, okul kulübü bilgisi.",
    purpose: "Lise hedef kitle uygunluğu kontrolü, okullar arası oyun geliştirme ligi.",
  },
  {
    category: "Geliştirici & Proje Verileri",
    details: "Oyun motoru bilgisi, GitHub / Itch.io profil bağlantıları, proje dosyaları.",
    purpose: "Game Jam değerlendirmeleri, jüri puanlamaları, teknik mentorluk eşleştirmesi.",
  },
  {
    category: "Görsel ve İşitsel Kayıtlar",
    details: "Fiziki veya çevrim içi atölye/etkinliklerde alınan hatıra fotoğrafları ve kayıtlar.",
    purpose: "Dernek faaliyetlerinin kamuya duyurulması, arşivleme ve topluluk hafızası.",
  },
  {
    category: "İşlem Güvenliği Verileri",
    details: "IP adresleri, oturum bilgileri, çerez kayıtları, web sitesi giriş-çıkış logları.",
    purpose: "Bilgi güvenliği süreçlerinin yürütülmesi ve 5651 sayılı kanun yükümlülükleri.",
  },
];

function KvkkPage() {
  return (
    <LegalLayout
      activeDoc="kvkk"
      title="KVKK Aydınlatma Metni"
      subtitle="6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla Liseler Oyun Geliştiricileri Derneği (“LOGD”) olarak kişisel verilerinizi kanuna uygun şekilde koruyor ve işliyoruz."
      lastUpdated="15 Ocak 2025"
      toc={TOC}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* KVKK Banner Notice */}
        <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
          <div className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Bu aydınlatma metni; 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi ile
            Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ
            hükümlerine uygun olarak hazırlanmıştır.
          </div>
        </div>

        {/* Section 1 */}
        <section id="veri-sorumlusu" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            1. Veri Sorumlusunun Kimliği
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            6698 sayılı Kanun uyarınca kişisel verileriniz; veri sorumlusu sıfatıyla{" "}
            <strong>Liseler Oyun Geliştiricileri Derneği (“LOGD”)</strong> tarafından aşağıda
            açıklanan kapsamda işlenmektedir.
          </p>
          <div className="rounded-xl border border-border bg-secondary/30 p-4 text-xs sm:text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <span className="font-bold text-foreground">Kurum Adı:</span>{" "}
                <span className="text-muted-foreground">
                  Liseler Oyun Geliştiricileri Derneği (LOGD)
                </span>
              </div>
              <div>
                <span className="font-bold text-foreground">Resmi Web Sitesi:</span>{" "}
                <span className="text-muted-foreground">https://logd.org.tr</span>
              </div>
              <div>
                <span className="font-bold text-foreground">KVKK İrtibat E-postası:</span>{" "}
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  kvkk@logd.org.tr
                </a>
              </div>
              <div>
                <span className="font-bold text-foreground">Yetki Alanı:</span>{" "}
                <span className="text-muted-foreground">Türkiye Geneli Lise Faaliyetleri</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="islenen-veriler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            2. İşlenen Kişisel Veri Kategorileri
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Derneğimiz ve dijital platformlarımız kapsamında işlenen başlıca kişisel veri türleri
            şunlardır:
          </p>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-border bg-secondary/60 text-foreground font-bold">
                  <tr>
                    <th className="p-3 sm:p-4">Veri Kategorisi</th>
                    <th className="p-3 sm:p-4">İçerik Örnekleri</th>
                    <th className="p-3 sm:p-4">Temel İşleme Amacı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70 text-muted-foreground">
                  {DATA_CATEGORIES.map((item) => (
                    <tr key={item.category} className="hover:bg-secondary/20">
                      <td className="p-3 sm:p-4 font-semibold text-foreground whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="p-3 sm:p-4">{item.details}</td>
                      <td className="p-3 sm:p-4">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="isleme-amaclari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            3. Kişisel Veri İşleme Amaçları
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Kişisel verileriniz, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme
            şartları dahilinde:
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              Lise öğrencilerinin oyun geliştirme eğitimlerine ve Game Jam yarışmalarına katılımının
              sağlanması,
            </li>
            <li>
              Takım kurma, mentor-öğrenci eşleştirmesi ve Discord/topluluk rollerinin atanması,
            </li>
            <li>Kazanan takımlara başarı sertifikası ve ödüllerinin takdim edilmesi,</li>
            <li>5253 sayılı Dernekler Kanunu ve ilgili dernek mevzuatına uyum sağlanması,</li>
            <li>LOGD web sitesinin siber güvenliğinin sağlanması ve olası ihlallerin önlenmesi,</li>
            <li>
              Topluluk duyurularının (bülten, yeni etkinlik bildirimleri) talep eden üyelere
              iletilmesi
            </li>
          </ul>
          <p className="text-sm text-muted-foreground sm:text-base">
            amaçlarıyla hukuka ve dürüstlük kurallarına uygun olarak işlenir.
          </p>
        </section>

        {/* Section 4 */}
        <section id="hukuki-sebepler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebepleri
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Kişisel verileriniz; web sitemiz üzerindeki formlar, e-posta yazışmaları, Game Jam kayıt
            ekranları, fiziki katılım belgeleri ve çerezler aracılığıyla elektronik ve fiziki
            ortamlarda toplanmaktadır.
          </p>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="font-bold text-foreground">KVKK Madde 5/2-c:</span> Bir sözleşmenin
              kurulması veya ifasıyla doğrudan doğruya ilgili olması (Etkinlik ve üyelik şartları).
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="font-bold text-foreground">KVKK Madde 5/2-ç:</span> Veri sorumlusunun
              hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması (Dernekler mevzuatı,
              5651 sayılı İnternet Kanunu).
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="font-bold text-foreground">KVKK Madde 5/2-f:</span> İlgili kişinin
              temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru
              menfaatleri için veri işlenmesinin zorunlu olması (Topluluk güvenliği, proje
              değerlendirmeleri).
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="font-bold text-foreground">KVKK Madde 5/1:</span> Açık Rıza
              (Fotoğraf/video kayıtlarının tanıtım amaçlı kullanımı veya isteğe bağlı bülten
              gönderimleri).
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="veri-aktarimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            5. Kişisel Verilerin Aktarımı
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Kişisel verileriniz üçüncü şahıslara ticari amaçla devredilmez. Yalnızca aşağıdaki
            hallerde ve Kanun’un 8. ve 9. maddelerine uygun olarak aktarılabilir:
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              <strong>Yarışma Jürileri ve Mentorlar:</strong> Proje değerlendirmesi için takım adı,
              üye adları ve oyun teslimatları.
            </li>
            <li>
              <strong>Yetkili Kamu Kurumları:</strong> Yasal bir talep olması halinde adli veya
              idari merciler ve Dernekler İl Müdürlüğü.
            </li>
            <li>
              <strong>Altyapı Hizmeti Sağlayıcıları:</strong> Web sitesi hosting, e-posta sunucusu
              ve bulut depolama hizmeti sağlayan teknik partnerler (veri işleyen protokolüyle).
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section id="genc-ve-veli" className="scroll-mt-28 space-y-4">
          <div className="rounded-2xl border border-border bg-sand/30 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-navy">
                <FileCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                6. Lise Öğrencileri ve Veli İzni Esasları
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Topluluğumuz lise öğrencilerine yönelik kurulmuştur. Bu kapsamda 18 yaşın altındaki
              öğrencilerimizin veri güvenliği özel olarak gözetilir:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
              <li>
                Ödüllü fiziki yarışmalar, seyahat veya konaklama gerektiren etkinliklerde veli/vasi
                izin belgesi zorunludur.
              </li>
              <li>
                Velilerimiz, diledikleri an{" "}
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  kvkk@logd.org.tr
                </a>{" "}
                üzerinden çocuklarının verilerine ilişkin bilgi alabilir veya silinmesini talep
                edebilir.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 */}
        <section id="ilgili-kisi-haklari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            7. KVKK Madde 11 Kapsamındaki Haklarınız
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            6698 sayılı Kanun’un 11. maddesi uyarınca veri sahipleri (ilgili kişiler):
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Kişisel veri işlenip işlenmediğini öğrenme,",
              "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,",
              "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
              "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
              "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
              "KVKK 7. maddesi uyarınca kişisel verilerin silinmesini veya yok edilmesini isteme,",
              "Düzeltme, silme ve yok edilme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
              "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
              "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.",
            ].map((right, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3.5 text-xs sm:text-[13px]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                <span className="text-foreground/90">{right}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section id="basvuru-usulu" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            8. Başvuru Usul ve Esasları
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Kanun'un 13. maddesinin 1. fıkrası ve Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
            Tebliğ gereğince, yukarıda belirtilen haklarınıza ilişkin taleplerinizi aşağıdaki
            kanallardan iletebilirsiniz:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-navy" />
                <h3 className="text-sm font-bold text-foreground">Elektronik Posta ile Başvuru</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Sistemimizde kayıtlı e-posta adresiniz üzerinden konuya{" "}
                <strong>"KVKK Bilgi Edinme Talebi"</strong> yazarak{" "}
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  kvkk@logd.org.tr
                </a>{" "}
                adresine iletebilirsiniz.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-navy" />
                <h3 className="text-sm font-bold text-foreground">Cevaplama Süresi</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                LOGD, talebin niteliğine göre en kısa sürede ve en geç{" "}
                <strong>30 (otuz) gün</strong> içinde başvurunuzu ücretsiz olarak
                sonuçlandıracaktır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
