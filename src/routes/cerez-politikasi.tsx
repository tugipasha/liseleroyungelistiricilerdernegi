import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Sliders, Cookie } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";
import { openCookieSettings } from "@/lib/cookie-settings";
import { useI18n } from "@/lib/i18n";
import { cookiePageTranslations } from "@/lib/legal-translations/cookie-policy";

function CerezPolitikasiPage() {
  const { currentLocale } = useI18n();
  const c = cookiePageTranslations[currentLocale] || cookiePageTranslations.tr;

  useEffect(() => {
    document.title = c.metaTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", c.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", c.ogTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", c.ogDescription);
  }, [c]);

  return (
    <LegalLayout
      activeDoc="cerez"
      title={c.title}
      subtitle={c.subtitle}
      lastUpdated={c.lastUpdated}
      toc={c.toc}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* Interactive Manager Callout */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-navy/20 bg-card p-5 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy">
              <Sliders className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground sm:text-base">{c.calloutTitle}</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">{c.calloutDesc}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={openCookieSettings}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-navy-deep px-5 text-xs font-bold text-cream shadow-sm hover:opacity-90 sm:text-sm"
          >
            <Cookie className="h-4 w-4" />
            {c.manageButton}
          </button>
        </div>

        {/* Section 1 */}
        <section id="cerez-nedir" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s1Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s1P1}</p>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s1P2}</p>
        </section>

        {/* Section 2 */}
        <section id="kullanim-amaci" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s2Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s2P}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.s2Items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-xs font-medium text-foreground sm:text-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-navy">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="cerez-turleri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s3Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s3P}</p>
          <div className="space-y-4">
            {c.categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">{cat.title}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      cat.badge === "Zorunlu" ||
                      cat.badge === "Essential" ||
                      cat.badge === "Erforderlich"
                        ? "bg-navy/10 text-navy dark:bg-navy/30 dark:text-cream"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {cat.desc}
                </p>
                <p className="mt-3 rounded-lg bg-secondary/40 p-2.5 font-mono text-[11px] text-foreground/80 sm:text-xs">
                  {cat.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="cerez-envanteri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s4Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s4P}</p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-border bg-secondary/50 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                <tr>
                  <th className="p-3.5 font-bold sm:p-4">{c.thName}</th>
                  <th className="p-3.5 font-bold sm:p-4">{c.thProvider}</th>
                  <th className="p-3.5 font-bold sm:p-4">{c.thPurpose}</th>
                  <th className="p-3.5 font-bold sm:p-4">{c.thDuration}</th>
                  <th className="p-3.5 font-bold sm:p-4">{c.thType}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-mono text-[11px] sm:text-xs">
                {c.cookies.map((cookie, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-secondary/20">
                    <td className="p-3.5 font-bold text-foreground sm:p-4">{cookie.name}</td>
                    <td className="p-3.5 font-sans text-muted-foreground sm:p-4">
                      {cookie.provider}
                    </td>
                    <td className="p-3.5 font-sans text-muted-foreground sm:p-4">
                      {cookie.purpose}
                    </td>
                    <td className="p-3.5 text-muted-foreground sm:p-4">{cookie.duration}</td>
                    <td className="p-3.5 font-sans sm:p-4">
                      <span className="rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground">
                        {cookie.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section id="tercih-yonetimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s5Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s5P1}</p>
          <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-6 text-center">
            <h3 className="text-base font-bold text-foreground">{c.s5BoxTitle}</h3>
            <p className="mx-auto mt-2 max-w-xl text-xs text-muted-foreground sm:text-sm">
              {c.s5BoxDesc}
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={openCookieSettings}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-navy-deep px-6 text-xs font-bold text-cream shadow-sm hover:opacity-90 sm:text-sm"
              >
                <Sliders className="h-4 w-4" />
                {c.s5BoxBtn}
              </button>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="tarayici-ayarlari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s6Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s6P}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.browsers.map((b, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground sm:text-sm">{b.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="guncellemeler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {c.s7Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{c.s7P1}</p>
          <p className="text-sm text-muted-foreground sm:text-base">
            {c.s7P2Prefix}
            <a href="mailto:info@logd.org.tr" className="font-semibold text-navy hover:underline">
              info@logd.org.tr
            </a>
            {c.s7P2Suffix}
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}

export const Route = createFileRoute("/cerez-politikasi")({
  component: CerezPolitikasiPage,
});
