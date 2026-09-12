import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Linkedin,
  Github,
  Mail,
  Users,
  Code2,
  Palette,
  Calendar,
  Sparkles,
  ArrowRight,
  School,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroBg from "@/assets/hero-bg.png.asset.json";

import ahmetImg from "@/assets/images/team_ahmet_1788547015900.webp";
import zeynepImg from "@/assets/images/team_zeynep_1788547038479.webp";
import mertcanImg from "@/assets/images/team_mertcan_1788547060404.webp";
import elifnurImg from "@/assets/images/team_elifnur_1788547075365.webp";
import batuhanImg from "@/assets/images/team_batuhan_1788547091587.webp";
import selinImg from "@/assets/images/team_selin_1788547116444.webp";

export const Route = createFileRoute("/ekibimiz")({
  head: () => ({
    meta: [
      { title: "Ekibimiz | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "Liseler Oyun Geliştiricileri Derneği (LOGD) yönetim kurulu, çalışma kolları, mentorları ve gönüllü ekipleri.",
      },
      { property: "og:title", content: "Ekibimiz | LOGD" },
      {
        property: "og:description",
        content:
          "Lise öğrencilerine oyun geliştirme vizyonu kazandıran çekirdek kadromuz ve komisyonlarımız.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EkibimizPage,
});

interface TeamMember {
  name: string;
  role: string;
  department: "Yönetim" | "Etkinlik & Jam" | "Yazılım & Motor" | "Sanat & Tasarım" | "İletişim";
  school: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin: string;
  github: string;
  email: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Topluluk Yöneticisi & Genel Koordinatör",
    department: "Yönetim",
    school: "İzmir Fen Lisesi Mezunu",
    bio: "LOGD'nin kuruluşundan bu yana ulusal çaptaki lise temsilciliklerini koordine ediyor, dernek stratejisini ve kurumsal iş birliklerini yürütüyor.",
    image: ahmetImg,
    skills: ["Topluluk Yönetimi", "Proje Planlama", "Unity"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "ahmet@logd.org.tr",
  },
  {
    name: "Zeynep Kaya",
    role: "Etkinlik & Game Jam Koordinatörü",
    department: "Etkinlik & Jam",
    school: "Kadıköy Anadolu Lisesi",
    bio: "Global Game Jam NEXT, Anatolia Game Jam ve çevrim içi hackathon maratonlarının takvimini ve jüri süreçlerini organize ediyor.",
    image: zeynepImg,
    skills: ["Game Jam", "Etkinlik Yönetimi", "Mentorluk"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "zeynep@logd.org.tr",
  },
  {
    name: "Mert Can Öz",
    role: "Teknik Lider & Oyun Motorları Direktörü",
    department: "Yazılım & Motor",
    school: "Ankara Fen Lisesi",
    bio: "Unreal Engine 5, Godot ve C# mimarisi üzerine eğitim modülleri hazırlıyor; öğrenci projelerinin kod standartlarını denetliyor.",
    image: mertcanImg,
    skills: ["Unreal Engine", "Godot", "C#", "C++"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mertcan@logd.org.tr",
  },
  {
    name: "Elif Nur Demir",
    role: "İletişim & Sosyal Medya Sorumlusu",
    department: "İletişim",
    school: "Kabataş Erkek Lisesi",
    bio: "Derneğin kamuoyu duyuruları, basın bültenleri, Discord topluluk moderasyonu ve sosyal medya stratejisini yönetiyor.",
    image: elifnurImg,
    skills: ["İletişim", "Basın İlişkileri", "İçerik Stratejisi"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "elif@logd.org.tr",
  },
  {
    name: "Batuhan Arslan",
    role: "Eğitim & Mentorluk Koordinatörü",
    department: "Yazılım & Motor",
    school: "Bornova Anadolu Lisesi",
    bio: "Sektör profesyonelleri ile lise öğrencilerini buluşturan mentorluk programını ve sıfırdan oyun geliştirme atölyelerini koordine ediyor.",
    image: batuhanImg,
    skills: ["Müfredat Tasarımı", "Unity", "Shader Grafikleri"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "batuhan@logd.org.tr",
  },
  {
    name: "Selin Aydın",
    role: "Tasarım & Sanat Kolu Lideri",
    department: "Sanat & Tasarım",
    school: "Beşiktaş Atatürk Anadolu Lisesi",
    bio: "Pixel Art, Blender 3D modelleme atölyelerini yönetiyor; LOGD görsel kimliğini ve açık kaynak oyun varlık kütüphanesini kurguluyor.",
    image: selinImg,
    skills: ["Pixel Art", "Blender 3D", "UI/UX Tasarımı"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "selin@logd.org.tr",
  },
];

const DEPARTMENTS = [
  "Tümü",
  "Yönetim",
  "Etkinlik & Jam",
  "Yazılım & Motor",
  "Sanat & Tasarım",
  "İletişim",
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
  const [selectedDept, setSelectedDept] = useState<string>("Tümü");

  const filteredMembers =
    selectedDept === "Tümü"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header */}
      <Header activeNav="Ekibimiz" />

      {/* Hero Section */}
      <section className="page-hero relative bg-navy-deep text-cream">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/__l5e/assets-v1/b4795b56-e239-4008-8203-408bf280cc33/hero-bg-mobile.webp"
            type="image/webp"
          />
          <source srcSet={heroBg.url} type="image/webp" />
          <img
            src={heroBg.url}
            alt=""
            aria-hidden="true"
            width={1774}
            height={887}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-right"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="text-cream">Ekibimiz</span>
          </nav>

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand">EKİBİMİZ</span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Topluluğumuzu birlikte büyüten
              <br />
              çekirdek kadromuz.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Tutkulu, üretken ve lise öğrencilerinden oluşan ekibimizle Türkiye genelinde genç oyun
              geliştiricilere rehberlik ediyor, birlikte üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-[1240px] px-6 py-14 sm:py-20">
        {/* Department Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Çekirdek Kadro ve Liderler
            </h2>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Çalışma alanlarına göre ekip üyelerimizi listeleyebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedDept === dept
                    ? "bg-navy-deep text-cream shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-border hover:shadow-md"
            >
              <div>
                {/* Avatar & Header */}
                <div className="flex items-start gap-4">
                  <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl ring-2 ring-border/80">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-navy">
                      {member.department}
                    </span>
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">{member.role}</p>
                  </div>
                </div>

                {/* School */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <School className="h-3.5 w-3.5 shrink-0 text-sand" />
                  <span>{member.school}</span>
                </div>

                {/* Bio */}
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                <span className="text-muted-foreground">İletişim:</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`${member.name} E-posta`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm"
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

        {/* SECTION: Gönüllü Ol / Ekibe Katıl CTA */}
        <section className="mt-16 sm:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-8 text-cream shadow-xl sm:p-12">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-sand/15 px-3 py-1 text-xs font-semibold text-sand">
                <HeartHandshake className="h-3.5 w-3.5" />
                Gönüllülük & Başvuru
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Sen de ekibimizin bir parçası olmak ister misin?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/80 sm:text-base">
                Liseliysen ve Game Jam organizasyonlarında, teknik atölyelerde veya grafik/tasarım
                kollarımızda aktif sorumluluk almak istiyorsan aramıza katıl!
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/iletisim"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-cream px-6 text-sm font-bold text-navy shadow-sm transition-all hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Gönüllü Başvurusu Yap</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://discord.gg"
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
