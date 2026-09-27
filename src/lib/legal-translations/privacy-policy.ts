import { Locale } from "@/lib/i18n/types";
import { LegalContent } from "./cookie-policy";

export interface PrivacyPageContent extends LegalContent {
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s2Title: string;
  s2P: string;
  principles: { title: string; desc: string }[];
  s3Title: string;
  s3P: string;
  dataItems: { title: string; desc: string }[];
  s4Title: string;
  s4P: string;
  purposes: string[];
  s5Title: string;
  s5P1: string;
  s5Items: string[];
  s6Title: string;
  s6P: string;
  sharingItems: { title: string; desc: string }[];
  s7Title: string;
  s7P: string;
  securityItems: { title: string; desc: string }[];
  s8Title: string;
  s8P: string;
  s9Title: string;
  s9P: string;
  rightsItems: string[];
  s9LinkText: string;
  s9Suffix: string;
  s10Title: string;
  s10P: string;
  contactBoxTitle: string;
  contactBoxDesc: string;
}

export const privacyPageTranslations: Record<Locale, PrivacyPageContent> = {
  tr: {
    title: "Gizlilik Politikası",
    subtitle:
      "Liseler Oyun Geliştiricileri Derneği (“LOGD”) olarak, topluluğumuza üye olan gençlerin, velilerin ve sitemizi ziyaret eden tüm kullanıcıların kişisel verilerinin güvenliğine en üst düzeyde önem veriyoruz.",
    lastUpdated: "15 Ocak 2025",
    metaTitle: "Gizlilik Politikası | LOGD - Liseler Oyun Geliştiricileri Derneği",
    metaDescription:
      "LOGD Gizlilik Politikası: Kişisel verilerinizin nasıl toplandığı, işlendiği, korunduğu ve haklarınız hakkında detaylı bilgilendirme.",
    ogTitle: "Gizlilik Politikası | LOGD",
    ogDescription:
      "Liseler Oyun Geliştiricileri Derneği Gizlilik Politikası ve Kişisel Verilerin Korunması ilkeleri.",
    toc: [
      { id: "genel-bakis", title: "1. Genel Bakış ve Amaç" },
      { id: "temel-ilkeler", title: "2. Veri İşlemedeki Temel İlkelerimiz" },
      { id: "toplanan-veriler", title: "3. Toplanan Kişisel Veriler" },
      { id: "kullanim-amaclari", title: "4. Bilgilerin Kullanım Amaçları" },
      { id: "genc-guvenligi", title: "5. 18 Yaş Altı Gençlerin Güvenliği ve Veli Hakları" },
      { id: "bilgi-paylasimi", title: "6. Bilgilerin Paylaşımı ve Aktarımı" },
      { id: "veri-guvenligi", title: "7. Veri Güvenliği Standartları" },
      { id: "veri-saklama", title: "8. Veri Saklama Süreleri" },
      { id: "haklariniz", title: "9. Kullanıcı Olarak Haklarınız" },
      { id: "iletisim", title: "10. İletişim ve Politika Değişiklikleri" },
    ],
    s1Title: "1. Genel Bakış ve Amaç",
    s1P1: "Bu Gizlilik Politikası; Türkiye genelinde lise öğrencilerini teknoloji, oyun geliştirme, kodlama, 3D tasarım ve dijital sanat alanlarında destekleyen Liseler Oyun Geliştiricileri Derneği'nin (LOGD) internet sitesini (logd.org.tr), etkinlik kayıt sistemlerini ve topluluk iletişim mecralarını kapsar.",
    s1P2: "LOGD, kâr amacı gütmeyen bağımsız bir sivil toplum kuruluşu olarak faaliyetlerini şeffaflık, güvenilirlik ve katılımcı haklarına saygı çerçevesinde yürütür. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) başta olmak üzere ilgili yasal mevzuata uygun şekilde hazırlanmıştır.",
    s2Title: "2. Veri İşlemedeki Temel İlkelerimiz",
    s2P: "Kişisel verilerinizin işlenmesinde aşağıdaki evrensel ve kanuni ilkelere tavizsiz şekilde bağlıyız:",
    principles: [
      {
        title: "Hukuka ve Dürüstlük Kuralına Uygunluk",
        desc: "Tüm veri süreçlerimiz yürürlükteki kanunlara ve etik ilkelerine tam uyumlu biçimde şeffafça yürütülür.",
      },
      {
        title: "Belirli, Açık ve Meşru Amaçlar",
        desc: "Veriler sadece topluluk faaliyetleri, Game Jam organizasyonları ve eğitimler için belirlenen açık amaçlarla toplanır.",
      },
      {
        title: "Sınırlı ve Ölçülü İşleme",
        desc: "Yalnızca gerekli olan asgari veri talep edilir; gereksiz veya orantısız bilgi toplanmaz.",
      },
      {
        title: "Doğruluk ve Güncellik",
        desc: "Toplanan verilerin gerçeğe uygun kalması sağlanır ve üye talepleriyle güncellenir.",
      },
      {
        title: "Gerektiği Kadar Muhafaza",
        desc: "Yasal saklama süresi sona eren veya amacı tamamlanan kayıtlar kalıcı olarak silinir.",
      },
    ],
    s3Title: "3. Toplanan Kişisel Veriler",
    s3P: "LOGD ile etkileşim türünüze (üye olma, Game Jam yarışmasına katılma, bültene abone olma veya iletişim formu gönderme) bağlı olarak aşağıdaki veriler toplanabilir:",
    dataItems: [
      {
        title: "Kimlik Bilgileri",
        desc: "Ad, soyad, doğum yılı, T.C. kimlik no (yalnızca dernek asil üyelik başvuruları ve resmi dernekler kütüğü bildirimleri için yasal zorunluluk halinde talep edilir; genel etkinliklerde talep edilmez).",
      },
      {
        title: "İletişim Bilgileri",
        desc: "E-posta adresi, telefon numarası, şehir/ilçe bilgisi, topluluk Discord kullanıcı adı.",
      },
      {
        title: "Eğitim ve Okul Bilgileri",
        desc: "Kayıtlı olunan lise adı, sınıf derecesi, ilgi duyulan oyun geliştirme disiplini (Yazılım, Tasarım, Ses, Senaryo vb.).",
      },
      {
        title: "Dijital Kullanım Verileri",
        desc: "Siteye erişim sağlanan IP adresi, tarayıcı türü, ziyaret edilen sayfalar, oturum süreleri ve çerez kayıtları.",
      },
      {
        title: "Etkinlik & Görsel Kayıtlar",
        desc: "Fiziki veya çevrim içi Game Jam, atölye ve ödül törenlerinde çekilen toplu fotoğraflar veya video kayıtları (önceden bilgilendirme ve rıza şartıyla).",
      },
    ],
    s4Title: "4. Bilgilerin Kullanım Amaçları",
    s4P: "Toplanan kişisel verileriniz münhasıran aşağıdaki amaçlarla işlenmektedir:",
    purposes: [
      "Lise öğrencilerine yönelik oyun geliştirme eğitimleri, Game Jam yarışmaları ve mentorluk oturumlarını organize etmek.",
      "Üyelik kayıtlarının onaylanması, üye kartı/sertifika hazırlanması ve topluluk Discord/iletişim kanallarına erişim verilmesi.",
      "Yarışmalarda dereceye giren takımların ödüllerinin teslimi ve sponsor takipleri.",
      "Site altyapısının teknik güvenliğini sağlamak, siber saldırıları ve kötüye kullanımları engellemek.",
      "Mevzuat gereği dernekler kütüğü ve resmi kurumlar nezdinde doğabilecek yasal yükümlülükleri yerine getirmek.",
    ],
    s5Title: "5. 18 Yaş Altı Gençlerin Güvenliği ve Veli Hakları",
    s5P1: "Topluluğumuzun temel kitlesini lise çağındaki öğrenciler oluşturmaktadır. Bu nedenle çocukların ve 18 yaşından küçük gençlerin dijital ortamda korunması temel prensibimizdir:",
    s5Items: [
      "Öğrencilerimizden asla gereksiz, özel hayatı ihlal edebilecek veya hassas nitelikli biyometrik/sağlık verisi talep edilmez.",
      "Fiziki etkinliklere katılım veya ödüllü organizasyonlarda, mevzuat uyarınca veli / vasi izin belgesi ve bilgilendirmesi temin edilir.",
      "Velilerimiz, çocuklarının LOGD bünyesinde işlenen verilerini diledikleri zaman inceleme, düzeltme veya kaydının derhal silinmesini talep etme hakkına sahiptir.",
    ],
    s6Title: "6. Bilgilerin Paylaşımı ve Aktarımı",
    s6P: "LOGD, kişisel verilerin gizliliğini temel bir ilke kabul eder. Bilgileriniz yalnızca aşağıdaki sınırlı durumlarda paylaşılabilir:",
    sharingItems: [
      {
        title: "Etkinlik ve Jüri Paylaşımları",
        desc: "Game Jam'e sunulan oyun projeleri, ekip üyelerinin adları ve rumuzları yarışma jürisi ve toplulukla şeffaf değerlendirme amacıyla paylaşılır.",
      },
      {
        title: "Hukuki Zorunluluklar",
        desc: "Mahkemeler, kolluk kuvvetleri veya Dernekler Müdürlüğü gibi yetkili kamu kurum ve kuruluşlarından gelen yasal talepler doğrultusunda.",
      },
      {
        title: "Teknik Altyapı Sağlayıcıları",
        desc: "Web sitemizin barındırıldığı güvenli bulut sunucuları (örneğin sunucu barındırma, e-posta iletim altyapısı) ile veri işleyen sıfatıyla ve gizlilik sözleşmeleri kapsamında.",
      },
    ],
    s7Title: "7. Veri Güvenliği Standartları",
    s7P: "LOGD, kişisel verilerin yetkisiz erişime, kayba, ifşaya veya değiştirilmesine karşı korunması için sektör standardı teknik ve idari güvenlik önlemlerini uygular:",
    securityItems: [
      {
        title: "SSL / TLS Şifreleme",
        desc: "Tüm veri aktarımları 256-bit modern SSL şifreleme protokolleri ile güvence altına alınır.",
      },
      {
        title: "Erişim Kısıtlaması",
        desc: "Üye verilerine yalnızca görev tanımı gereği yetkilendirilmiş dernek yöneticileri erişebilir.",
      },
      {
        title: "Düzenli Güvenlik Denetimi",
        desc: "Sistem açıkları, yazılım güncellemeleri ve veri tabanı güvenliği periyodik olarak kontrol edilir.",
      },
    ],
    s8Title: "8. Veri Saklama Süreleri",
    s8P: "Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca veya ilgili kanunlarda (Dernekler Kanunu, Türk Borçlar Kanunu, KVKK vb.) öngörülen yasal saklama süreleri boyunca muhafaza edilir. Amacın sona ermesi veya saklama süresinin dolması halinde verileriniz güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.",
    s9Title: "9. Kullanıcı Olarak Haklarınız",
    s9P: "Gizlilik Politikamız ve 6698 sayılı KVKK kapsamında her zaman:",
    rightsItems: [
      "Hakkınızda hangi verilerin işlendiğini öğrenme ve bilgi talep etme,",
      "Eksik veya yanlış işlenmiş bilgilerin düzeltilmesini isteme,",
      "Verilerinizin sistemlerimizden tamamen silinmesini veya anonimleştirilmesini talep etme,",
      "Rızaya dayalı veri işleme süreçlerinde onayınızı her zaman geri çekme",
    ],
    s9LinkText: "KVKK Aydınlatma Metni",
    s9Suffix: "'mizi inceleyiniz.",
    s10Title: "10. İletişim ve Politika Değişiklikleri",
    s10P: "LOGD, yasal mevzuattaki değişiklikler veya dernek faaliyetlerindeki yenilikler nedeniyle bu Gizlilik Politikası'nı zaman zaman güncelleyebilir. Güncellenen metin bu sayfada son değişiklik tarihi belirtilerek yayınlanır.",
    contactBoxTitle: "Gizlilik İrtibatı:",
    contactBoxDesc:
      "Gizlilik politikamız veya kişisel verilerinizle ilgili her türlü soru, görüş ve talep için:",
  },
  en: {
    title: "Privacy Policy",
    subtitle:
      "As the High School Game Developers Association (“LOGD”), we place the highest priority on the security and confidentiality of personal data belonging to students, guardians, and visitors.",
    lastUpdated: "January 15, 2025",
    metaTitle: "Privacy Policy | LOGD - High School Game Developers Association",
    metaDescription:
      "LOGD Privacy Policy: Detailed information on how personal data is collected, processed, safeguarded, and the rights you possess.",
    ogTitle: "Privacy Policy | LOGD",
    ogDescription:
      "High School Game Developers Association Privacy Policy and Personal Data Protection Principles.",
    toc: [
      { id: "genel-bakis", title: "1. Overview & Purpose" },
      { id: "temel-ilkeler", title: "2. Core Data Processing Principles" },
      { id: "toplanan-veriler", title: "3. Collected Personal Data" },
      { id: "kullanim-amaclari", title: "4. Purposes of Processing" },
      { id: "genc-guvenligi", title: "5. Youth Safety & Guardian Rights" },
      { id: "bilgi-paylasimi", title: "6. Data Sharing & Disclosure" },
      { id: "veri-guvenligi", title: "7. Security Standards" },
      { id: "veri-saklama", title: "8. Data Retention Periods" },
      { id: "haklariniz", title: "9. Your Rights as a User" },
      { id: "iletisim", title: "10. Contact & Policy Amendments" },
    ],
    s1Title: "1. Overview & Purpose",
    s1P1: "This Privacy Policy applies to the official website (logd.org.tr), competition registration portals, and community communication channels operated by the High School Game Developers Association (LOGD), an organization fostering high school youth across Türkiye in game development, coding, 3D modeling, and digital arts.",
    s1P2: "As an independent, non-profit non-governmental organization, LOGD operates with strict transparency, integrity, and respect for individual privacy. This document adheres to the Turkish Law on the Protection of Personal Data No. 6698 (KVKK) and international data protection standards.",
    s2Title: "2. Core Data Processing Principles",
    s2P: "We strictly uphold the following statutory and ethical principles in all data processing activities:",
    principles: [
      {
        title: "Lawfulness and Fairness",
        desc: "All processing activities are carried out lawfully, ethically, and transparently.",
      },
      {
        title: "Explicit and Legitimate Purposes",
        desc: "Data is gathered solely for clearly specified community activities, educational workshops, and game jams.",
      },
      {
        title: "Data Minimization",
        desc: "Only the strictly necessary minimum amount of personal data is collected.",
      },
      {
        title: "Accuracy and Up-to-Date State",
        desc: "Records are maintained accurately and updated promptly upon user request.",
      },
      {
        title: "Storage Limitation",
        desc: "Information is securely purged once statutory retention obligations expire or purposes conclude.",
      },
    ],
    s3Title: "3. Collected Personal Data",
    s3P: "Depending on your interaction with LOGD (joining the community, registering for a Game Jam, subscribing to announcements, or submitting an inquiry), the following data may be processed:",
    dataItems: [
      {
        title: "Identification Details",
        desc: "Full name, birth year, and national identification number (strictly when required by non-profit registry laws for official voting members; never requested for general student event registrations).",
      },
      {
        title: "Contact Details",
        desc: "Email address, phone number, city/district, and Discord community username.",
      },
      {
        title: "Educational Details",
        desc: "Current high school name, grade level, and primary game development discipline (Programming, Art, Audio, Narrative, etc.).",
      },
      {
        title: "Technical Browsing Data",
        desc: "Connecting IP address, browser type, viewed pages, session duration, and cookie identifiers.",
      },
      {
        title: "Event Media Records",
        desc: "Photographs or video footage captured during in-person or live virtual workshops, game jams, and award ceremonies (subject to prior notice and consent).",
      },
    ],
    s4Title: "4. Purposes of Processing",
    s4P: "Collected personal data is exclusively utilized for the following lawful purposes:",
    purposes: [
      "Organizing game development training, student Game Jams, and mentor matchmaking sessions.",
      "Processing community registrations, issuing certificates of participation, and managing access to official Discord channels.",
      "Facilitating awards delivery and sponsor follow-ups for winning student teams.",
      "Maintaining website security, stopping cyber threats, and preventing system misuse.",
      "Complying with non-profit association regulations and legal obligations before governmental authorities.",
    ],
    s5Title: "5. Youth Safety & Guardian Rights",
    s5P1: "Our community primarily serves high school youth. Protecting minors and students under the age of 18 in digital spaces is our paramount principle:",
    s5Items: [
      "We never request sensitive, biometric, or private health data from students.",
      "Participation in physical events or monetary award competitions requires written guardian consent and notification.",
      "Parents and guardians hold the perpetual right to inspect, correct, or request the immediate deletion of their child's records.",
    ],
    s6Title: "6. Data Sharing & Disclosure",
    s6P: "LOGD treats your personal data with absolute confidentiality. Information may only be shared under the following limited conditions:",
    sharingItems: [
      {
        title: "Event & Jury Evaluation",
        desc: "Game project submissions, team names, and student handles are shared with competition juries and the community for transparent evaluations.",
      },
      {
        title: "Legal & Regulatory Compliance",
        desc: "In response to lawful orders and statutory requests from judicial bodies, law enforcement, or the Directorate of Associations.",
      },
      {
        title: "Technical Infrastructure Providers",
        desc: "Cloud hosting and secure email transmission services acting as data processors under binding confidentiality agreements.",
      },
    ],
    s7Title: "7. Security Standards",
    s7P: "LOGD employs industry-standard organizational and technical safeguards to prevent unauthorized access, loss, or alteration of personal data:",
    securityItems: [
      {
        title: "SSL / TLS Encryption",
        desc: "All data transfers are encrypted with modern 256-bit SSL protocols.",
      },
      {
        title: "Access Restrictions",
        desc: "Member data is restricted to authorized association officials on a strict need-to-know basis.",
      },
      {
        title: "Regular Security Audits",
        desc: "System configurations, dependency patches, and database firewalls are periodically audited.",
      },
    ],
    s8Title: "8. Data Retention Periods",
    s8P: "Personal data is retained only for the duration required to achieve its processing purpose, or as dictated by applicable statutes (Law on Associations, Code of Obligations, KVKK). Once expired, records are securely erased, destroyed, or anonymized.",
    s9Title: "9. Your Rights as a User",
    s9P: "Pursuant to our Privacy Policy and relevant data protection laws, you are entitled to:",
    rightsItems: [
      "Inquire whether your personal data is being processed and obtain details,",
      "Request correction of inaccurate or incomplete information,",
      "Request permanent erasure or anonymization of your data from our systems,",
      "Revoke consent at any time for consent-based processing activities.",
    ],
    s9LinkText: "Data Protection Notice (KVKK)",
    s9Suffix: " for comprehensive legal rights.",
    s10Title: "10. Contact & Policy Amendments",
    s10P: "LOGD may update this Privacy Policy from time to time in response to statutory amendments or organizational developments. Revised policies will be published on this page with an updated timestamp.",
    contactBoxTitle: "Privacy Inquiries:",
    contactBoxDesc:
      "For any questions, requests, or notices regarding our privacy practices and personal data:",
  },
  de: {
    title: "Datenschutzerklärung",
    subtitle:
      "Als Verein der Oberschul-Spieleentwickler („LOGD“) messen wir dem Schutz der personenbezogenen Daten von Schülern, Erziehungsberechtigten und Besuchern höchste Priorität bei.",
    lastUpdated: "15. Januar 2025",
    metaTitle: "Datenschutzerklärung | LOGD - Oberschul-Spieleentwickler",
    metaDescription:
      "LOGD Datenschutzerklärung: Umfassende Informationen über Erhebung, Verarbeitung, Schutz und Ihre Rechte bezüglich personenbezogener Daten.",
    ogTitle: "Datenschutzerklärung | LOGD",
    ogDescription:
      "Grundsätze des Vereins der Oberschul-Spieleentwickler zum Datenschutz und zur Wahrung der Privatsphäre.",
    toc: [
      { id: "genel-bakis", title: "1. Überblick und Zweck" },
      { id: "temel-ilkeler", title: "2. Grundsätze der Datenverarbeitung" },
      { id: "toplanan-veriler", title: "3. Erfasste Datenkategorien" },
      { id: "kullanim-amaclari", title: "4. Verarbeitungszwecke" },
      { id: "genc-guvenligi", title: "5. Jugendschutz und Elternrechte" },
      { id: "bilgi-paylasimi", title: "6. Weitergabe und Übermittlung" },
      { id: "veri-guvenligi", title: "7. Datensicherheitsstandards" },
      { id: "veri-saklama", title: "8. Speicherdauer" },
      { id: "haklariniz", title: "9. Ihre Rechte als Nutzer" },
      { id: "iletisim", title: "10. Kontakt und Änderungen" },
    ],
    s1Title: "1. Überblick und Zweck",
    s1P1: "Diese Datenschutzerklärung gilt für die offizielle Website (logd.org.tr), Anmeldeportale für Wettbewerbe und Kommunikationskanäle des Vereins der Oberschul-Spieleentwickler (LOGD), der Jugendliche in ganz der Türkei in Spieleentwicklung, Coding, 3D-Design und digitaler Kunst fördert.",
    s1P2: "Als gemeinnützige und unabhängige Organisation arbeitet LOGD nach höchsten Standards der Transparenz und Vertraulichkeit im Einklang mit den geltenden Datenschutzgesetzen (einschließlich KVKK).",
    s2Title: "2. Grundsätze der Datenverarbeitung",
    s2P: "Wir verpflichten uns zu folgenden Grundsätzen bei jeder Datenverarbeitung:",
    principles: [
      {
        title: "Rechtmäßigkeit und Transparenz",
        desc: "Jede Verarbeitung erfolgt transparent und auf Grundlage geltender Vorschriften.",
      },
      {
        title: "Zweckbindung",
        desc: "Daten werden ausschließlich für Bildungsangebote, Community-Events und Game Jams erhoben.",
      },
      {
        title: "Datenminimierung",
        desc: "Es werden nur Daten erhoben, die für den jeweiligen Zweck zwingend erforderlich sind.",
      },
      {
        title: "Richtigkeit der Daten",
        desc: "Daten werden aktuell gehalten und bei Mitteilung umgehend berichtigt.",
      },
      {
        title: "Speicherbegrenzung",
        desc: "Daten werden nach Wegfall des Zwecks oder Ablauf der gesetzlichen Aufbewahrungsfrist gelöscht.",
      },
    ],
    s3Title: "3. Erfasste Datenkategorien",
    s3P: "Je nach Art Ihrer Interaktion mit LOGD können folgende Daten erfasst werden:",
    dataItems: [
      {
        title: "Identifikationsdaten",
        desc: "Vor- und Nachname, Geburtsjahr (Ausweisnummern werden nur bei formalen Vereinsmitgliedschaften gemäß Vereinsgesetz erhoben, niemals für allgemeine Schüler-Events).",
      },
      {
        title: "Kontaktdaten",
        desc: "E-Mail-Adresse, Telefonnummer, Wohnort/Region, Discord-Benutzername.",
      },
      {
        title: "Schul- und Bildungsdaten",
        desc: "Name der Oberschule, Klassenstufe und Interessensbereich in der Spieleentwicklung.",
      },
      {
        title: "Technische Nutzungsdaten",
        desc: "IP-Adresse, Browsertyp, aufgerufene Seiten, Verweildauer und Cookie-Einträge.",
      },
      {
        title: "Veranstaltungsmedien",
        desc: "Foto- und Videoaufnahmen bei Workshops, Game Jams und Preisverleihungen (nur nach vorheriger Information und Einwilligung).",
      },
    ],
    s4Title: "4. Verarbeitungszwecke",
    s4P: "Die erhobenen personenbezogenen Daten dienen ausschließlich den folgenden Zwecken:",
    purposes: [
      "Organisation von Spieleentwicklungsworkshops, Schüler-Game-Jams und Mentoring-Sessions.",
      "Bearbeitung von Mitgliedsanträgen, Ausstellung von Zertifikaten und Vergabe von Discord-Rollen.",
      "Preisübergabe und Betreuung von Siegerteams.",
      "Sicherstellung der Serversicherheit und Abwehr unbefugter Zugriffe.",
      "Erfüllung gesetzlicher Vorgaben nach dem Vereinsrecht.",
    ],
    s5Title: "5. Jugendschutz und Elternrechte",
    s5P1: "Unsere Gemeinschaft richtet sich an Jugendliche im Oberschulalter. Der Schutz Minderjähriger im digitalen Raum steht für uns an oberster Stelle:",
    s5Items: [
      "Von Schülern werden niemals unnötige oder sensible Gesundheits-/Biometriedaten erfragt.",
      "Für Präsenzveranstaltungen oder Wettbewerbe mit Preisgeldern ist eine Einverständniserklärung der Erziehungsberechtigten erforderlich.",
      "Eltern haben jederzeit das Recht, Auskunft über die Daten ihres Kindes zu verlangen oder deren sofortige Löschung zu beantragen.",
    ],
    s6Title: "6. Weitergabe und Übermittlung",
    s6P: "LOGD behandelt persönliche Daten streng vertraulich. Eine Weitergabe erfolgt ausschließlich in folgenden Fällen:",
    sharingItems: [
      {
        title: "Wettbewerbsjury & Mentoren",
        desc: "Projektabgaben und Nicknames werden zur Bewertung an die Fachjury übermittelt.",
      },
      {
        title: "Gesetzliche Verpflichtungen",
        desc: "Auskunftsersuchen von Gerichten oder Behörden im Rahmen der gesetzlichen Pflichten.",
      },
      {
        title: "Technische Dienstleister",
        desc: "Sichere Hosting- und E-Mail-Dienstleister als Auftragsverarbeiter unter Vertraulichkeitsvereinbarungen.",
      },
    ],
    s7Title: "7. Datensicherheitsstandards",
    s7P: "LOGD setzt branchenübliche Sicherheitsmaßnahmen zum Schutz vor Datenverlust oder unberechtigtem Zugriff ein:",
    securityItems: [
      {
        title: "SSL/TLS-Verschlüsselung",
        desc: "Alle Datenübertragungen erfolgen verschlüsselt nach aktuellen Standards.",
      },
      {
        title: "Zugriffsbeschränkungen",
        desc: "Zugang zu Daten haben nur autorisierte Vereinsbeauftragte.",
      },
      {
        title: "Regelmäßige Sicherheitsprüfungen",
        desc: "Systeme und Datenbanken werden kontinuierlich gewartet und überprüft.",
      },
    ],
    s8Title: "8. Speicherdauer",
    s8P: "Daten werden nur so lange gespeichert, wie es für den Zweck erforderlich ist oder gesetzliche Vorschriften verlangen. Anschließend werden sie sicher gelöscht oder anonymisiert.",
    s9Title: "9. Ihre Rechte als Nutzer",
    s9P: "Nach den geltenden Datenschutzgesetzen haben Sie folgende Rechte:",
    rightsItems: [
      "Auskunft über die zu Ihrer Person verarbeiteten Daten zu verlangen,",
      "Berichtigung unrichtiger Daten zu fordern,",
      "Löschung oder Sperrung Ihrer Daten zu beantragen,",
      "Erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft zu widerrufen.",
    ],
    s9LinkText: "Datenschutz-Aufklärung (KVKK)",
    s9Suffix: " für weitere juristische Details.",
    s10Title: "10. Kontakt und Änderungen",
    s10P: "LOGD behält sich Anpassungen dieser Datenschutzerklärung vor. Aktualisierte Fassungen werden hier unter Angabe des Datums veröffentlicht.",
    contactBoxTitle: "Datenschutz-Kontakt:",
    contactBoxDesc:
      "Bei allen Fragen, Auskunftsersuchen oder Anträgen zum Datenschutz erreichen Sie uns unter:",
  },
};
