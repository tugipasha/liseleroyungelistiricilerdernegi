import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, ArrowRight, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroBg from "@/assets/hero-bg.png.asset.json";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | LOGD - Liseler Oyun Geliştiricileri Derneği" },
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

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "uye-olma",
    question: "LOGD'ye nasıl üye olabilirim?",
    answer:
      "Topluluğumuza katılmak çok kolay! İletişim formu üzerinden veya Discord sunucumuzdan ekibimizle iletişime geçerek üyelik sürecini hemen başlatabilirsiniz.",
  },
  {
    id: "etkinlik-haber",
    question: "Etkinliklerden nasıl haberdar olabilirim?",
    answer:
      "Etkinlikler sayfamızı takip edebilir veya bültenimize abone olarak tüm duyuruları e-posta adresinize anında alabilirsiniz.",
  },
  {
    id: "proje-katki",
    question: "Projelerimize nasıl katkı sağlayabilirim?",
    answer:
      "GitHub organizasyonumuzu ziyaret edebilir veya Discord sunucumuzda proje ekipleriyle iletişime geçebilirsiniz.",
  },
  {
    id: "is-birligi",
    question: "İş birliği yapmak istiyorum, ne yapmalıyım?",
    answer:
      "İş birliği ve sponsorluk talepleriniz için iletişim formu veya e-posta üzerinden doğrudan bizimle iletişime geçebilirsiniz.",
  },
];

function IletisimPage() {
  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !kvkkAccepted) return;
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header with active 'İletişim' */}
      <Header activeNav="İletişim" />

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
            <span className="text-cream">İletişim</span>
          </nav>

          <div className="max-w-2xl">
            {/* Left Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                İLETİŞİM
              </span>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Bizimle iletişime
                <br />
                geçin.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
                Sorularınız, iş birlikleri veya önerileriniz için ekibimiz her zaman sizinle.
              </p>
            </div>
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
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Bize mesaj gönderin
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">
                  Aşağıdaki formu doldurarak bize kolayca ulaşabilirsiniz.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 rounded-2xl border border-sand/40 bg-sand/15 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-navy" />
                    <h3 className="mt-3 text-base font-bold text-foreground">
                      Mesajınız başarıyla iletildi!
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Ekibimiz en kısa sürede sizinle e-posta adresiniz üzerinden iletişime
                      geçecektir.
                    </p>
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
                      className="mt-5 rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90"
                    >
                      Yeni Mesaj Gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                    {/* Row 1: Name & Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Adınız Soyadınız
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Adınızı soyadınızı yazın"
                          className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          E-posta Adresiniz
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ornek@mail.com"
                          className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Konu
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="h-11 w-full appearance-none rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm text-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        >
                          <option value="" disabled>
                            Konu seçin
                          </option>
                          <option value="Genel Soru">Genel Soru & Bilgi Talebi</option>
                          <option value="İş Birliği & Sponsorluk">İş Birliği & Sponsorluk</option>
                          <option value="Topluluk & Üyelik">Topluluk & Üyelik Başvurusu</option>
                          <option value="Etkinlikler & Game Jam">Etkinlikler & Game Jam</option>
                          <option value="Diğer">Diğer Konular</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Mesajınız
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mesajınızı yazın..."
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
                            KVKK Aydınlatma Metni
                          </a>
                          'ni okudum ve kabul ediyorum.
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={!kvkkAccepted}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-navy px-6 text-xs sm:text-sm font-semibold text-cream shadow transition-all hover:bg-navy/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>Gönder</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Sıkça Sorulan Sorular */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 items-start">
            {FAQS.map((faq) => {
              const isOpen = !!openFaq[faq.id];
              return (
                <div
                  key={faq.id}
                  onClick={() => toggleFaq(faq.id)}
                  className="group cursor-pointer rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-200 hover:border-navy/30 hover:shadow-md"
                >
                  <div className="flex w-full items-center justify-between gap-4 text-left">
                    <h3 className="font-bold text-sm sm:text-base text-foreground select-none">
                      {faq.question}
                    </h3>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/60 text-foreground transition-colors group-hover:bg-secondary">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-navy" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>

                  {isOpen && (
                    <p className="mt-3.5 border-t border-border/50 pt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: Newsletter Box */}
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
                    Gelişmelerden haberdar olun
                  </h3>
                  <p className="mt-1 text-xs text-cream/75 sm:text-sm max-w-lg leading-relaxed">
                    Etkinlikler, duyurular ve topluluk haberleri için bültenimize katılın.
                  </p>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:shrink-0">
                {newsletterSuccess ? (
                  <div className="flex items-center gap-2 rounded-full border border-sand/40 bg-sand/15 px-5 py-2.5 text-xs font-semibold text-sand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Kaydınız başarıyla alındı! Teşekkürler.</span>
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
                      placeholder="E-posta adresiniz"
                      className="h-11 w-full rounded-full border border-white/20 bg-white px-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sand sm:w-64"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-cream px-6 text-xs sm:text-sm font-bold text-[#130f2f] transition-all hover:bg-cream/90 active:scale-95"
                    >
                      <span>Abone Ol</span>
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
