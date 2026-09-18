import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Building2, Scale, Mail, FileText, CheckCircle2 } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";
import { useI18n } from "@/lib/i18n";
import { kvkkPageTranslations } from "@/lib/legal-translations/kvkk";

function KvkkPage() {
  const { currentLocale } = useI18n();
  const k = kvkkPageTranslations[currentLocale] || kvkkPageTranslations.tr;

  useEffect(() => {
    document.title = k.metaTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", k.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", k.ogTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", k.ogDescription);
  }, [k]);

  return (
    <LegalLayout
      activeDoc="kvkk"
      title={k.title}
      subtitle={k.subtitle}
      lastUpdated={k.lastUpdated}
      toc={k.toc}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* Section 1 */}
        <section id="veri-sorumlusu" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s1Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s1P}</p>

          <div className="rounded-2xl border border-navy/20 bg-secondary/40 p-5 sm:p-6">
            <div className="flex items-center gap-2.5 text-navy-deep dark:text-cream">
              <Building2 className="h-5 w-5" />
              <h3 className="text-sm font-bold sm:text-base">{k.controllerBoxTitle}</h3>
            </div>
            <dl className="mt-4 grid gap-3 text-xs sm:grid-cols-2 sm:text-sm">
              <div>
                <dt className="text-muted-foreground">{k.controllerLabels.unvan}</dt>
                <dd className="font-semibold text-foreground">{k.controllerLabels.unvanVal}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{k.controllerLabels.adres}</dt>
                <dd className="font-semibold text-foreground">{k.controllerLabels.adresVal}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{k.controllerLabels.eposta}</dt>
                <dd className="font-semibold text-navy dark:text-cream">
                  <a href={`mailto:${k.controllerLabels.epostaVal}`} className="hover:underline">
                    {k.controllerLabels.epostaVal}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{k.controllerLabels.web}</dt>
                <dd className="font-semibold text-foreground">{k.controllerLabels.webVal}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Section 2 */}
        <section id="islenen-veriler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s2Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s2P}</p>
          <div className="space-y-3">
            {k.categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4"
              >
                <span className="w-48 shrink-0 text-xs font-bold text-foreground sm:text-sm">
                  {cat.name}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {cat.items}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="isleme-amaclari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s3Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s3P}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {k.purposes.map((purpose, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-xs font-medium text-foreground sm:text-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-navy">
                  ✓
                </span>
                <span>{purpose}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="hukuki-sebepler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s4Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s4P}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {k.legalBases.map((base, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-navy dark:text-cream">
                  <Scale className="h-4 w-4" />
                  <h3 className="text-xs font-bold sm:text-sm">{base.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {base.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="veri-aktarimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s5Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s5P}</p>
          <div className="space-y-3">
            {k.transfers.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground sm:text-sm">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="toplama-yontemleri" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s6Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s6P}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {k.methods.map((method, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3.5 text-xs text-foreground sm:text-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-navy" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="ilgili-kisi-haklari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s7Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s7P}</p>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <ul className="space-y-3 text-xs text-muted-foreground sm:text-sm">
              {k.rights.map((right, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-navy">•</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section id="basvuru-usulu" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {k.s8Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{k.s8P1}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-navy dark:text-cream">
                <Mail className="h-4 w-4" />
                <h3 className="text-xs font-bold sm:text-sm">{k.applySteps.writtenTitle}</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {k.applySteps.writtenDesc}
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="font-semibold text-navy hover:underline"
                >
                  kvkk@logd.org.tr
                </a>{" "}
                adresine iletebilirsiniz.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-navy dark:text-cream">
                <FileText className="h-4 w-4" />
                <h3 className="text-xs font-bold sm:text-sm">{k.applySteps.emailTitle}</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {k.applySteps.emailDesc}
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground sm:text-sm">{k.s8P2}</p>
          <div className="rounded-xl bg-secondary/40 p-4 text-xs text-muted-foreground">
            {k.s8Footer}
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}

export const Route = createFileRoute("/kvkk")({
  component: KvkkPage,
});
