import { useEffect } from "react";
import { ShieldAlert, Scale, Users, Mail } from "lucide-react";
import { LegalLayout } from "@/components/site/LegalLayout";
import { useI18n } from "@/lib/i18n";
import { privacyPageTranslations } from "@/lib/legal-translations/privacy-policy";

export default function GizlilikPolitikasiPage() {
  const { currentLocale } = useI18n();
  const p = privacyPageTranslations[currentLocale] || privacyPageTranslations.tr;

  useEffect(() => {
    document.title = p.metaTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", p.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", p.ogTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", p.ogDescription);
  }, [p]);

  return (
    <LegalLayout
      activeDoc="gizlilik"
      title={p.title}
      subtitle={p.subtitle}
      lastUpdated={p.lastUpdated}
      toc={p.toc}
    >
      <div className="space-y-12 leading-relaxed text-foreground/90">
        {/* Section 1 */}
        <section id="genel-bakis" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s1Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s1P1}</p>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s1P2}</p>
        </section>

        {/* Section 2 */}
        <section id="temel-ilkeler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s2Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s2P}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {p.principles.map((principle, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 shadow-xs transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5 text-navy dark:text-cream">
                  <Scale className="h-4 w-4" />
                  <h3 className="text-sm font-bold text-foreground sm:text-base">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="toplanan-veriler" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s3Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s3P}</p>
          <div className="space-y-3">
            {p.dataItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:gap-4"
              >
                <span className="w-44 shrink-0 text-xs font-bold text-foreground sm:text-sm">
                  {item.title}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="kullanim-amaclari" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s4Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s4P}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {p.purposes.map((purpose, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4 text-xs font-medium text-foreground sm:text-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy dark:bg-navy/30 dark:text-cream">
                  ✓
                </span>
                <span>{purpose}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Youth Safety */}
        <section id="genc-guvenligi" className="scroll-mt-28 space-y-4">
          <div className="rounded-2xl border border-navy/20 bg-secondary/40 p-6 sm:p-7">
            <div className="flex items-center gap-3 text-navy-deep dark:text-cream">
              <Users className="h-6 w-6" />
              <h2 className="text-lg font-bold tracking-tight sm:text-xl">{p.s5Title}</h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {p.s5P1}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-foreground sm:text-sm">
              {p.s5Items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-navy font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="bilgi-paylasimi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s6Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s6P}</p>
          <div className="space-y-3">
            {p.sharingItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-xs font-bold text-foreground sm:text-sm">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="veri-guvenligi" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s7Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s7P}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {p.securityItems.map((sec, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-4">
                <ShieldAlert className="h-5 w-5 text-navy dark:text-cream" />
                <h3 className="mt-2 text-xs font-bold text-foreground sm:text-sm">{sec.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{sec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section id="veri-saklama" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s8Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s8P}</p>
        </section>

        {/* Section 9 */}
        <section id="haklariniz" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s9Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s9P}</p>
          <ul className="list-inside list-disc space-y-2 text-xs text-muted-foreground sm:text-sm">
            {p.rightsItems.map((right, idx) => (
              <li key={idx}>{right}</li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Taleplerinizi iletmek için lütfen{" "}
            <a href="/kvkk" className="font-semibold text-navy hover:underline">
              {p.s9LinkText}
            </a>
            {p.s9Suffix}
          </p>
        </section>

        {/* Section 10 */}
        <section id="iletisim" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {p.s10Title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{p.s10P}</p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold text-foreground sm:text-base">{p.contactBoxTitle}</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{p.contactBoxDesc}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold sm:text-sm">
              <a
                href="mailto:kvkk@logd.org.tr"
                className="inline-flex items-center gap-1.5 text-navy hover:underline dark:text-cream"
              >
                <Mail className="h-4 w-4" />
                kvkk@logd.org.tr
              </a>
              <a
                href="mailto:info@logd.org.tr"
                className="inline-flex items-center gap-1.5 text-navy hover:underline dark:text-cream"
              >
                <Mail className="h-4 w-4" />
                info@logd.org.tr
              </a>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
