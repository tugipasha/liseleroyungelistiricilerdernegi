import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Code2,
  Palette,
  Calendar,
  ArrowRight,
  School,
  HeartHandshake,
  Search,
  CheckCircle2,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/ekibimiz")({
  head: () => ({
    meta: [
      {
        title: "Topluluk Başkanlarımız & Ekibimiz | LOGD - Liseler Oyun Geliştiricileri Derneği",
      },
      {
        name: "description",
        content:
          "Liseler Oyun Geliştiricileri Derneği (LOGD) okul temsilcileri, lise topluluk başkanları ve dernek çalışma komisyonları.",
      },
      { property: "og:title", content: "Topluluk Başkanlarımız & Ekibimiz | LOGD" },
      {
        property: "og:description",
        content:
          "Türkiye'nin dört bir yanındaki liselerde LOGD topluluklarını yöneten okul başkanlarımız ve koordinasyon ekiplerimiz.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EkibimizPage,
});

interface SchoolPresident {
  id: string;
  name: string;
  school: string;
  role: string;
  category: "Fen Liseleri" | "Anadolu Liseleri" | "Mesleki & Teknik" | "Diğer Liseler";
  initials: string;
  description?: string;
  badge?: string;
}

const SCHOOL_PRESIDENTS: SchoolPresident[] = [
  {
    id: "aydin-fen",
    name: "Yavuz Deniz",
    school: "Aydın Fen Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Fen Liseleri",
    initials: "YD",
    description: "Aydın Fen Lisesi bünyesinde oyun geliştirme kulübü ve etkinlik koordinasyonu.",
    badge: "Fen Lisesi Temsilcisi",
  },
  {
    id: "bahcesehir-fentek",
    name: "Poyraz",
    school: "Bahçeşehir Fentek",
    role: "Lise Topluluk Başkanı",
    category: "Fen Liseleri",
    initials: "P",
    description: "Bahçeşehir Fen ve Teknoloji Lisesi robotik & oyun motoru topluluk koordinasyonu.",
    badge: "FenTek Temsilcisi",
  },
  {
    id: "bornova-anadolu",
    name: "Efkan Şenol",
    school: "Bornova Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "EŞ",
    description: "BAL Oyun Geliştirme Kulübü ve okul içi Game Jam maratonları liderliği.",
    badge: "BAL Temsilcisi",
  },
  {
    id: "cihat-kora",
    name: "Furkan Yurt",
    school: "Cihat Kora Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "FY",
    description: "Cihat Kora AL bünyesinde yazılım ve oyun tasarımı atölyeleri organizasyonu.",
    badge: "CKAL Temsilcisi",
  },
  {
    id: "ifl",
    name: "Deniz Ak",
    school: "İzmir Fen Lisesi (İFL)",
    role: "Lise Topluluk Başkanı",
    category: "Fen Liseleri",
    initials: "DA",
    description: "İFL Oyun ve Algoritma Kulübü koordinasyonu, teknik maraton liderliği.",
    badge: "İFL Temsilcisi",
  },
  {
    id: "izmir-ataturk",
    name: "Mehmet Kaan Cengiz",
    school: "İzmir Atatürk Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "MKC",
    description: "İAL Oyun Geliştirme Topluluğu ve kültürlerarası lise hackathon çalışmaları.",
    badge: "İAL Temsilcisi",
  },
  {
    id: "izmir-kiz",
    name: "Cem Bal",
    school: "İzmir Kız Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "CB",
    description: "İzmir Kız Lisesi teknoloji ve oyun geliştirme komisyonu başkanlığı.",
    badge: "İKL Temsilcisi",
  },
  {
    id: "karsiyaka-anadolu",
    name: "Görkem",
    school: "Karşıyaka Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "G",
    description: "Karşıyaka AL oyun geliştirme atölyeleri ve yerel etkinlik organizasyonu.",
    badge: "KAL Temsilcisi",
  },
  {
    id: "mazhar-zorlu",
    name: "Akif Ersoy Armağan",
    school: "Mazhar Zorlu MTAL",
    role: "Lise Topluluk Başkanı",
    category: "Mesleki & Teknik",
    initials: "AEA",
    description: "Mazhar Zorlu Mesleki ve Teknik AL bilişim/yazılım kulüp liderliği.",
    badge: "MTAL Temsilcisi",
  },
  {
    id: "numtal",
    name: "Ata Barmanbek",
    school: "NUMTAL",
    role: "Lise Topluluk Başkanı",
    category: "Mesleki & Teknik",
    initials: "AB",
    description: "NUMTAL bünyesinde uygulamalı oyun geliştirme ve dijital sanat projeleri.",
    badge: "NUMTAL Temsilcisi",
  },
  {
    id: "sakalott",
    name: "Buse",
    school: "ŞAKALOTT",
    role: "Lise Topluluk Başkanı",
    category: "Diğer Liseler",
    initials: "B",
    description: "ŞAKALOTT okul temsilciliği ve genç geliştirici mentorluk koordinasyonu.",
    badge: "Okul Temsilcisi",
  },
  {
    id: "uhcal",
    name: "Ela",
    school: "UHÇAL",
    role: "Lise Topluluk Başkanı",
    category: "Diğer Liseler",
    initials: "E",
    description: "UHÇAL oyun tasarımı ve görsel sanatlar topluluk çalışmaları.",
    badge: "Okul Temsilcisi",
  },
  {
    id: "yunus-emre",
    name: "Kağan Akyürek",
    school: "Yunus Emre Anadolu Lisesi",
    role: "Lise Topluluk Başkanı",
    category: "Anadolu Liseleri",
    initials: "KA",
    description: "Yunus Emre AL yazılım ve oyun geliştirme kulüp liderliği.",
    badge: "YEAL Temsilcisi",
  },
];

const CATEGORIES = [
  "Tümü",
  "Fen Liseleri",
  "Anadolu Liseleri",
  "Mesleki & Teknik",
  "Diğer Liseler",
] as const;

const COMMITTEES = [
  {
    title: "Oyun Motorları & Yazılım Komisyonu",
    icon: Code2,
    description:
      "Unreal Engine, Unity ve Godot motorlarında sıfırdan ileri seviyeye kadar kod rehberleri, açık kaynak şablonlar ve kod incelemeleri sunar.",
  },
  {
    title: "2D / 3D Görsel Sanat & Tasarım Kolu",
    icon: Palette,
    description:
      "Aseprite pixel art, Blender ile 3D asset modelleme ve oyun arayüzü (UI/UX) alanında gençlerin estetik yetkinliklerini artırır.",
  },
  {
    title: "Game Jam & Hackathon Organizasyon Masası",
    icon: Calendar,
    description:
      "48 saatlik yerel ve ulusal maratonları kurgular, tema belirleme, takım eşleştirme ve sektör jürisi iletişimini organize eder.",
  },
  {
    title: "Akademi, Mentorluk & Topluluk Rehberliği",
    icon: Users,
    description:
      "Oyun sektöründeki profesyonellerle liseli geliştiricileri bire bir eşleştirerek kariyer ve portfolyo desteği sağlar.",
  },
];

function EkibimizPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPresidents = useMemo(() => {
    return SCHOOL_PRESIDENTS.filter((item) => {
      const matchesCategory = selectedCategory === "Tümü" || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.school.toLowerCase().includes(query) ||
        (item.badge && item.badge.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header */}
      <Header activeNav="Ekibimiz" />

      {/* Hero Section */}
      <section className="relative bg-navy-deep text-cream">
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:pb-24 sm:pt-36">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">Ekibimiz & Topluluk Başkanları</span>
          </nav>

          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sand shadow-sm backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5" />
              LİSE TEMSİLCİLİKLERİ & EKİBİMİZ
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Lise Topluluk Başkanlarımız <br className="hidden sm:inline" />
              ve Çalışma Kollarımız
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Türkiye genelindeki liselerde LOGD vizyonunu yaşatan, okul kulüplerini ve Game Jam
              ekiplerini koordine eden okul başkanlarımızla birlikte üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-[1240px] px-6 py-12 sm:py-16">
        {/* Controls Bar */}
        <div className="flex flex-col gap-5 border-b border-border/80 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Okul Temsilcileri ve Topluluk Başkanları
            </h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Liselerimizdeki aktif temsilcilerimizi okul adına veya başkan ismine göre
              listeleyebilirsiniz.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Okul veya başkan ara..."
                className="h-9.5 w-full rounded-xl border border-border bg-card pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy sm:w-56"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-navy-deep text-cream shadow-sm"
                      : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* School Presidents Grid (Clean & Photo-Free) */}
        {filteredPresidents.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
            <School className="mx-auto h-10 w-10 text-muted-foreground/60" />
            <h3 className="mt-3 text-base font-bold text-foreground">Sonuç bulunamadı</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Arama kriterlerinize uygun okul veya başkan kaydı bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tümü");
              }}
              className="mt-4 rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-cream"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredPresidents.map((pres) => (
              <div
                key={pres.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-md"
              >
                <div>
                  {/* Top Header: Badge & Monogram */}
                  <div className="flex items-start justify-between gap-3">
                    {/* Monogram Avatar */}
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-navy/15 bg-gradient-to-br from-[#130f2f] to-[#1e1747] text-sm font-extrabold tracking-wider text-cream shadow-sm">
                      <span>{pres.initials}</span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full border border-sand/40 bg-sand/10 px-2.5 py-0.5 text-[11px] font-semibold text-navy">
                        <CheckCircle2 className="h-3 w-3 text-sand" />
                        <span>{pres.badge || "Temsilci"}</span>
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {pres.category}
                      </span>
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

                {/* Card Footer: Official Liaison info */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    LOGD Temsilciliği
                  </span>
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
        )}

        {/* SECTION: Çalışma Kolları & Komisyonlar */}
        <section className="mt-20 sm:mt-28">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
              ÇALIŞMA ALANLARIMIZ
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Dernek Çalışma Kolları ve Komisyonlar
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm">
              LOGD çatısı altında farklı disiplinlerde uzmanlaşan liseli komisyonlarımız her gün
              topluluk projelerini ileriye taşıyor.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITTEES.map((com) => {
              const IconComponent = com.icon;
              return (
                <div
                  key={com.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-border hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-navy">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                    {com.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {com.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: Okulunda LOGD Temsilciliği Başlat CTA */}
        <section className="mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-8 text-cream shadow-xl sm:p-12">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-sand/15 px-3 py-1 text-xs font-semibold text-sand">
                <HeartHandshake className="h-3.5 w-3.5" />
                Okul Temsilciliği & Başvuru
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Kendi okulunda LOGD topluluk başkanlığı başlatmak ister misin?
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
