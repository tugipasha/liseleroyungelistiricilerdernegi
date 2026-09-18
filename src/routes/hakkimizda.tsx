import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Flag,
  Rocket,
  Trophy,
  Star,
  Sprout,
  Globe,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logd-logo.png.asset.json";

import {
  GamesForChangeLogo,
  NeoTroyGamesLogo,
  GamingIstanbulLogo,
  IgdaIzmirLogo,
  GlobalGameJamLogo,
  PubgMobileLogo,
} from "@/components/site/AboutPartnerLogos";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | LOGD - Liseli Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD, lise öğrencilerinin oyun geliştirme yolculuğunda kendilerini keşfetmelerini, yeni beceriler kazanmalarını ve gerçek projelerle gelişmelerini destekleyen bir topluluktur.",
      },
      { property: "og:title", content: "Hakkımızda | LOGD" },
      {
        property: "og:description",
        content:
          "Liseliler için, liselilerle geleceğin oyunlarını inşa ediyoruz. LOGD misyonu, vizyonu, değerleri ve ekibi.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HakkimizdaPage,
});

const PARTNER_LOGOS = [
  { name: "Games for Change Türkiye", Component: GamesForChangeLogo },
  { name: "NeoTroy Games", Component: NeoTroyGamesLogo },
  { name: "Gaming Istanbul (GIST)", Component: GamingIstanbulLogo },
  { name: "IGDA Türkiye / İzmir", Component: IgdaIzmirLogo },
  { name: "Global Game Jam", Component: GlobalGameJamLogo },
  { name: "PUBG Mobile", Component: PubgMobileLogo },
];

function HakkimizdaPage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("about.pageTitle");
  }, [t]);

  const timeline = [
    {
      icon: Flag,
      year: t("about.timeline2025Year"),
      title: t("about.timeline2025Title"),
      description: t("about.timeline2025Desc"),
    },
    {
      icon: Users,
      year: t("about.timeline2026EarlyYear"),
      title: t("about.timeline2026EarlyTitle"),
      description: t("about.timeline2026EarlyDesc"),
    },
    {
      icon: Rocket,
      year: t("about.timeline2026NowYear"),
      title: t("about.timeline2026NowTitle"),
      description: t("about.timeline2026NowDesc"),
    },
    {
      icon: Trophy,
      year: t("about.timelineFutureYear"),
      title: t("about.timelineFutureTitle"),
      description: t("about.timelineFutureDesc"),
    },
  ];

  const values = [
    {
      icon: Users,
      title: t("about.valStudentFocusedTitle"),
      description: t("about.valStudentFocusedDesc"),
    },
    {
      icon: Star,
      title: t("about.valVolunteerBasedTitle"),
      description: t("about.valVolunteerBasedDesc"),
    },
    {
      icon: Sprout,
      title: t("about.valContinuousSupportTitle"),
      description: t("about.valContinuousSupportDesc"),
    },
    {
      icon: Globe,
      title: t("about.valInclusiveCommunityTitle"),
      description: t("about.valInclusiveCommunityDesc"),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#0B0F19] selection:text-white">
      {/* Header */}
      <Header activeNav="about" />

      {/* Hero Section */}
      <section className="relative bg-navy-deep text-cream">
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:pb-24 sm:pt-36">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              {t("about.breadcrumbsHome")}
            </a>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">{t("about.breadcrumbsCurrent")}</span>
          </nav>

          <div className="mx-auto flex max-w-3xl flex-col items-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sand shadow-sm backdrop-blur-sm">
              {t("about.heroEyebrow")}
            </span>

            {/* Headline, Description & CTAs */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t("about.heroTitleLine1")}
              <br />
              {t("about.heroTitleLine2")} {t("about.heroTitleLine3")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              {t("about.heroDescription")}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#katil"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-cream px-6 text-sm font-bold text-navy shadow-lg shadow-black/10 transition-all hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("about.heroJoinCommunity")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/etkinlikler"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-cream/25 bg-cream/5 px-6 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/15 hover:border-cream/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("about.heroExploreEvents")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: BİZ KİMİZ? (Misyon, Vizyon, Değerlerimiz + LOGD Hakkında) */}
      <section className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            {t("about.whoWeAreEyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {t("about.whoWeAreTitle")}
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left 3-Column Card */}
            <div className="grid rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 md:grid-cols-3 md:divide-x md:divide-slate-200">
              {/* Misyon */}
              <div className="flex flex-col pr-0 md:pr-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Target className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{t("about.missionTitle")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t("about.missionDesc")}
                </p>
              </div>

              {/* Vizyon */}
              <div className="mt-8 flex flex-col border-t border-slate-200 pt-8 md:mt-0 md:border-t-0 md:px-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Eye className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{t("about.visionTitle")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {t("about.visionDesc")}
                </p>
              </div>

              {/* Değerlerimiz */}
              <div className="mt-8 flex flex-col border-t border-slate-200 pt-8 md:mt-0 md:border-t-0 md:pl-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Heart className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{t("about.valuesTitle")}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{t("about.valueOpenToLearning")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{t("about.valueCreatingTogether")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{t("about.valueRespectInclusivity")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{t("about.valueContinuousGrowth")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{t("about.valueSharingSupport")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Dark Navy LOGD Hakkında Card */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#0B0F19] p-7 text-white shadow-md sm:p-8">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
                  <img
                    src={logo.url}
                    alt="LOGD"
                    className="h-full w-full object-contain brightness-200"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                  {t("about.aboutLogdTitle")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {t("about.aboutLogdDesc")}
                </p>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#yolculuk"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  {t("about.aboutLogdJourneyLink")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: YOLCULUĞUMUZ (Timeline) */}
      <section id="yolculuk" className="border-b border-slate-200/80 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Left Header */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("about.journeyEyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {t("about.journeyTitleLine1")}
                <br />
                {t("about.journeyTitleLine2")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {t("about.journeyDesc")}
              </p>
            </div>

            {/* Right Horizontal Timeline */}
            <div id="zaman-cizelgesi" className="relative pt-2">
              {/* Connecting horizontal line (visible on md+) */}
              <div className="absolute left-6 right-6 top-8 hidden h-0.5 bg-slate-200 md:block" />

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
                {timeline.map(({ icon: Icon, year, title, description }) => (
                  <div key={year} className="relative flex flex-col">
                    {/* Circle Milestone Node */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-900 shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div className="mt-4">
                      <span className="text-base font-extrabold tracking-tight text-slate-900">
                        {year}
                      </span>
                      <h3 className="mt-0.5 text-xs font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: BİRLİKTE ÜRETİYORUZ */}
      <section className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("about.producingTogetherEyebrow")}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t("about.producingTogetherTitleLine1")}
                <br className="hidden sm:inline" /> {t("about.producingTogetherTitleLine2")}
              </h2>
            </div>
            <a
              href="#ekibimiz"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-75"
            >
              {t("about.meetOurTeamLink")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-800">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: PARTNERLERİMİZ */}
      <section id="partnerlerimiz" className="border-b border-slate-200/80 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("about.partnersEyebrow")}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t("about.partnersTitle")}
              </h2>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
            {PARTNER_LOGOS.map(({ name, Component }) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                title={name}
              >
                <Component className="max-h-12 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: EKİBİMİZ */}
      <section id="ekibimiz" className="border-t border-slate-200 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                {t("about.teamEyebrow")}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t("about.teamTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                {t("about.teamDesc")}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/ekibimiz"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-navy-deep px-6 text-sm font-bold text-cream shadow-sm transition-all hover:scale-[1.02] hover:bg-navy active:scale-[0.98]"
              >
                <span>{t("about.teamCta")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
