import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Code2,
  Gamepad2,
  MapPin,
  Rocket,
  Users,
  Layers,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCMS } from "@/lib/cms-store";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logd-logo.png.asset.json";

// Lazy-load TurkiyeMap to eliminate 58KB of SVG path calculations from initial render
const TurkiyeMap = lazy(() =>
  import("@/components/site/TurkiyeMap").then((m) => ({ default: m.TurkiyeMap })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOGD | Liseli Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD, lise öğrencilerinin oyun geliştirme yolculuğuna öğrenerek, üreterek ve birlikte başaran büyük bir topluluktur. Projeler, etkinlikler ve kaynaklar seni bekliyor.",
      },
      { property: "og:title", content: "LOGD | Liseli Oyun Geliştiricileri Derneği" },
      {
        property: "og:description",
        content:
          "Geleceğin oyunlarını bugünden geliştiriyoruz. Türkiye'nin dört bir yanından binlerce liseli oyun geliştiricisiyle tanış.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Users,
    title: "Topluluk",
    text: "Lise öğrencilerinin bir araya geldiği, bilgi paylaştığı ve birlikte üretim yaptığı sıcak bir topluluk.",
  },
  {
    icon: Code2,
    title: "Projeler",
    text: "Öğrencilerin geliştirdiği oyunları keşfedin, ilham alın ve kendi projelerinizi dünyayla paylaşın.",
  },
  {
    icon: Calendar,
    title: "Etkinlikler",
    text: "Game jam'ler, atölyeler, seminerler ve buluşmalarla kendini geliştirme fırsatı yakalayın.",
  },
  {
    icon: BookOpen,
    title: "Kaynaklar",
    text: "Oyun geliştirme yolculuğunuzda ihtiyacınız olan rehberler, eğitimler ve araçlara kolayca ulaşın.",
  },
  {
    icon: Rocket,
    title: "Fırsatlar",
    text: "Yarışmalar, burslar ve staj imkânlarıyla geleceğinize yatırım yapın.",
  },
];

const PROJECTS = [
  {
    image: "/games/diveboat.png",
    title: "DiveBoat",
    genre: "3D · Simülasyon (Co-op)",
    engine: "Unity 3D",
    author: "Tolga Aydın & Ekibi",
    url: "/projeler",
  },
  {
    image: "/games/abyss-cat.gif",
    title: "Abyss Cat",
    genre: "2D · Bullet Hell",
    engine: "WebGL / HTML5",
    author: "stackchan (bsvrdr)",
    url: "/projeler",
  },
  {
    image: "/games/dive-and-find.png",
    title: "Dive&Find",
    genre: "2D · Dalış & Keşif",
    engine: "Unity 2D",
    author: "Smile Games",
    url: "/projeler",
  },
  {
    image: "/games/drequetions.png",
    title: "Drequetions",
    genre: "2D · Matematik Aksiyonu",
    engine: "Godot 2D",
    author: "ysfmrsrr",
    url: "/projeler",
  },
];

function Index() {
  const { data: cms } = useCMS();
  const { t, locale } = useI18n();

  const homeEvents = (cms?.events || []).filter((e) => e.status !== "draft").slice(0, 3);
  const heroEyebrow =
    locale === "tr" && cms?.home?.heroEyebrow ? cms.home.heroEyebrow : t("home.heroEyebrow");
  const heroLine1 =
    locale === "tr" && cms?.home?.heroTitleLine1
      ? cms.home.heroTitleLine1
      : t("home.heroTitleLine1");
  const heroLine2 =
    locale === "tr" && cms?.home?.heroTitleLine2
      ? cms.home.heroTitleLine2
      : t("home.heroTitleLine2");
  const heroDesc =
    locale === "tr" && cms?.home?.heroDescription
      ? cms.home.heroDescription
      : t("home.heroDescription");
  const primaryCta =
    locale === "tr" && cms?.home?.heroPrimaryCtaText
      ? cms.home.heroPrimaryCtaText
      : t("home.heroPrimaryCta");
  const primaryLink = cms?.home?.heroPrimaryCtaLink || "#katil";
  const secondaryCta =
    locale === "tr" && cms?.home?.heroSecondaryCtaText
      ? cms.home.heroSecondaryCtaText
      : t("home.heroSecondaryCta");
  const secondaryLink = cms?.home?.heroSecondaryCtaLink || "#projeler";

  const features = [
    {
      icon: Users,
      title: t("home.featureCommunityTitle"),
      text: t("home.featureCommunityText"),
    },
    {
      icon: Code2,
      title: t("home.featureProjectsTitle"),
      text: t("home.featureProjectsText"),
    },
    {
      icon: Calendar,
      title: t("home.featureEventsTitle"),
      text: t("home.featureEventsText"),
    },
    {
      icon: BookOpen,
      title: t("home.featureResourcesTitle"),
      text: t("home.featureResourcesText"),
    },
    {
      icon: Rocket,
      title: t("home.featureOpportunitiesTitle"),
      text: t("home.featureOpportunitiesText"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-navy-deep">
        <div className="relative mx-auto flex min-h-[580px] max-w-[1240px] flex-col items-center justify-center px-6 pb-24 pt-36 text-center sm:min-h-[640px]">
          <div className="mx-auto flex max-w-[780px] flex-col items-center">
            <span className="inline-flex items-center rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand shadow-sm backdrop-blur-sm">
              {heroEyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl md:leading-[1.12]">
              {heroLine1}
              <br />
              {heroLine2}
            </h1>
            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-cream/75 sm:text-lg">
              {heroDesc}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryLink}
                className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-cream px-7 text-sm font-bold text-navy shadow-lg shadow-black/10 transition-all hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryLink}
                className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-cream/25 bg-cream/5 px-7 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/15 hover:border-cream/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{secondaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="hakkimizda" className="content-auto mx-auto max-w-[1240px] px-6 py-24">
        <p className="eyebrow">{t("home.whatWeDoEyebrow")}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">{t("home.whatWeDoTitle")}</h2>
          <a
            href="/hakkimizda"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            {t("home.aboutUsLink")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-elevate rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <Icon className="h-7 w-7 text-navy" strokeWidth={1.6} />
              <h3 className="mt-6 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="content-auto mx-auto max-w-[1240px] px-6 pb-24">
        <p className="eyebrow">{t("home.featuredProjectsEyebrow")}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">
            {t("home.featuredProjectsTitle")}
          </h2>
          <a
            href="/projeler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            {t("home.allProjectsLink")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="card-elevate group overflow-hidden rounded-xl border border-border bg-card"
            >
              <a href="/projeler" className="block overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} oyun görseli`}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground">{project.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Gamepad2 className="h-3.5 w-3.5" /> {project.genre}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" /> {project.engine}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {project.author}
                  </span>
                  <a
                    href="/projeler"
                    aria-label={`${project.title} oyununu incele`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-navy transition-colors group-hover:bg-navy group-hover:text-cream"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Events + stats */}
      <section id="etkinlikler" className="content-auto mx-auto max-w-[1240px] px-6 pb-24">
        <p className="eyebrow">{t("home.upcomingEventsEyebrow")}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">
            {t("home.upcomingEventsTitle")}
          </h2>
          <a
            href="/etkinlikler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            {t("home.allEventsLink")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12">
          {homeEvents.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {homeEvents.map((ev) => (
                <article
                  key={ev.id || ev.title}
                  className="card-elevate flex flex-col rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-extrabold leading-none text-foreground">
                        {ev.day}
                      </p>
                      <p className="mt-1 text-[10px] font-bold tracking-widest text-muted-foreground">
                        {ev.month}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-foreground">{ev.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {ev.locationOrTime || ev.dateRange}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">
                    {ev.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {ev.mode}
                    </span>
                    <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                      {ev.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/60 p-8 text-center sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy mb-3">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground">{t("home.noEventsTitle")}</h3>
              <p className="mt-1.5 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t("home.noEventsDesc")}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://discord.gg/per2RTmmP"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy-light transition-colors"
                >
                  {t("home.joinDiscordBtn")}
                </a>
                <a
                  href="/etkinlikler"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                >
                  {t("home.eventsPageBtn")}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Community */}
      <section id="topluluk" className="content-auto mx-auto max-w-[1240px] px-6 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <p className="eyebrow">{t("home.communityEyebrow")}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground">
              {t("home.communityTitleLine1")}
              <br />
              {t("home.communityTitleLine2")}
            </h2>
            <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-muted-foreground">
              {t("home.communityDesc")}
            </p>
            <a
              href="#katil"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-navy px-5 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
            >
              {t("home.communityJoinBtn")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <Suspense
              fallback={
                <div
                  className="flex h-[260px] w-full items-center justify-center rounded-2xl border border-border/40 bg-card/40 sm:h-[340px]"
                  aria-hidden="true"
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {t("home.communityMapLoading")}
                  </span>
                </div>
              }
            >
              <TurkiyeMap />
            </Suspense>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {t("home.communityMapLocation")}
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="katil" className="content-auto mx-auto max-w-[1240px] px-6 pb-24">
        <div className="grid items-center gap-8 rounded-2xl bg-navy px-8 py-10 lg:grid-cols-[auto_1.1fr_1fr_auto]">
          <img
            src={logo.url}
            alt="LOGD logosu"
            width={72}
            height={72}
            loading="lazy"
            decoding="async"
            className="h-16 w-16 rounded-xl"
          />
          <h2 className="text-2xl font-extrabold leading-snug text-cream">
            {t("home.newsletterTitleLine1")}
            <br />
            {t("home.newsletterTitleLine2")}
          </h2>
          <p className="text-[13px] leading-relaxed text-cream/65">{t("home.newsletterDesc")}</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label="Bülten abonelik formu"
            className="flex w-full flex-wrap items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder={t("home.newsletterEmailPlaceholder")}
              aria-label={t("home.newsletterEmailPlaceholder")}
              className="h-11 min-w-[220px] flex-1 rounded-lg border border-cream/20 bg-cream px-4 text-sm text-navy placeholder:text-navy/45 focus:outline-none focus:ring-2 focus:ring-cream/60"
            />
            <button
              type="submit"
              aria-label={t("home.newsletterSubmitBtn")}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-sand px-5 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              {t("home.newsletterSubmitBtn")} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
