import { type ReactNode } from "react";
import {
  ShieldCheck,
  FileText,
  Cookie,
  Mail,
  Printer,
  Calendar,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { openCookieSettings } from "@/lib/cookie-settings";
import { useI18n } from "@/lib/i18n";

interface TocItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  activeDoc: "gizlilik" | "kvkk" | "cerez";
  title: string;
  subtitle: string;
  lastUpdated: string;
  toc: TocItem[];
  children: ReactNode;
}

export function LegalLayout({
  activeDoc,
  title,
  subtitle,
  lastUpdated,
  toc,
  children,
}: LegalLayoutProps) {
  const { t } = useI18n();

  const tabs = [
    {
      id: "gizlilik",
      label: t("legal.tabPrivacy"),
      href: "/gizlilik-politikasi",
      icon: ShieldCheck,
    },
    {
      id: "kvkk",
      label: t("legal.tabKvkk"),
      href: "/kvkk",
      icon: FileText,
    },
    {
      id: "cerez",
      label: t("legal.tabCookie"),
      href: "/cerez-politikasi",
      icon: Cookie,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-navy selection:text-cream">
      {/* Global Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-navy-deep text-cream">
        <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:pb-24 sm:pt-36">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumbs"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              {t("legal.breadcrumbsHome")}
            </a>
            <span className="text-cream/40">›</span>
            <span className="text-cream/80">{t("legal.breadcrumbsSection")}</span>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">{title}</span>
          </nav>

          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3.5 py-1.5 text-xs font-medium text-cream/90 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {t("legal.lastUpdatedPrefix")} {lastUpdated}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Segmented Document Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDoc === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? "bg-cream text-navy shadow-md"
                      : "border border-cream/20 bg-cream/10 text-cream/85 hover:bg-cream/15 hover:text-cream"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="mx-auto w-full max-w-[1240px] flex-1 px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Sticky Sidebar Navigation (İçindekiler & Hızlı Aksiyonlar) */}
          <aside className="order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents Box */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {t("legal.tocTitle")}
                </h2>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-[13px]"
                        >
                          <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                          <span className="leading-snug">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Action: Cookie settings trigger */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-navy">
                    <SlidersHorizontal className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold sm:text-sm">{t("legal.cookiePrefTitle")}</h3>
                    <p className="text-[11px] text-muted-foreground">{t("legal.cookiePrefDesc")}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Cookie className="h-3.5 w-3.5" />
                  {t("legal.customizePref")}
                </button>
              </div>

              {/* Action: Print or Save Document */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Printer className="h-3.5 w-3.5" />
                  {t("legal.printPdf")}
                </button>
              </div>

              {/* Contact box for legal inquiries */}
              <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {t("legal.legalContactTitle")}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {t("legal.legalContactDesc")}
                </p>
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:underline dark:text-cream"
                >
                  <Mail className="h-3.5 w-3.5" />
                  kvkk@logd.org.tr
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content Document */}
          <main className="order-1 lg:order-2">{children}</main>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
