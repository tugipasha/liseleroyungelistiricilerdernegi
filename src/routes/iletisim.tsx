import { useState, useEffect, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Send,
  CheckCircle2,
  ChevronDown,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/lib/i18n";

const TARGET_CONTACT_EMAIL = "Business@logddev.com";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | LOGD - Liseli Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "Bizimle iletişime geçin. Sorularınız, iş birlikleri veya önerileriniz için ekibimiz her zaman sizinle.",
      },
      { property: "og:title", content: "İletişim | LOGD" },
      {
        property: "og:description",
        content:
          "LOGD ile iletişime geçin. E-posta, Discord, ofis adresi ve iletişim formu üzerinden bize ulaşın.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IletisimPage,
});

function IletisimPage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("contact.pageTitle");
  }, [t]);

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const getMailtoUrl = () => {
    const mailSubject = `[LOGD İletişim] ${subject || "İletişim Talebi"} - ${name}`;
    const mailBody = `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subject}\n\nMesaj:\n${message}\n\n---\nBu mesaj https://logd.org.tr iletişim formu üzerinden gönderilmektedir.`;
    return `mailto:${TARGET_CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !kvkkAccepted) return;

    // Open user's default email client pre-filled to Business@logddev.com
    const mailtoUrl = getMailtoUrl();
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header with active 'contact' */}
      <Header activeNav="contact" />

      {/* Hero Section */}
      <section className="relative bg-navy-deep text-cream">
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-center px-6 pb-20 pt-28 text-center sm:pb-24 sm:pt-36">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              {t("contact.breadcrumbsHome")}
            </a>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">{t("contact.breadcrumbsCurrent")}</span>
          </nav>

          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="inline-flex items-center rounded-full border border-cream/15 bg-cream/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sand shadow-sm backdrop-blur-sm">
              {t("contact.heroEyebrow")}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t("contact.heroTitleLine1")} <br className="hidden sm:inline" />
              {t("contact.heroTitleLine2")}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
              {t("contact.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1240px] px-6 py-12 sm:py-16">
        {/* SECTION: Bize mesaj gönderin Form */}
        <section className="mb-16 sm:mb-20">
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid items-center gap-8">
              {/* Form Column */}
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {t("contact.formTitle")}
                    </h2>
                    <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                      {t("contact.formDesc")}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-sand/40 bg-sand/10 px-3.5 py-1.5 text-xs font-medium text-navy sm:self-auto">
                    <Mail className="h-3.5 w-3.5 text-sand" />
                    <span>
                      Alıcı:{" "}
                      <strong className="font-semibold text-foreground">
                        {TARGET_CONTACT_EMAIL}
                      </strong>
                    </span>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="mt-8 rounded-2xl border border-sand/40 bg-sand/15 p-6 text-center sm:p-8">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-navy" />
                    <h3 className="mt-3 text-lg font-bold text-foreground">
                      {t("contact.formSuccessTitle")}
                    </h3>
                    <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Mesajınız hazırlandı ve{" "}
                      <strong className="font-semibold text-foreground">
                        {TARGET_CONTACT_EMAIL}
                      </strong>{" "}
                      adresine iletilmek üzere e-posta istemcinize aktarıldı.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-semibold text-cream shadow transition-all hover:bg-navy/90 active:scale-95 sm:text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>E-posta İstemcisinde Aç</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-muted sm:text-sm"
                      >
                        {copiedEmail ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span>{copiedEmail ? "Kopyalandı!" : "E-postayı Kopyala"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setName("");
                          setEmail("");
                          setSubject("");
                          setMessage("");
                          setKvkkAccepted(false);
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-border/80 px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground sm:text-sm"
                      >
                        {t("contact.formNewMessage")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                    {/* Row 1: Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          {t("contact.fieldName")}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("contact.placeholderName")}
                          className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          {t("contact.fieldEmail")}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("contact.placeholderEmail")}
                          className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {t("contact.fieldSubject")}
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="h-11 w-full appearance-none rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        >
                          <option value="" disabled>
                            {t("contact.selectSubject")}
                          </option>
                          <option value="Genel Soru">{t("contact.subjectGeneral")}</option>
                          <option value="İş Birliği & Sponsorluk">
                            {t("contact.subjectCollaboration")}
                          </option>
                          <option value="Topluluk & Üyelik">{t("contact.subjectCommunity")}</option>
                          <option value="Etkinlikler & Game Jam">
                            {t("contact.subjectEvents")}
                          </option>
                          <option value="Diğer">{t("contact.subjectOther")}</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {t("contact.fieldMessage")}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("contact.placeholderMessage")}
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      />
                    </div>

                    {/* Row 4: KVKK Checkbox & Submit Button */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground">
                        <input
                          type="checkbox"
                          required
                          checked={kvkkAccepted}
                          onChange={(e) => setKvkkAccepted(e.target.checked)}
                          className="h-4 w-4 rounded border-border text-navy focus:ring-navy"
                        />
                        <span>
                          <a
                            href="/kvkk"
                            className="font-semibold text-foreground underline underline-offset-2 hover:text-navy"
                          >
                            {t("contact.kvkkLink")}
                          </a>
                          {t("contact.kvkkSuffix")}
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={!kvkkAccepted}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-navy px-6 text-xs sm:text-sm font-semibold text-cream shadow transition-all hover:bg-navy/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>{t("contact.sendButton")}</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Newsletter Box */}
        <section className="mb-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#130f2f] p-6 text-cream shadow-2xl sm:p-9 lg:p-10">
            {/* Ambient background light */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy/40 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left text & icon */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cream shadow-inner">
                  <Send className="h-6 w-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl text-cream">
                    {t("contact.newsletterTitle")}
                  </h3>
                  <p className="mt-1 text-xs text-cream/75 sm:text-sm max-w-lg leading-relaxed">
                    {t("contact.newsletterDesc")}
                  </p>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:shrink-0">
                {newsletterSuccess ? (
                  <div className="flex items-center gap-2 rounded-full border border-sand/40 bg-sand/15 px-5 py-2.5 text-xs font-semibold text-sand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{t("contact.newsletterSuccess")}</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={t("contact.newsletterPlaceholder")}
                      className="h-11 w-full rounded-full border border-white/20 bg-white px-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sand sm:w-64"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-cream px-6 text-xs sm:text-sm font-bold text-[#130f2f] transition-all hover:bg-cream/90 active:scale-95"
                    >
                      <span>{t("contact.newsletterButton")}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
