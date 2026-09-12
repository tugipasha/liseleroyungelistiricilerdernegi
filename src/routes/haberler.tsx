import { useState, useMemo, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  ArrowRight,
  ChevronDown,
  Search,
  Send,
  CheckCircle2,
  X,
  Share2,
  Clock,
  Sparkles,
  Bookmark,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCMS, type NewsPost } from "@/lib/cms-store";
import heroBg from "@/assets/hero-bg.png.asset.json";

export const Route = createFileRoute("/haberler")({
  head: () => ({
    meta: [
      { title: "Haberler | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "Topluluğumuzdan en son haberler. Etkinlik duyurularından başarı hikayelerine, oyun geliştirme dünyasındaki yeniliklere kadar her şey burada.",
      },
      { property: "og:title", content: "Haberler | LOGD" },
      {
        property: "og:description",
        content:
          "Topluluğumuzdan en son haberler. Etkinlik duyurularından başarı hikayelerine, oyun geliştirme dünyasındaki yeniliklere kadar her şey burada.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HaberlerPage,
});

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Etkinlikler" | "Topluluk" | "Industry News" | "Duyurular";
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean | undefined;
  featuredLabel?: string | undefined;
  author: string;
  authorRole: string;
  tags: string[];
}

const NEWS_DATA: NewsArticle[] = [];

const CATEGORIES = ["Tümü", "Etkinlikler", "Topluluk", "Industry News", "Duyurular"] as const;

function HaberlerPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Newsletter State
  const { data: cms } = useCMS();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Combined news from CMS and defaults
  const combinedNews = useMemo(() => {
    const cmsArticles: NewsArticle[] = (cms?.news || [])
      .filter((p) => p.status !== "draft")
      .map((p) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        category: p.category,
        date: p.date,
        readTime: p.readTime,
        image: p.image,
        isFeatured: p.isFeatured,
        featuredLabel: p.isFeatured ? "ÖNE ÇIKAN" : undefined,
        author: "LOGD Editör Ekibi",
        authorRole: "Yönetim Masası",
        tags: [p.category, "LOGD"],
      }));

    // Avoid duplicates by ID
    const existingIds = new Set(cmsArticles.map((a) => a.id));
    const fallbackArticles = NEWS_DATA.filter((a) => !existingIds.has(a.id));
    return [...cmsArticles, ...fallbackArticles];
  }, [cms?.news]);

  // Filtered news
  const filteredNews = useMemo(() => {
    return combinedNews.filter((article) => {
      const matchCategory = activeCategory === "Tümü" || article.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [combinedNews, activeCategory, searchQuery]);

  const displayedNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
  };

  const handleShare = (article: NewsArticle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header with active 'Haberler' */}
      <Header activeNav="Haberler" />

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
          <div className="max-w-2xl">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex items-center gap-2 text-xs font-medium text-cream/70"
              >
                <a href="/" className="transition-colors hover:text-cream">
                  Ana Sayfa
                </a>
                <span className="text-cream/40">›</span>
                <span className="text-cream">Haberler</span>
              </nav>

              {/* Eyebrow */}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                HABERLER
              </span>

              {/* Title */}
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Topluluğumuzdan <br />
                <span className="text-cream">en son haberler.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
                Etkinlik duyurularından başarı hikayelerine, oyun geliştirme dünyasındaki
                yeniliklere kadar her şey burada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1240px] px-6 py-12 sm:py-16">
        {/* Dynamic Controls: Category Filter & Search Bar */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(5);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-navy text-cream shadow-sm"
                      : "bg-card border border-border/80 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Haberlerde ara..."
              className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* News Cards List */}
        {combinedNews.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/80 bg-card/60 p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              Henüz yayınlanmış bir haber bulunmuyor
            </h3>
            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Liseler Oyun Geliştiricileri Derneği'nin duyuruları, etkinlik raporları ve haber
              bültenleri yakında bu sayfada paylaşılacaktır.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-cream transition-colors hover:bg-navy-deep sm:text-sm"
              >
                Ana Sayfaya Dön
              </a>
              <a
                href="https://discord.gg/logd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary sm:text-sm"
              >
                Topluluğumuza Katıl
              </a>
            </div>
          </div>
        ) : displayedNews.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-sm font-medium text-muted-foreground">
              Aramanız veya seçtiğiniz kategoriye uygun haber bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Tümü");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-cream"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 sm:gap-7">
            {displayedNews.map((article) => {
              return (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-navy/30 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-[1.1fr_1.2fr]">
                    {/* Left: Image with optional Öne Çıkan badge */}
                    <div className="relative h-60 sm:h-72 lg:h-auto min-h-[220px] overflow-hidden bg-secondary/30">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Öne Çıkan Badge */}
                      {article.isFeatured && (
                        <div className="absolute left-4 top-4 z-10">
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#130f2f] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-cream shadow-md">
                            <Sparkles className="h-3 w-3 text-sand" />
                            {article.featuredLabel || "ÖNE ÇIKAN"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right: Article Details */}
                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                      <div>
                        {/* Meta: Category & Date */}
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="font-bold text-foreground">{article.category}</span>
                          <span className="text-muted-foreground/40">•</span>
                          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{article.date}</span>
                          </span>
                          <span className="text-muted-foreground/40 hidden sm:inline">•</span>
                          <span className="text-muted-foreground hidden sm:inline">
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="mt-3 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-navy sm:text-xl lg:text-2xl">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Read More Action */}
                      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setSelectedArticle(article)}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground transition-all hover:text-navy group-hover:gap-2.5"
                        >
                          <span>Devamını Oku</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-navy" />
                        </button>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="hidden sm:inline font-medium">{article.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-foreground shadow-sm transition-all hover:border-navy/30 hover:bg-secondary/60 active:scale-95"
            >
              <span>Daha Fazla Haber Yükle</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
            </button>
          </div>
        )}

        {/* SECTION: Newsletter Box (Haberlerden ilk sen haberdar ol!) */}
        <section className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#130f2f] p-6 text-cream shadow-2xl sm:p-8 lg:p-10">
            {/* Ambient background light */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-purple-900/20 blur-2xl" />

            <div className="relative grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
              {/* Left text & icon */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cream shadow-inner">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl text-cream">
                    Haberlerden ilk sen haberdar ol!
                  </h3>
                  <p className="mt-1 text-xs text-cream/75 sm:text-sm max-w-lg leading-relaxed">
                    Yeni haberler, duyurular ve etkinlikler için e-posta listemize katıl.
                  </p>
                </div>
              </div>

              {/* Right Form */}
              <div>
                {newsletterSubmitted ? (
                  <div className="flex items-center gap-2.5 rounded-2xl border border-sand/40 bg-sand/15 p-4 text-xs sm:text-sm font-medium text-cream">
                    <CheckCircle2 className="h-5 w-5 text-sand shrink-0" />
                    <span>Harika! E-posta listemize başarıyla kaydoldunuz.</span>
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
                      placeholder="E-posta adresin"
                      className="h-12 w-full rounded-2xl border border-white/15 bg-white px-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-sand"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#eae5d8] px-6 text-xs sm:text-sm font-bold text-navy shadow-md transition-all hover:bg-cream hover:shadow-lg active:scale-95"
                    >
                      <span>Gönder</span>
                      <ArrowRight className="h-4 w-4 text-navy" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-navy-deep/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border/80 bg-card p-6 shadow-2xl sm:p-8">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Article Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="rounded-full bg-navy/10 px-3 py-1 font-bold text-navy">
                  {selectedArticle.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl leading-snug">
                {selectedArticle.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Yazar: <strong className="text-foreground">{selectedArticle.author}</strong> (
                {selectedArticle.authorRole})
              </p>
            </div>

            {/* Modal Image */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="h-64 sm:h-80 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Content */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/90">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {selectedArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
              <button
                type="button"
                onClick={() => handleShare(selectedArticle)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>{copiedLink ? "Bağlantı Kopyalandı!" : "Haberi Paylaş"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="rounded-xl bg-navy px-5 py-2 text-xs font-semibold text-cream transition-colors hover:bg-navy/90"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
