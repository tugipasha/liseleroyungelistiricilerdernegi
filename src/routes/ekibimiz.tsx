import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, School, HeartHandshake, Mail, Award, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/ekibimiz")({
  head: () => ({
    meta: [
      {
        title: "Ekibimiz & Yönetim Kurulu | LOGD - Liseler Oyun Geliştiricileri Derneği",
      },
      {
        name: "description",
        content:
          "Liseler Oyun Geliştiricileri Derneği (LOGD) Yönetim Kurulu, Denetim Kurulu ve okul temsilcileri.",
      },
      { property: "og:title", content: "Ekibimiz & Yönetim Kurulu | LOGD" },
      {
        property: "og:description",
        content:
          "LOGD Yönetim Kurulu, Denetim Kurulu ve Türkiye'nin dört bir yanındaki liselerde LOGD topluluklarını yöneten okul başkanlarımız.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EkibimizPage,
});

interface BoardMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  initials: string;
  bio: string;
  isPresident?: boolean;
}

interface SchoolPresident {
  id: string;
  name: string;
  school: string;
  role: string;
  initials: string;
  description?: string;
}

const YONETIM_KURULU: BoardMember[] = [
  {
    id: "mehmet-kaan-cengiz",
    name: "Mehmet Kaan Cengiz",
    role: "Yönetim Kurulu Başkanı",
    badge: "Yönetim Kurulu Başkanı",
    initials: "MKC",
    bio: "Dernek genel stratejisi, ulusal iş birlikleri, sektörel entegrasyon ve lise oyun geliştirici ağının idaresinden sorumludur.",
    isPresident: true,
  },
  {
    id: "ata-barmanbek",
    name: "Ata Barmanbek",
    role: "Yönetim Kurulu Başkan Yardımcısı",
    badge: "Başkan Yardımcısı",
    initials: "AB",
    bio: "Teknik koordinasyon, game jam operasyonları ve okul toplulukları arası iletişim süreçlerini koordine eder.",
  },
  {
    id: "furkan-yurt",
    name: "Furkan Yurt",
    role: "Yönetim Kurulu Üyesi",
    badge: "Yönetim Kurulu Üyesi",
    initials: "FY",
    bio: "Eğitim ve atölye programlarının tasarımı, mentorluk süreçleri ve katılımcı gelişim masası koordinatörü.",
  },
  {
    id: "deniz-ak",
    name: "Deniz Ak",
    role: "Yönetim Kurulu Üyesi",
    badge: "Yönetim Kurulu Üyesi",
    initials: "DA",
    bio: "Yazılım & motor komisyonları ile teknik içerik rehberlerinin hazırlanması ve açık kaynak projelerin yönetimi.",
  },
  {
    id: "zeynep-talsek",
    name: "Zeynep Talşek",
    role: "Yönetim Kurulu Üyesi",
    badge: "Yönetim Kurulu Üyesi",
    initials: "ZT",
    bio: "Topluluk ilişkileri, etkinlik organizasyonları, tasarım ve genç geliştirici etkileşim süreçlerini yönetir.",
  },
];

const DENETIM_KURULU: BoardMember[] = [
  {
    id: "poyraz-aksu",
    name: "Poyraz Aksu",
    role: "Denetim Kurulu Başkanı",
    badge: "Denetim Kurulu Başkanı",
    initials: "PA",
    bio: "Dernek içi faaliyetlerin, tüzük uygunluğunun, organizasyonel standartların ve süreçlerin denetiminden sorumludur.",
    isPresident: true,
  },
  {
    id: "efkan-senol",
    name: "Efkan Şenol",
    role: "Denetim Kurulu Başkan Yardımcısı",
    badge: "Başkan Yardımcısı",
    initials: "EŞ",
    bio: "Kurumsal işleyiş, iç denetim mekanizmaları ve etkinlik raporlamalarının takibini yürütür.",
  },
  {
    id: "yasmin-su-kayikci",
    name: "Yasmin Su Kayıkçı",
    role: "Denetim Kurulu Üyesi",
    badge: "Denetim Kurulu Üyesi",
    initials: "YSK",
    bio: "Dernek ilkeleri, şeffaflık ilkeleri ve topluluk yönetmeliklerine uyum denetim süreçlerinde görev alır.",
  },
];

const SCHOOL_PRESIDENTS: SchoolPresident[] = [
  {
    id: "aydin-fen",
    name: "Yavuz Deniz",
    school: "Aydın Fen Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "YD",
    description: "Aydın Fen Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "bahcesehir-fentek",
    name: "Poyraz Aksu",
    school: "Bahçeşehir Fentek",
    role: "Lise Topluluk Başkanı",
    initials: "PA",
    description: "Bahçeşehir Fentek bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "bornova-anadolu",
    name: "Efkan Şenol",
    school: "Bornova Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "EŞ",
    description:
      "Bornova Anadolu Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "cihat-kora",
    name: "Furkan Yurt",
    school: "Cihat Kora Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "FY",
    description:
      "Cihat Kora Anadolu Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "ifl",
    name: "Deniz Ak",
    school: "İzmir Fen Lisesi (İFL)",
    role: "Lise Topluluk Başkanı",
    initials: "DA",
    description:
      "İzmir Fen Lisesi (İFL) bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "izmir-ataturk",
    name: "Mehmet Kaan Cengiz",
    school: "İzmir Atatürk Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "MKC",
    description:
      "İzmir Atatürk Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "izmir-kiz",
    name: "Cem Bal",
    school: "İzmir Kız Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "CB",
    description: "İzmir Kız Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "karsiyaka-anadolu",
    name: "Görkem",
    school: "Karşıyaka Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "G",
    description:
      "Karşıyaka Anadolu Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "mazhar-zorlu",
    name: "Akif Ersoy Armağan",
    school: "Mazhar Zorlu MTAL",
    role: "Lise Topluluk Başkanı",
    initials: "AEA",
    description: "Mazhar Zorlu MTAL bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "numtal",
    name: "Tolga Aydın",
    school: "NUMTAL",
    role: "Lise Topluluk Başkanı",
    initials: "TA",
    description: "NUMTAL bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "sakalott",
    name: "Buse",
    school: "ŞAKALOTT",
    role: "Lise Topluluk Başkanı",
    initials: "B",
    description: "ŞAKALOTT bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "uhcal",
    name: "Ela",
    school: "UHÇAL",
    role: "Lise Topluluk Başkanı",
    initials: "E",
    description: "UHÇAL bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
  {
    id: "yunus-emre",
    name: "Kağan Akyürek",
    school: "Yunus Emre Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    initials: "KA",
    description:
      "Yunus Emre Anadolu Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
  },
];

function EkibimizPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header */}
      <Header activeNav="Ekibimiz" />

      {/* Hero Section */}
      <section className="relative bg-navy-deep text-cream">
        <div className="relative mx-auto flex min-h-[580px] max-w-[1240px] flex-col items-center justify-center px-6 pb-24 pt-36 text-center sm:min-h-[640px]">
          <div className="mx-auto flex max-w-[780px] flex-col items-center">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-cream/70"
            >
              <a href="/" className="transition-colors hover:text-cream">
                Ana Sayfa
              </a>
              <span className="text-cream/40">›</span>
              <span className="font-semibold text-cream">Ekibimiz</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand shadow-sm backdrop-blur-sm">
              <Award className="h-3.5 w-3.5" />
              DERNEK ORGANLARI & TEMSİLCİLİKLER
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl md:leading-[1.12]">
              Yönetim, Denetim Kurulları <br className="hidden sm:inline" />
              ve Topluluk Başkanlarımız
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-cream/75 sm:text-lg">
              Liseler Oyun Geliştiricileri Derneği (LOGD) kurulları ve okul temsilcilerimiz ile
              Türkiye genelinde gençlerin oyun geliştirme vizyonunu büyütüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-[1240px] px-6 py-12 sm:py-16">
        {/* SECTION 1: YÖNETİM KURULU */}
        <section id="yonetim-kurulu" className="scroll-mt-24">
          <div className="flex flex-col gap-2 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Yönetim Kurulu
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                LOGD'nin resmi faaliyetlerini, sektörel iş birliklerini ve stratejik hedeflerini
                yöneten icra organı.
              </p>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">5 Asil Üye</span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {YONETIM_KURULU.map((member) => (
              <div
                key={member.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  member.isPresident
                    ? "border-navy/30 bg-gradient-to-b from-card to-secondary/30 ring-1 ring-navy/10 sm:col-span-2 lg:col-span-1"
                    : "border-border/80 hover:border-navy/30"
                }`}
              >
                <div>
                  {/* Top Bar: Monogram + Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy/20 bg-gradient-to-br from-[#110e2b] to-[#251d52] text-base font-extrabold tracking-wider text-cream shadow-sm">
                      <span>{member.initials}</span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                        member.isPresident
                          ? "border border-sand/60 bg-sand/20 text-navy shadow-xs"
                          : "border border-border/80 bg-secondary text-foreground"
                      }`}
                    >
                      {member.isPresident && <Sparkles className="h-3 w-3 text-sand" />}
                      <span>{member.badge}</span>
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-navy sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-navy/85">{member.role}</p>
                  </div>

                  {/* Bio Description */}
                  <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Liaison info */}
                <div className="mt-6 flex items-center justify-end border-t border-border/60 pt-3.5 text-xs">
                  <a
                    href="mailto:Business@logddev.com"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-navy transition-colors hover:text-navy/80"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>İletişime Geç</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: DENETİM KURULU */}
        <section id="denetim-kurulu" className="mt-16 scroll-mt-24 sm:mt-24">
          <div className="flex flex-col gap-2 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Denetim Kurulu
              </h2>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Dernek içi standartları, tüzük uygunluğunu, mali şeffaflığı ve süreç güvenliğini
                denetleyen bağımsız kurul.
              </p>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">3 Asil Üye</span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DENETIM_KURULU.map((member) => (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-md"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy/20 bg-gradient-to-br from-[#1a1738] to-[#2c245c] text-base font-extrabold tracking-wider text-cream shadow-sm">
                      <span>{member.initials}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-secondary px-3 py-1 text-xs font-bold text-foreground">
                      <span>{member.badge}</span>
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-navy sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-navy/85">{member.role}</p>
                  </div>

                  {/* Bio Description */}
                  <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Liaison info */}
                <div className="mt-6 flex items-center justify-end border-t border-border/60 pt-3.5 text-xs">
                  <a
                    href="mailto:Business@logddev.com"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-navy transition-colors hover:text-navy/80"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>İletişime Geç</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: OKUL TEMSİLCİLERİ VE TOPLULUK BAŞKANLARI */}
        <section id="okul-temsilcileri" className="mt-16 scroll-mt-24 sm:mt-24">
          <div className="border-b border-border/80 pb-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Okul Temsilcileri ve Topluluk Başkanları
            </h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Liselerimizdeki aktif temsilcilerimiz ve okul topluluklarımızın başkanları.
            </p>
          </div>

          {/* School Presidents Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {SCHOOL_PRESIDENTS.map((pres) => (
              <div
                key={pres.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-md"
              >
                <div>
                  {/* Top Header: Monogram */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-navy/15 bg-gradient-to-br from-[#130f2f] to-[#1e1747] text-sm font-extrabold tracking-wider text-cream shadow-sm">
                      <span>{pres.initials}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-navy">
                      {pres.name}
                    </h3>
                    <p className="text-xs font-semibold text-navy/80">{pres.role}</p>
                  </div>

                  {/* School Badge Box */}
                  <div className="mt-3.5 flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-3 py-2 text-xs font-medium text-foreground">
                    <School className="h-4 w-4 shrink-0 text-navy" />
                    <span className="font-semibold text-foreground/90">{pres.school}</span>
                  </div>

                  {/* Brief description */}
                  {pres.description && (
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {pres.description}
                    </p>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-5 flex items-center justify-end border-t border-border/60 pt-3.5 text-xs">
                  <a
                    href="mailto:Business@logddev.com"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-navy transition-colors hover:text-navy/80"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>İletişime Geç</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Okulunda Topluluk Kur CTA */}
        <section className="content-auto mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-8 text-cream shadow-xl sm:p-12">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-sand/15 px-3 py-1 text-xs font-semibold text-sand">
                <HeartHandshake className="h-3.5 w-3.5" />
                Okul Temsilciliği & Başvuru
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Kendi okulunda bir topluluk kurmak ister misin?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/80 sm:text-base">
                Okulundaki oyun tutkunu arkadaşlarınla bir kulüp kurmak, Game Jam maratonlarına
                katılmak ve LOGD okul temsilcisi ağına dahil olmak için bizimle iletişime geç!
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/iletisim"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-cream px-6 text-sm font-bold text-navy shadow-sm transition-all hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Temsilcilik Başvurusu Yap</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://discord.gg/per2RTmmP"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-cream/25 bg-white/5 px-6 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
                >
                  Discord Topluluğuna Katıl
                </a>
              </div>
            </div>

            {/* Background decoration elements */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sand/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-cream/10 blur-2xl" />
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
