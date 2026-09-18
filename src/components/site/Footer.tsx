import { Instagram, Linkedin, Cookie } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";
import { openCookieSettings } from "@/lib/cookie-settings";
import { useI18n } from "@/lib/i18n";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useI18n();

  const columns = [
    {
      title: t("footer.explore"),
      links: [
        { label: t("footer.topluluk"), href: "/#topluluk" },
        { label: t("footer.projeler"), href: "/projeler" },
        { label: t("footer.oyunlar"), href: "/projeler" },
        { label: t("footer.etkinlikler"), href: "/etkinlikler" },
        { label: t("footer.haberler"), href: "/haberler" },
      ],
    },
    {
      title: t("footer.logd"),
      links: [
        { label: t("footer.hakkimizda"), href: "/hakkimizda" },
        { label: t("footer.ekibimiz"), href: "/ekibimiz" },
        { label: t("footer.kariyer"), href: "/#kariyer" },
        { label: t("footer.iletisim"), href: "/iletisim" },
        { label: t("footer.privacyPolicy"), href: "/gizlilik-politikasi" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="LOGD logosu"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-lg font-extrabold">LOGD</span>
            </a>
            <p className="mt-3 max-w-[240px] text-sm text-cream/60">{t("footer.subtitle")}</p>
            <div className="mt-6 flex items-center gap-4 text-cream/70">
              <a
                href="https://www.instagram.com/logddev?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LOGD Instagram"
                className="transition-colors hover:text-cream"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://discord.gg/per2RTmmP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LOGD Discord Topluluğu"
                className="transition-colors hover:text-cream"
              >
                <DiscordIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/liseler-oyun-geli%C5%9Ftiriciler-derne%C4%9Fi/posts/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LOGD LinkedIn"
                className="transition-colors hover:text-cream"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
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
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>
                <a href="mailto:Business@logddev.com" className="hover:text-cream">
                  Business@logddev.com
                </a>
              </li>
              <li>{t("footer.subtitle")}</li>
              <li>{t("footer.country")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>{t("footer.rights")}</p>
          <div className="flex flex-wrap items-center gap-3.5 text-xs text-cream/70">
            <a href="/gizlilik-politikasi" className="transition-colors hover:text-cream">
              {t("footer.privacyPolicy")}
            </a>
            <span className="text-cream/30">•</span>
            <a href="/kvkk" className="transition-colors hover:text-cream">
              {t("footer.kvkk")}
            </a>
            <span className="text-cream/30">•</span>
            <a href="/cerez-politikasi" className="transition-colors hover:text-cream">
              {t("footer.cookies")}
            </a>
            <span className="text-cream/30">•</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="inline-flex items-center gap-1 text-cream/80 transition-colors hover:text-cream underline-offset-2 hover:underline"
            >
              <Cookie className="h-3 w-3" />
              {t("footer.cookiePreferences")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
