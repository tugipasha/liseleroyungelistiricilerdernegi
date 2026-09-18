import { Locale } from "@/lib/i18n/types";
import { LegalContent } from "./cookie-policy";

export interface KvkkPageContent extends LegalContent {
  s1Title: string;
  s1P: string;
  controllerBoxTitle: string;
  controllerLabels: {
    unvan: string;
    unvanVal: string;
    adres: string;
    adresVal: string;
    eposta: string;
    epostaVal: string;
    web: string;
    webVal: string;
  };
  s2Title: string;
  s2P: string;
  categories: { name: string; items: string }[];
  s3Title: string;
  s3P: string;
  purposes: string[];
  s4Title: string;
  s4P: string;
  legalBases: { title: string; desc: string }[];
  s5Title: string;
  s5P: string;
  transfers: { title: string; desc: string }[];
  s6Title: string;
  s6P: string;
  methods: string[];
  s7Title: string;
  s7P: string;
  rights: string[];
  s8Title: string;
  s8P1: string;
  s8P2: string;
  applySteps: {
    writtenTitle: string;
    writtenDesc: string;
    emailTitle: string;
    emailDesc: string;
  };
  s8Footer: string;
}

export const kvkkPageTranslations: Record<Locale, KvkkPageContent> = {
  tr: {
    title: "KVKK Aydınlatma Metni",
    subtitle:
      "6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) Kapsamında Liseler Oyun Geliştiricileri Derneği (“LOGD”) Veri Sorumlusu Aydınlatma Metni.",
    lastUpdated: "15 Ocak 2025",
    metaTitle: "KVKK Aydınlatma Metni | LOGD - Liseler Oyun Geliştiricileri Derneği",
    metaDescription:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca veri sorumlusu sıfatıyla LOGD Aydınlatma Metni.",
    ogTitle: "KVKK Aydınlatma Metni | LOGD",
    ogDescription:
      "Liseler Oyun Geliştiricileri Derneği KVKK aydınlatma metni, veri işleme amaçları, hukuki sebepler ve başvuru yolları.",
    toc: [
      { id: "veri-sorumlusu", title: "1. Veri Sorumlusunun Kimliği" },
      { id: "islenen-veriler", title: "2. İşlenen Kişisel Veri Kategorileri" },
      { id: "isleme-amaclari", title: "3. Kişisel Verilerin İşlenme Amaçları" },
      { id: "hukuki-sebepler", title: "4. Veri İşlemenin Hukuki Sebepleri" },
      { id: "veri-aktarimi", title: "5. Kişisel Verilerin Aktarımı" },
      { id: "toplama-yontemleri", title: "6. Kişisel Veri Toplama Yöntemleri" },
      { id: "ilgili-kisi-haklari", title: "7. İlgili Kişi Olarak Kanuni Haklarınız (Madde 11)" },
      { id: "basvuru-usulu", title: "8. Veri Sorumlusuna Başvuru Usulü ve İletişim" },
    ],
    s1Title: "1. Veri Sorumlusunun Kimliği",
    s1P: "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak Liseler Oyun Geliştiricileri Derneği (“LOGD”) tarafından aşağıda açıklanan kapsamda işlenmektedir.",
    controllerBoxTitle: "Veri Sorumlusu Bilgileri",
    controllerLabels: {
      unvan: "Unvan / İsim:",
      unvanVal: "Liseler Oyun Geliştiricileri Derneği (LOGD)",
      adres: "Faaliyet Merkezi:",
      adresVal: "İstanbul, Türkiye",
      eposta: "KVKK İrtibat E-postası:",
      epostaVal: "kvkk@logd.org.tr",
      web: "İnternet Adresi:",
      webVal: "https://logd.org.tr",
    },
    s2Title: "2. İşlenen Kişisel Veri Kategorileri",
    s2P: "LOGD tarafından yürütülen faaliyetler çerçevesinde, katılımcı ve ziyaretçilerimizden aşağıdaki kategorilerde veriler işlenebilmektedir:",
    categories: [
      {
        name: "Kimlik Verileri",
        items:
          "Ad, soyad, doğum yılı / yaşı (resmi dernek üyeliği için yasal zorunluluk halinde T.C. kimlik no).",
      },
      {
        name: "İletişim Verileri",
        items:
          "E-posta adresi, cep telefonu numarası, il/ilçe bilgisi, Discord kullanıcı adı/etiketi.",
      },
      {
        name: "Öğrenim / Mesleki Bilgiler",
        items:
          "Öğrenim görülen lise adı, sınıf düzeyi, uzmanlık/ilgi alanı (kodlama, piksel tasarım, müzik vb.).",
      },
      {
        name: "İşlem Güvenliği & Ağ Verileri",
        items: "IP adresi kayıtları, internet sitesi giriş-çıkış logları, çerez kayıtları.",
      },
      {
        name: "Görsel ve İşitsel Kayıtlar",
        items: "Atölye, Game Jam ve lise buluşmalarında çekilen fotoğraf ve video kayıtları.",
      },
    ],
    s3Title: "3. Kişisel Verilerin İşlenme Amaçları",
    s3P: "Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak:",
    purposes: [
      "Dernek tüzüğünde öngörülen amaçlar doğrultusunda lise öğrencilerine yönelik oyun geliştirme eğitimleri, Game Jam yarışmaları ve kamplar düzenlemek,",
      "Yarışma başvurularını değerlendirmek, takımları eşleştirmek ve mentorluk desteği sağlamak,",
      "Yarışmalarda dereceye giren takımların ödüllerini teslim etmek ve sponsor raporlamalarını yürütmek,",
      "Topluluk iletişim kanallarına (Discord, bülten) üye alımı ve güvenliğini sağlamak,",
      "İnternet sitemizin güvenliğini temin etmek, 5651 sayılı Kanun kapsamındaki yasal log tutma yükümlülüklerini yerine getirmek,",
      "Resmi dernek kütüğü ve kamu kurumları bildirimlerini mevzuata uygun ifa etmek.",
    ],
    s4Title: "4. Veri İşlemenin Hukuki Sebepleri",
    s4P: "Kişisel verileriniz, KVKK'nın 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:",
    legalBases: [
      {
        title: "Kanunlarda Açıkça Öngörülmesi",
        desc: "5253 sayılı Dernekler Kanunu, 5651 sayılı İnternet Kanunu ve ilgili mevzuattan kaynaklanan yükümlülükler.",
      },
      {
        title: "Sözleşmenin Kurulması veya İfası",
        desc: "Yarışma katılım koşulları, üyelik süreci ve ödül taahhütlerinin yerine getirilmesi.",
      },
      {
        title: "Hukuki Yükümlülüğün Yerine Getirilmesi",
        desc: "Yetkili idari ve adli makamların taleplerine yanıt verilmesi ve yasal bildirimler.",
      },
      {
        title: "Meşru Menfaat",
        desc: "Öğrencilerin temel hak ve özgürlüklerine zarar vermemek kaydıyla, dernek faaliyetlerinin yürütülmesi ve topluluk güvenliği.",
      },
      {
        title: "Açık Rıza",
        desc: "Bülten gönderimi, etkinliklerde fotoğraf/video çekimi ve zorunlu olmayan çerez kullanımı.",
      },
    ],
    s5Title: "5. Kişisel Verilerin Aktarımı",
    s5P: "Kişisel verileriniz; kural olarak üçüncü şahıslara satılmaz veya ticari amaçlarla kiralanmaz. Ancak meşru amaçlarla:",
    transfers: [
      {
        title: "Yarışma Jürisi ve Mentorlar",
        desc: "Game Jam değerlendirme süreçlerinin yürütülmesi için proje ve katılımcı bilgileri.",
      },
      {
        title: "Yetkili Kamu Kurum ve Kuruluşları",
        desc: "Kanuni zorunluluk halinde mahkemeler, kolluk kuvvetleri ve Sivil Toplumla İlişkiler Genel Müdürlüğü.",
      },
      {
        title: "Hizmet Sağlayıcılar",
        desc: "Web barındırma (hosting), e-posta altyapısı ve bulut depolama desteği aldığımız güvenli tedarikçiler.",
      },
    ],
    s6Title: "6. Kişisel Veri Toplama Yöntemleri",
    s6P: "Kişisel verileriniz; web sitemiz üzerindeki formlar, Game Jam başvuru sistemleri, e-posta yazışmaları, Discord sunucusu kayıtları ve fiziki etkinliklerde doldurulan belgeler vasıtasıyla otomatik veya kısmen otomatik yollarla toplanmaktadır.",
    methods: [
      "Web sitesi kayıt ve iletişim formları",
      "Game Jam proje teslim portalları",
      "E-posta ve Discord topluluk etkileşimleri",
      "Fiziki etkinlik katılım formları ve veli onay belgeleri",
    ],
    s7Title: "7. İlgili Kişi Olarak Kanuni Haklarınız (Madde 11)",
    s7P: "KVKK'nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:",
    rights: [
      "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
      "İşlenmişse buna ilişkin bilgi talep etme,",
      "İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
      "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,",
      "Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
      "KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
      "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
      "Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
    ],
    s8Title: "8. Veri Sorumlusuna Başvuru Usulü ve İletişim",
    s8P1: "Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tevsik edici belgeler ile birlikte talebinizi aşağıdaki kanallardan iletebilirsiniz:",
    s8P2: "Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç otuz (30) gün içinde ücretsiz olarak sonuçlandırılacaktır.",
    applySteps: {
      writtenTitle: "E-Posta Yoluyla Başvuru:",
      writtenDesc:
        "Sistemimizde kayıtlı bulunan e-posta adresinizden 'KVKK Bilgi Talebi' konulu bir iletiyi ",
      emailTitle: "Yazılı Başvuru:",
      emailDesc:
        "Islak imzalı dilekçenizi dernek faaliyet merkezimize şahsen veya noter aracılığıyla ulaştırabilirsiniz.",
    },
    s8Footer:
      "LOGD, başvuruda bulunan kişinin kimliğini doğrulamak amacıyla ek bilgi ve belge talep etme hakkını saklı tutar.",
  },
  en: {
    title: "KVKK Clarification Notice",
    subtitle:
      "Clarification Notice on the Protection and Processing of Personal Data Pursuant to Law No. 6698 (“KVKK”) by the High School Game Developers Association (“LOGD”).",
    lastUpdated: "January 15, 2025",
    metaTitle: "KVKK Clarification Notice | LOGD - High School Game Developers Association",
    metaDescription:
      "Data Controller Clarification Text by LOGD pursuant to the Turkish Law on the Protection of Personal Data No. 6698.",
    ogTitle: "KVKK Clarification Notice | LOGD",
    ogDescription:
      "Information on data processing purposes, statutory bases, and rights under Law No. 6698.",
    toc: [
      { id: "veri-sorumlusu", title: "1. Identity of the Data Controller" },
      { id: "islenen-veriler", title: "2. Categories of Processed Data" },
      { id: "isleme-amaclari", title: "3. Purposes of Data Processing" },
      { id: "hukuki-sebepler", title: "4. Legal Grounds for Processing" },
      { id: "veri-aktarimi", title: "5. Transfer of Personal Data" },
      { id: "toplama-yontemleri", title: "6. Methods of Data Collection" },
      { id: "ilgili-kisi-haklari", title: "7. Statutory Rights of Data Subjects (Article 11)" },
      { id: "basvuru-usulu", title: "8. Application Procedures & Contact" },
    ],
    s1Title: "1. Identity of the Data Controller",
    s1P: "Pursuant to the Turkish Law on Protection of Personal Data No. 6698 (“KVKK”), your personal data is processed by the High School Game Developers Association (“LOGD”) acting as the data controller within the scope detailed below.",
    controllerBoxTitle: "Data Controller Details",
    controllerLabels: {
      unvan: "Entity Name:",
      unvanVal: "High School Game Developers Association (LOGD)",
      adres: "Headquarters:",
      adresVal: "Istanbul, Türkiye",
      eposta: "KVKK Contact Email:",
      epostaVal: "kvkk@logd.org.tr",
      web: "Official Website:",
      webVal: "https://logd.org.tr",
    },
    s2Title: "2. Categories of Processed Data",
    s2P: "Within the scope of non-profit youth activities, LOGD processes the following categories of data from participants and visitors:",
    categories: [
      {
        name: "Identity Details",
        items:
          "Full name, birth year / age (national ID number only when mandated by non-profit associations law for official members).",
      },
      {
        name: "Contact Details",
        items: "Email address, mobile number, city/district, Discord username/handle.",
      },
      {
        name: "Academic Details",
        items:
          "Current high school name, grade, preferred discipline (programming, pixel art, audio, etc.).",
      },
      {
        name: "Network & Security Logs",
        items: "IP address records, website access timestamps, cookie consent records.",
      },
      {
        name: "Visual & Audio Media",
        items: "Photographs and recorded video taken during workshops, Game Jams, and ceremonies.",
      },
    ],
    s3Title: "3. Purposes of Data Processing",
    s3P: "Your personal data is processed in accordance with Articles 5 and 6 of Law No. 6698 for:",
    purposes: [
      "Organizing game development workshops, Game Jam competitions, and bootcamps for high school youth,",
      "Reviewing project submissions, matching teams, and assigning specialized mentors,",
      "Delivering hardware and scholarship prizes to winning teams,",
      "Managing community channels (Discord, email newsletter) and guaranteeing participant safety,",
      "Ensuring web infrastructure security and fulfilling mandatory access log requirements under Law No. 5651,",
      "Fulfilling statutory reporting duties before public associations registries.",
    ],
    s4Title: "4. Legal Grounds for Processing",
    s4P: "Personal data is processed pursuant to the lawful grounds enumerated in Article 5 of the KVKK:",
    legalBases: [
      {
        title: "Expressly Stipulated by Law",
        desc: "Obligations stemming from the Law on Associations No. 5253 and Internet Law No. 5651.",
      },
      {
        title: "Contract Establishment or Execution",
        desc: "Administering competition rules, community onboarding, and delivering promised awards.",
      },
      {
        title: "Fulfillment of Legal Duties",
        desc: "Responding to binding judicial and administrative requests from competent authorities.",
      },
      {
        title: "Legitimate Interests",
        desc: "Coordinating association activities and protecting digital infrastructure without infringing fundamental rights.",
      },
      {
        title: "Explicit Consent",
        desc: "Newsletter subscription, event visual recording, and non-essential analytical cookies.",
      },
    ],
    s5Title: "5. Transfer of Personal Data",
    s5P: "As a strict rule, your personal data is never sold or leased for commercial gain. It may only be transferred for legitimate objectives to:",
    transfers: [
      {
        title: "Jury Panels and Mentors",
        desc: "Game project submissions and student handles for competition evaluations.",
      },
      {
        title: "Authorized Public Authorities",
        desc: "Courts, law enforcement, or the Directorate General of Civil Society Relations upon statutory demand.",
      },
      {
        title: "Technical Infrastructure Providers",
        desc: "Secure cloud hosting, email dispatch, and database maintenance vendors acting as data processors.",
      },
    ],
    s6Title: "6. Methods of Data Collection",
    s6P: "Personal data is gathered automatically or semi-automatically through website forms, competition submission systems, email communications, Discord interactions, and written guardian consent slips.",
    methods: [
      "Website registration and contact forms",
      "Game Jam submission repositories",
      "Email dialogues and Discord community servers",
      "Physical event slips and written parental consent documents",
    ],
    s7Title: "7. Statutory Rights of Data Subjects (Article 11)",
    s7P: "Pursuant to Article 11 of the KVKK, you are entitled to:",
    rights: [
      "Learn whether your personal data is being processed,",
      "Request information if it has been processed,",
      "Learn the purpose of processing and whether it is used in accordance with its purpose,",
      "Know the third parties to whom data is transferred domestically or abroad,",
      "Request rectification if data is incomplete or inaccurate,",
      "Request erasure or destruction of personal data under statutory conditions,",
      "Object to any outcome detrimental to you produced exclusively by automated systems,",
      "Claim compensation for damages arising from unlawful processing.",
    ],
    s8Title: "8. Application Procedures & Contact",
    s8P1: "To exercise your statutory rights, you may submit your request along with identity verification documents through the following channels:",
    s8P2: "Requests will be concluded free of charge as quickly as possible and within thirty (30) days at the latest.",
    applySteps: {
      writtenTitle: "Application via Email:",
      writtenDesc:
        "Send an email with the subject 'KVKK Information Request' from your registered email address to ",
      emailTitle: "Written Application:",
      emailDesc:
        "Submit a signed physical petition to our association headquarters in person or via public notary.",
    },
    s8Footer:
      "LOGD reserves the right to request additional documentation to verify the identity of the applicant.",
  },
  de: {
    title: "KVKK Aufklärungstext",
    subtitle:
      "Aufklärungstext gemäß dem türkischen Datenschutzgesetz Nr. 6698 („KVKK“) des Vereins der Oberschul-Spieleentwickler („LOGD“).",
    lastUpdated: "15. Januar 2025",
    metaTitle: "KVKK Aufklärungstext | LOGD - Oberschul-Spieleentwickler",
    metaDescription:
      "Aufklärungstext gemäß dem türkischen Datenschutzgesetz Nr. 6698 über die Datenverarbeitung des Vereins LOGD.",
    ogTitle: "KVKK Aufklärungstext | LOGD",
    ogDescription:
      "Informationen zu Verarbeitungszwecken, Rechtsgrundlagen und Antragsverfahren nach Gesetz Nr. 6698.",
    toc: [
      { id: "veri-sorumlusu", title: "1. Identität des Verantwortlichen" },
      { id: "islenen-veriler", title: "2. Verarbeitete Datenkategorien" },
      { id: "isleme-amaclari", title: "3. Zwecke der Datenverarbeitung" },
      { id: "hukuki-sebepler", title: "4. Rechtsgrundlagen" },
      { id: "veri-aktarimi", title: "5. Datenübermittlung" },
      { id: "toplama-yontemleri", title: "6. Datenerhebungsmethoden" },
      { id: "ilgili-kisi-haklari", title: "7. Rechte der betroffenen Person (Art. 11)" },
      { id: "basvuru-usulu", title: "8. Antragsverfahren & Kontakt" },
    ],
    s1Title: "1. Identität des Verantwortlichen",
    s1P: "Gemäß dem türkischen Datenschutzgesetz Nr. 6698 („KVKK“) werden Ihre personenbezogenen Daten durch den Verein der Oberschul-Spieleentwickler („LOGD“) als Verantwortlicher im folgenden Umfang verarbeitet.",
    controllerBoxTitle: "Angaben zum Verantwortlichen",
    controllerLabels: {
      unvan: "Vereinsname:",
      unvanVal: "Verein der Oberschul-Spieleentwickler (LOGD)",
      adres: "Sitz:",
      adresVal: "Istanbul, Türkei",
      eposta: "Datenschutz-Kontakt:",
      epostaVal: "kvkk@logd.org.tr",
      web: "Website:",
      webVal: "https://logd.org.tr",
    },
    s2Title: "2. Verarbeitete Datenkategorien",
    s2P: "Im Rahmen unserer gemeinnützigen Jugendarbeit verarbeitet LOGD folgende Datenkategorien:",
    categories: [
      {
        name: "Identifikationsdaten",
        items:
          "Vor- und Nachname, Geburtsjahr / Alter (Ausweisnummer nur bei förmlicher Vereinsmitgliedschaft nach Vereinsgesetz).",
      },
      {
        name: "Kontaktdaten",
        items: "E-Mail-Adresse, Mobiltelefonnummer, Stadt/Bezirk, Discord-Name.",
      },
      {
        name: "Schul- & Bildungsdaten",
        items: "Name der Schule, Klassenstufe, Fachbereich (Code, Pixel-Art, Audio etc.).",
      },
      {
        name: "Netzwerk- & Sicherheitsdaten",
        items: "IP-Adressprotokolle, Zeitstempel, Cookie-Zustimmungen.",
      },
      {
        name: "Medienaufnahmen",
        items: "Foto- und Videoaufnahmen bei Workshops und Wettbewerben.",
      },
    ],
    s3Title: "3. Zwecke der Datenverarbeitung",
    s3P: "Ihre personenbezogenen Daten werden gemäß den Artikeln 5 und 6 des Gesetzes verarbeitet für:",
    purposes: [
      "Durchführung von Workshops, Game Jams und Camps für Schülerinnen und Schüler,",
      "Bewertung von Wettbewerbsbeiträgen und Zuteilung von Mentoren,",
      "Übergabe von Sachpreisen und Stipendien an Gewinnerteams,",
      "Verwaltung der Kommunikationskanäle (Discord, Newsletter) und Sicherheit der Plattform,",
      "Erfüllung gesetzlicher Protokollierungspflichten nach Gesetz Nr. 5651,",
      "Erfüllung vereinsrechtlicher Meldepflichten gegenüber Behörden.",
    ],
    s4Title: "4. Rechtsgrundlagen",
    s4P: "Die Verarbeitung stützt sich auf folgende Grundlagen des Gesetzes Nr. 6698:",
    legalBases: [
      {
        title: "Gesetzliche Verpflichtung",
        desc: "Vorgaben des Vereinsgesetzes Nr. 5253 und des Internetgesetzes Nr. 5651.",
      },
      {
        title: "Vertragserfüllung",
        desc: "Durchführung von Wettbewerbsteilnahmen und Verleihung von Auszeichnungen.",
      },
      {
        title: "Erfüllung rechtlicher Pflichten",
        desc: "Beantwortung behördlicher oder gerichtlicher Anordnungen.",
      },
      {
        title: "Berechtigtes Interesse",
        desc: "Koordination von Vereinsaktivitäten und Gewährleistung der Serversicherheit.",
      },
      {
        title: "Einwilligung",
        desc: "Newsletterversand, Foto-/Videoaufnahmen und optionale Analyse-Cookies.",
      },
    ],
    s5Title: "5. Datenübermittlung",
    s5P: "Ihre Daten werden nicht verkauft oder zu kommerziellen Werbezwecken weitergegeben. Eine Übermittlung erfolgt nur an:",
    transfers: [
      {
        title: "Fachjury & Mentoren",
        desc: "Projektabgaben zur fachlichen Bewertung der Spiele.",
      },
      {
        title: "Behörden",
        desc: "Auskunftsersuchen von Gerichten oder Aufsichtsbehörden bei gesetzlicher Pflicht.",
      },
      {
        title: "Dienstleister",
        desc: "Sichere Hosting-, Mail- und Cloud-Anbieter als Auftragsverarbeiter.",
      },
    ],
    s6Title: "6. Datenerhebungsmethoden",
    s6P: "Die Erhebung erfolgt automatisiert oder manuell über Formulare, Game-Jam-Portale, E-Mail-Korrespondenz, Discord-Server und schriftliche Einverständniserklärungen.",
    methods: [
      "Webformulare und Registrierungsseiten",
      "Game-Jam-Einreichungsportale",
      "E-Mail- und Discord-Kommunikation",
      "Schriftliche Teilnahmebögen und Einverständniserklärungen der Eltern",
    ],
    s7Title: "7. Rechte der betroffenen Person (Art. 11)",
    s7P: "Gemäß Artikel 11 des Gesetzes stehen Ihnen folgende Rechte zu:",
    rights: [
      "Auskunft darüber zu verlangen, ob Daten verarbeitet werden,",
      "Informationen über verarbeitete Daten einzufordern,",
      "Den Zweck der Verarbeitung und die Zweckkonformität zu prüfen,",
      "Empfänger von Daten im In- und Ausland zu erfahren,",
      "Berichtigung unvollständiger oder unrichtiger Daten zu verlangen,",
      "Löschung oder Vernichtung nach den gesetzlichen Bestimmungen zu beantragen,",
      "Widerspruch gegen automatische Entscheidungsfindungen einzulegen,",
      "Schadensersatz bei rechtswidriger Verarbeitung einzufordern.",
    ],
    s8Title: "8. Antragsverfahren & Kontakt",
    s8P1: "Zur Geltendmachung Ihrer Rechte richten Sie Ihr Anliegen zusammen mit einem Identitätsnachweis bitte an:",
    s8P2: "Anträge werden schnellstmöglich, spätestens jedoch innerhalb von dreißig (30) Tagen kostenfrei beantwortet.",
    applySteps: {
      writtenTitle: "Antrag per E-Mail:",
      writtenDesc:
        "Senden Sie eine E-Mail mit dem Betreff 'KVKK-Anfrage' von Ihrer hinterlegten E-Mail-Adresse an ",
      emailTitle: "Schriftlicher Antrag:",
      emailDesc:
        "Reichen Sie ein handschriftlich unterzeichnetes Schreiben persönlich oder über einen Notar bei unserer Geschäftsstelle ein.",
    },
    s8Footer:
      "LOGD behält sich das Recht vor, zusätzliche Nachweise zur Überprüfung der Identität anzufordern.",
  },
};
