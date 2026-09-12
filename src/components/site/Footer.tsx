import { Github, Instagram, Youtube, MessageCircle, Cookie } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";
import { openCookieSettings } from "@/lib/cookie-settings";

const COLUMNS = [
  {
    title: "KEŞFET",
    links: [
      { label: "Topluluk", href: "/#topluluk" },
      { label: "Projeler", href: "/projeler" },
      { label: "Oyunlar", href: "/projeler" },
      { label: "Etkinlikler", href: "/etkinlikler" },
      { label: "Haberler", href: "/haberler" },
    ],
  },
  {
    title: "KAYNAKLAR",
    links: [
      { label: "Kaynaklar", href: "/#kaynaklar" },
      { label: "Videolar", href: "#" },
      { label: "Araçlar", href: "#" },
      { label: "Eğitimler", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "LOGD",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Ekibimiz", href: "/ekibimiz" },
      { label: "Kariyer", href: "/#kariyer" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="LOGD logosu"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-lg font-extrabold">LOGD</span>
            </a>
            <p className="mt-3 max-w-[220px] text-sm text-cream/60">
              Liseler Oyun Geliştiricileri Derneği
            </p>
            <div className="mt-6 flex items-center gap-4 text-cream/70">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-cream">
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-cream">
                <Youtube className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="Discord" className="transition-colors hover:text-cream">
                <MessageCircle className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-cream">
                <Github className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream/50">
              İLETİŞİM
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>
                <a href="mailto:info@logd.org.tr" className="hover:text-cream">
                  info@logd.org.tr
                </a>
              </li>
              <li>Liseler Oyun Geliştiricileri Derneği</li>
              <li>Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>© 2024 LOGD. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap items-center gap-3.5 text-xs text-cream/70">
            <a href="/gizlilik-politikasi" className="transition-colors hover:text-cream">
              Gizlilik Politikası
            </a>
            <span className="text-cream/30">•</span>
            <a href="/kvkk" className="transition-colors hover:text-cream">
              KVKK
            </a>
            <span className="text-cream/30">•</span>
            <a href="/cerez-politikasi" className="transition-colors hover:text-cream">
              Çerezler
            </a>
            <span className="text-cream/30">•</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="inline-flex items-center gap-1 text-cream/80 transition-colors hover:text-cream underline-offset-2 hover:underline"
            >
              <Cookie className="h-3 w-3" />
              Çerez Tercihleri
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
