import { Locale } from "@/lib/i18n/types";

export interface LegalContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  toc: { id: string; title: string }[];
}

export interface CookiePageContent extends LegalContent {
  calloutTitle: string;
  calloutDesc: string;
  manageButton: string;
  cookies: {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
    type: string;
  }[];
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s2Title: string;
  s2P: string;
  s2Items: string[];
  s3Title: string;
  s3P: string;
  categories: {
    title: string;
    badge: string;
    desc: string;
    examples: string;
  }[];
  s4Title: string;
  s4P: string;
  thName: string;
  thProvider: string;
  thPurpose: string;
  thDuration: string;
  thType: string;
  s5Title: string;
  s5P1: string;
  s5BoxTitle: string;
  s5BoxDesc: string;
  s5BoxBtn: string;
  s6Title: string;
  s6P: string;
  browsers: { name: string; desc: string }[];
  s7Title: string;
  s7P1: string;
  s7P2Prefix: string;
  s7P2Suffix: string;
}

export const cookiePageTranslations: Record<Locale, CookiePageContent> = {
  tr: {
    title: "Çerez Politikası",
    subtitle:
      "Liseler Oyun Geliştiricileri Derneği (“LOGD”) olarak web sitemizden en verimli şekilde yararlanabilmeniz ve kullanıcı deneyiminizi geliştirmek için çerezler (cookies) kullanıyoruz.",
    lastUpdated: "15 Ocak 2025",
    metaTitle: "Çerez Politikası | LOGD - Liseler Oyun Geliştiricileri Derneği",
    metaDescription:
      "LOGD Çerez Politikası: Web sitemizde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğinize dair detaylı rehber.",
    ogTitle: "Çerez Politikası | LOGD",
    ogDescription:
      "Liseler Oyun Geliştiricileri Derneği web sitesinde kullanılan çerezler, saklama süreleri ve tercihlerinizi kontrol etme yöntemleri.",
    toc: [
      { id: "cerez-nedir", title: "1. Çerez (Cookie) Nedir?" },
      { id: "kullanim-amaci", title: "2. Çerezleri Neden Kullanıyoruz?" },
      { id: "cerez-turleri", title: "3. Sitemizde Kullanılan Çerez Türleri" },
      { id: "cerez-envanteri", title: "4. Ayrıntılı Çerez Envanteri Tablosu" },
      { id: "tercih-yonetimi", title: "5. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?" },
      { id: "tarayici-ayarlari", title: "6. Popüler Tarayıcılarda Çerez Ayarları" },
      { id: "guncellemeler", title: "7. Politika Değişiklikleri ve İletişim" },
    ],
    calloutTitle: "Anlık Çerez Tercihleriniz",
    calloutDesc:
      "Tercihlerinizi dilediğiniz zaman güncelleyebilir veya izinlerinizi geri çekebilirsiniz.",
    manageButton: "Tercihleri Yönet",
    cookies: [
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
        name: "logd_preferred_language",
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
    ],
    s1Title: "1. Çerez (Cookie) Nedir?",
    s1P1: "Çerezler (Cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza, tabletinize veya akıllı telefonunuza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi hatırlamasını, oturumunuzu sürdürmesini ve size daha hızlı, güvenli ve kişiselleştirilmiş bir deneyim sunmasını sağlar.",
    s1P2: "Çerezler kişisel cihazınızda herhangi bir zararlı yazılım çalıştırmaz ve bilgisayarınızdaki özel dosyalarınıza erişemez.",
    s2Title: "2. Çerezleri Neden Kullanıyoruz?",
    s2P: "LOGD web sitesinde çerezler başlıca şu amaçlarla kullanılmaktadır:",
    s2Items: [
      "Sitemizin temel fonksiyonlarının güvenli ve kesintisiz çalışmasını sağlamak.",
      "Form gönderimlerinde ve üyelik adımlarında güvenlik doğrulaması (CSRF) yapmak.",
      "Dil tercihinizi (TR, EN, DE) hatırlayarak her defasında yeniden seçmenizi önlemek.",
      "Hangi sayfaların daha çok ilgi gördüğünü tespit ederek içeriklerimizi iyileştirmek.",
      "Game Jam ve lise buluşmaları gibi etkinlik duyurularını ilgi alanlarınıza göre ulaştırmak.",
    ],
    s3Title: "3. Sitemizde Kullanılan Çerez Türleri",
    s3P: "Web sitemizde kullanım amacına ve saklama süresine göre farklı çerez türleri yer alır:",
    categories: [
      {
        title: "Zorunlu / Temel Çerezler",
        badge: "Zorunlu",
        desc: "Web sitesinin güvenliği, formların işlenmesi ve sayfa dolaşımı için kesinlikle gereklidir. Bu çerezler olmadan sitenin düzgün çalışması mümkün değildir.",
        examples: "Örnekler: Oturum kimliği, CSRF koruma belirteçleri, çerez onay tercihleri.",
      },
      {
        title: "İşlevsel Çerezler",
        badge: "İsteğe Bağlı",
        desc: "Kullanıcı tercihlerini (dil, tema veya kapatılan bildirimler gibi) hatırlayarak daha zengin ve kişiselleştirilmiş bir deneyim sağlar.",
        examples: "Örnekler: Dil seçiminiz, banner kapatma durumları.",
      },
      {
        title: "Performans ve Analitik Çerezleri",
        badge: "İsteğe Bağlı",
        desc: "Ziyaretçilerin sayfalar arasında nasıl hareket ettiğini anonim olarak analiz eder ve teknik aksaklıkları tespit etmemize yardımcı olur.",
        examples: "Örnekler: Google Analytics, sayfa görüntülenme sayaçları.",
      },
      {
        title: "Pazarlama ve Duyuru Çerezleri",
        badge: "İsteğe Bağlı",
        desc: "Lise topluluğumuzun yeni etkinlikleri, yarışmaları ve sponsorluk fırsatlarının ilgi düzeyinize uygun şekilde sunulmasını sağlar.",
        examples: "Örnekler: Etkinlik yeniden hedefleme pikselleri (kullanıldığı takdirde).",
      },
    ],
    s4Title: "4. Ayrıntılı Çerez Envanteri Tablosu",
    s4P: "Sitemizde anlık olarak devreye girebilen başlıca çerezlerin sağlayıcıları, kullanım amaçları ve geçerlilik süreleri aşağıda listelenmiştir:",
    thName: "Çerez Adı",
    thProvider: "Sağlayıcı / Hizmet",
    thPurpose: "Kullanım Amacı",
    thDuration: "Saklama Süresi",
    thType: "Türü",
    s5Title: "5. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?",
    s5P1: "LOGD, çerez tercihleriniz konusunda tam şeffaflık sağlar. Web sitemizi ilk ziyaretinizde açılan Çerez Onay Paneli üzerinden dilediğiniz kategoriyi aktif veya pasif yapabilirsiniz. Ayrıca sayfanın sol altındaki çerez simgesinden ya da aşağıdaki butondan tercihlerinizi her zaman değiştirebilirsiniz:",
    s5BoxTitle: "Çerez İzinlerinizi Güncelleyin",
    s5BoxDesc:
      "Zorunlu çerezler haricindeki analitik ve pazarlama izinlerinizi tek tıkla değiştirebilirsiniz.",
    s5BoxBtn: "Çerez Tercihlerini Şimdi Değiştir",
    s6Title: "6. Popüler Tarayıcılarda Çerez Ayarları",
    s6P: "İnternet tarayıcınızın ayarlarını değiştirerek de çerezleri tamamen engelleyebilir veya mevcut çerezleri silebilirsiniz. Popüler tarayıcıların çerez yönetimi sayfaları:",
    browsers: [
      {
        name: "Google Chrome",
        desc: "Ayarlar › Gizlilik ve Güvenlik › Üçüncü Taraf Çerezleri adımlarını izleyin.",
      },
      {
        name: "Mozilla Firefox",
        desc: "Seçenekler › Gizlilik ve Güvenlik › Çerezler ve Site Verileri sekmesini kullanın.",
      },
      {
        name: "Apple Safari",
        desc: "Tercihler › Gizlilik › Tüm Çerezleri Engelle seçeneğini yapılandırın.",
      },
      {
        name: "Microsoft Edge",
        desc: "Ayarlar › Çerezler ve Site İzinleri menüsünden tercihlerinizi belirleyin.",
      },
    ],
    s7Title: "7. Politika Değişiklikleri ve İletişim",
    s7P1: "LOGD, yasal düzenlemelere veya sitemizde kullanılan teknolojilere bağlı olarak bu Çerez Politikası'nı güncelleme hakkını saklı tutar.",
    s7P2Prefix: "Çerez politikamıza ilişkin tüm soru ve önerileriniz için ",
    s7P2Suffix: " adresinden bize ulaşabilirsiniz.",
  },
  en: {
    title: "Cookie Policy",
    subtitle:
      "As the High School Game Developers Association (“LOGD”), we use cookies to help you get the most out of our website and to improve your browsing experience.",
    lastUpdated: "January 15, 2025",
    metaTitle: "Cookie Policy | LOGD - High School Game Developers Association",
    metaDescription:
      "LOGD Cookie Policy: Detailed guide on cookie types, purposes of use, and how to manage your cookie preferences on our website.",
    ogTitle: "Cookie Policy | LOGD",
    ogDescription:
      "Cookies used on the LOGD website, their retention periods, and instructions on how to manage your consent.",
    toc: [
      { id: "cerez-nedir", title: "1. What is a Cookie?" },
      { id: "kullanim-amaci", title: "2. Why Do We Use Cookies?" },
      { id: "cerez-turleri", title: "3. Types of Cookies We Use" },
      { id: "cerez-envanteri", title: "4. Detailed Cookie Inventory Table" },
      { id: "tercih-yonetimi", title: "5. How to Manage Cookie Preferences" },
      { id: "tarayici-ayarlari", title: "6. Cookie Controls in Web Browsers" },
      { id: "guncellemeler", title: "7. Policy Updates & Contact" },
    ],
    calloutTitle: "Your Current Cookie Preferences",
    calloutDesc: "You can review, update, or withdraw your cookie permissions at any time.",
    manageButton: "Manage Preferences",
    cookies: [
      {
        name: "logd_cookie_preferences_v1",
        provider: "LOGD",
        purpose: "Stores visitor cookie consent choices and remembers them on subsequent visits.",
        duration: "1 Year",
        type: "Essential",
      },
      {
        name: "session_token / csrf",
        provider: "LOGD",
        purpose: "Secures website forms and prevents unauthorized cross-site requests.",
        duration: "Session",
        type: "Essential",
      },
      {
        name: "logd_preferred_language",
        provider: "LOGD",
        purpose: "Saves user language selection (TR, EN, DE) locally in the browser.",
        duration: "6 Months",
        type: "Functional",
      },
      {
        name: "_ga / _gid / _gat",
        provider: "Google Analytics",
        purpose: "Anonymously reports visitor traffic and the most visited pages.",
        duration: "2 Years / 24 Hours",
        type: "Analytics",
      },
      {
        name: "event_banner_dismissed",
        provider: "LOGD",
        purpose: "Prevents dismissed Game Jam or event banner notifications from reappearing.",
        duration: "30 Days",
        type: "Functional",
      },
    ],
    s1Title: "1. What is a Cookie?",
    s1P1: "Cookies are small text files placed on your computer, tablet, or smartphone by your browser when you visit a website. These files allow the website to recognize you, keep your session active, and offer a faster, safer, and more personalized experience.",
    s1P2: "Cookies cannot execute malicious software on your device and cannot access personal files stored on your computer.",
    s2Title: "2. Why Do We Use Cookies?",
    s2P: "Cookies on the LOGD website are utilized primarily for the following objectives:",
    s2Items: [
      "Ensuring core website features operate securely and without interruption.",
      "Validating security tokens (CSRF) during form submissions and member registrations.",
      "Remembering your preferred language (TR, EN, DE) across visits.",
      "Evaluating which pages generate the most interest to continuously improve our content.",
      "Delivering announcements about Game Jams, workshops, and student tournaments tailored to your interests.",
    ],
    s3Title: "3. Types of Cookies We Use",
    s3P: "Our website uses different categories of cookies based on their function and storage lifespan:",
    categories: [
      {
        title: "Essential / Necessary Cookies",
        badge: "Essential",
        desc: "Strictly required for site security, form processing, and navigation. The website cannot function properly without these cookies.",
        examples: "Examples: Session tokens, CSRF protection, consent state.",
      },
      {
        title: "Functional Cookies",
        badge: "Optional",
        desc: "Remember user preferences such as chosen language, interface density, or dismissed banners for an enhanced experience.",
        examples: "Examples: Language selection, banner dismissal flags.",
      },
      {
        title: "Performance & Analytics Cookies",
        badge: "Optional",
        desc: "Collect anonymous statistical data on how visitors explore pages to help us diagnose technical issues and refine layouts.",
        examples: "Examples: Google Analytics, aggregated page view counts.",
      },
      {
        title: "Marketing & Event Announcement Cookies",
        badge: "Optional",
        desc: "Allow us to promote upcoming student game jams, hackathons, and scholarship opportunities according to relevance.",
        examples: "Examples: Event interest tags and retargeting pixels (where applied).",
      },
    ],
    s4Title: "4. Detailed Cookie Inventory Table",
    s4P: "The following table details the primary cookies currently deployed on our website, their providers, purposes, and validity periods:",
    thName: "Cookie Name",
    thProvider: "Provider / Service",
    thPurpose: "Purpose",
    thDuration: "Duration",
    thType: "Category",
    s5Title: "5. How to Manage Cookie Preferences",
    s5P1: "LOGD guarantees complete transparency regarding cookie consent. You can enable or disable non-essential categories via the Cookie Consent panel that appears on your initial visit, or anytime through the floating cookie button or by clicking below:",
    s5BoxTitle: "Update Your Cookie Permissions",
    s5BoxDesc:
      "Toggle analytics and announcement cookies on or off with a single click. Essential cookies remain active.",
    s5BoxBtn: "Change Cookie Preferences Now",
    s6Title: "6. Cookie Controls in Web Browsers",
    s6P: "You can also adjust your web browser settings to block or delete cookies universally. Below are direct navigation steps for major browsers:",
    browsers: [
      {
        name: "Google Chrome",
        desc: "Settings › Privacy and Security › Third-Party Cookies.",
      },
      {
        name: "Mozilla Firefox",
        desc: "Settings › Privacy & Security › Cookies and Site Data.",
      },
      {
        name: "Apple Safari",
        desc: "Preferences › Privacy › Block All Cookies or Manage Website Data.",
      },
      {
        name: "Microsoft Edge",
        desc: "Settings › Cookies and Site Permissions › Manage and delete cookies.",
      },
    ],
    s7Title: "7. Policy Updates & Contact",
    s7P1: "LOGD reserves the right to revise this Cookie Policy to comply with legislative changes or technological modifications.",
    s7P2Prefix:
      "For any questions or feedback regarding our cookie policy, please reach out to us at ",
    s7P2Suffix: ".",
  },
  de: {
    title: "Cookie-Richtlinie",
    subtitle:
      "Als Verein der Oberschul-Spieleentwickler („LOGD“) verwenden wir Cookies, um Ihnen ein optimales Surferlebnis zu bieten und unsere Website kontinuierlich zu verbessern.",
    lastUpdated: "15. Januar 2025",
    metaTitle: "Cookie-Richtlinie | LOGD - Oberschul-Spieleentwickler",
    metaDescription:
      "LOGD Cookie-Richtlinie: Detaillierte Übersicht über Cookie-Arten, Verwendungszwecke und Verwaltung Ihrer Einstellungen auf unserer Website.",
    ogTitle: "Cookie-Richtlinie | LOGD",
    ogDescription:
      "Informationen zu den auf der LOGD-Website verwendeten Cookies, Aufbewahrungsfristen und Verwaltung Ihrer Einwilligung.",
    toc: [
      { id: "cerez-nedir", title: "1. Was ist ein Cookie?" },
      { id: "kullanim-amaci", title: "2. Warum nutzen wir Cookies?" },
      { id: "cerez-turleri", title: "3. Verwendete Cookie-Arten" },
      { id: "cerez-envanteri", title: "4. Detaillierte Cookie-Übersicht" },
      { id: "tercih-yonetimi", title: "5. Cookie-Einstellungen verwalten" },
      { id: "tarayici-ayarlari", title: "6. Einstellungen in Webbrowsern" },
      { id: "guncellemeler", title: "7. Aktualisierungen & Kontakt" },
    ],
    calloutTitle: "Ihre aktuellen Cookie-Einstellungen",
    calloutDesc: "Sie können Ihre Einwilligungen jederzeit überprüfen, anpassen oder widerrufen.",
    manageButton: "Einstellungen verwalten",
    cookies: [
      {
        name: "logd_cookie_preferences_v1",
        provider: "LOGD",
        purpose: "Speichert Ihre Cookie-Auswahl und merkt sich diese bei künftigen Besuchen.",
        duration: "1 Jahr",
        type: "Notwendig",
      },
      {
        name: "session_token / csrf",
        provider: "LOGD",
        purpose: "Sichert Webformulare ab und verhindert unautorisierte Anfragen.",
        duration: "Sitzung",
        type: "Notwendig",
      },
      {
        name: "logd_preferred_language",
        provider: "LOGD",
        purpose: "Speichert Ihre bevorzugte Sprache (TR, EN, DE) lokal im Browser.",
        duration: "6 Monate",
        type: "Funktional",
      },
      {
        name: "_ga / _gid / _gat",
        provider: "Google Analytics",
        purpose: "Erfasst anonymisierte Zugriffsstatistiken zur Optimierung der Plattform.",
        duration: "2 Jahre / 24 Std.",
        type: "Analyse",
      },
      {
        name: "event_banner_dismissed",
        provider: "LOGD",
        purpose: "Verhindert das erneute Erscheinen geschlossener Ankündigungs-Banner.",
        duration: "30 Tage",
        type: "Funktional",
      },
    ],
    s1Title: "1. Was ist ein Cookie?",
    s1P1: "Cookies sind kleine Textdateien, die beim Besuch einer Website über Ihren Browser auf Ihrem Computer, Tablet oder Smartphone gespeichert werden. Sie ermöglichen es der Website, Sie wiederzuerkennen, Sitzungen aufrechtzuerhalten und Ihnen ein schnelles, sicheres und personalisiertes Erlebnis zu bieten.",
    s1P2: "Cookies führen auf Ihrem Endgerät keine schädliche Software aus und greifen nicht auf private Dateien auf Ihrer Festplatte zu.",
    s2Title: "2. Warum nutzen wir Cookies?",
    s2P: "Auf der LOGD-Website werden Cookies vor allem für folgende Zwecke eingesetzt:",
    s2Items: [
      "Gewährleistung der sicheren und fehlerfreien Kernfunktionen der Plattform.",
      "Sicherheitsüberprüfungen (CSRF) bei Formularübertragungen und Registrierungen.",
      "Speichern Ihrer Sprachpräferenz (TR, EN, DE), sodass Sie diese nicht jedes Mal neu wählen müssen.",
      "Analyse der meistbesuchten Seiten zur kontinuierlichen inhaltlichen Verbesserung.",
      "Zielgerichtete Benachrichtigungen zu neuen Game Jams, Workshops und Schüler-Turnieren.",
    ],
    s3Title: "3. Verwendete Cookie-Arten",
    s3P: "Unsere Website unterscheidet Cookies nach Funktionsweise und Speicherdauer:",
    categories: [
      {
        title: "Notwendige Cookies",
        badge: "Erforderlich",
        desc: "Zwingend nötig für Sicherheit, Sitzungsspeicherung und Navigation. Ohne diese Cookies kann die Website nicht ordnungsgemäß betrieben werden.",
        examples: "Beispiele: Sitzungs-Tokens, CSRF-Schutz, Einwilligungsspeicher.",
      },
      {
        title: "Funktionale Cookies",
        badge: "Optional",
        desc: "Ermöglichen es, persönliche Einstellungen wie Sprachauswahl oder ausgeblendete Hinweisfelder dauerhaft zu merken.",
        examples: "Beispiele: Sprachauswahl, Banner-Status.",
      },
      {
        title: "Leistungs- und Analyse-Cookies",
        badge: "Optional",
        desc: "Erfassen anonymisierte Besucherdaten, um Ladezeiten, technische Fehler und Navigation zu analysieren.",
        examples: "Beispiele: Google Analytics, Zugriffszähler.",
      },
      {
        title: "Event- und Ankündigungs-Cookies",
        badge: "Optional",
        desc: "Unterstützen uns dabei, Schüler-Wettbewerbe und Förderprogramme passgenau vorzustellen.",
        examples: "Beispiele: Zielgerichtete Hinweis-Tags.",
      },
    ],
    s4Title: "4. Detaillierte Cookie-Übersicht",
    s4P: "Die nachfolgende Tabelle gibt Auskunft über die wichtigsten eingesetzten Cookies, deren Anbieter, Zwecke und Gültigkeitsdauer:",
    thName: "Cookie-Name",
    thProvider: "Anbieter / Dienst",
    thPurpose: "Verwendungszweck",
    thDuration: "Speicherdauer",
    thType: "Kategorie",
    s5Title: "5. Cookie-Einstellungen verwalten",
    s5P1: "LOGD legt großen Wert auf Transparenz. Sie können beim ersten Aufruf der Website im Cookie-Banner oder jederzeit über den schwebenden Cookie-Button oder den folgenden Schalter Ihre Einwilligungen anpassen:",
    s5BoxTitle: "Cookie-Berechtigungen anpassen",
    s5BoxDesc:
      "Aktivieren oder deaktivieren Sie Analyse- und Marketing-Cookies mit einem einzigen Klick.",
    s5BoxBtn: "Cookie-Einstellungen jetzt ändern",
    s6Title: "6. Einstellungen in Webbrowsern",
    s6P: "Sie können das Setzen von Cookies auch direkt in Ihrem Browser einschränken oder alle Cookies löschen:",
    browsers: [
      {
        name: "Google Chrome",
        desc: "Einstellungen › Datenschutz und Sicherheit › Drittanbieter-Cookies.",
      },
      {
        name: "Mozilla Firefox",
        desc: "Einstellungen › Datenschutz & Sicherheit › Cookies und Website-Daten.",
      },
      {
        name: "Apple Safari",
        desc: "Einstellungen › Datenschutz › Alle Cookies blockieren.",
      },
      {
        name: "Microsoft Edge",
        desc: "Einstellungen › Cookies und Websiteberechtigungen › Cookies verwalten.",
      },
    ],
    s7Title: "7. Aktualisierungen & Kontakt",
    s7P1: "LOGD behält sich vor, diese Richtlinie bei rechtlichen Neuerungen oder technischen Anpassungen zu aktualisieren.",
    s7P2Prefix: "Bei Fragen zu unserer Cookie-Richtlinie erreichen Sie uns jederzeit unter ",
    s7P2Suffix: ".",
  },
};
