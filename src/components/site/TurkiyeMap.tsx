import { useState } from "react";
import { MapPin } from "lucide-react";
import { MAP_H, MAP_W, MARKERS, PROVINCES } from "./turkiye-map-data";

const HIGHLIGHT = new Set(MARKERS.map((m) => m.name));

export interface CityCommunityInfo {
  name: string;
  count: number;
  label: string;
  badge: string;
  description: string;
  x: number;
  y: number;
  translate: string;
  arrowLeft: string;
}

const CITY_COMMUNITY_MAP: Record<string, CityCommunityInfo> = {
  İzmir: {
    name: "İzmir",
    count: 9,
    label: "9 Topluluk",
    badge: "Ana Merkez",
    description: "9 aktif lise ve genç geliştirici topluluğu",
    x: 76.9,
    y: 247.3,
    translate: "translate(-12%, -100%)",
    arrowLeft: "28px",
  },
  Uşak: {
    name: "Uşak",
    count: 1,
    label: "1 Topluluk",
    badge: "Bölgesel Topluluk",
    description: "1 aktif lise oyun geliştirme topluluğu",
    x: 194.8,
    y: 229.8,
    translate: "translate(-50%, -100%)",
    arrowLeft: "50%",
  },
  Aydın: {
    name: "Aydın",
    count: 1,
    label: "1 Topluluk",
    badge: "Bölgesel Topluluk",
    description: "1 aktif lise oyun geliştirme topluluğu",
    x: 114.0,
    y: 285.5,
    translate: "translate(-25%, -100%)",
    arrowLeft: "48px",
  },
};

export function TurkiyeMap() {
  const [active, setActive] = useState<string | null>(null);

  const activeCity = active ? CITY_COMMUNITY_MAP[active] : null;

  return (
    <div className="relative">
      {/* SVG Map Container */}
      <div className="relative overflow-visible">
        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          role="img"
          aria-label="Türkiye haritası: İzmir (9 topluluk), Uşak (1 topluluk) ve Aydın (1 topluluk) illeri işaretli"
          className="w-full overflow-visible"
        >
          <defs>
            <linearGradient id="tr-base" x1="0" y1="0" x2="0.6" y2="1">
              <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.16" />
              <stop offset="100%" stopColor="var(--navy)" stopOpacity="0.32" />
            </linearGradient>
            <linearGradient id="tr-hot" x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--navy-deep)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="tr-active" x1="0" y1="0" x2="0.4" y2="1">
              <stop offset="0%" stopColor="#432874" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e1338" stopOpacity="1" />
            </linearGradient>
            <filter id="tr-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="9"
                floodColor="var(--navy-deep)"
                floodOpacity="0.28"
              />
            </filter>
            <filter id="tr-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="tr-marker-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="4"
                floodColor="#f4d06f"
                floodOpacity="0.8"
              />
            </filter>
          </defs>

          {/* Provinces */}
          <g filter="url(#tr-shadow)">
            {PROVINCES.map((p) => {
              const isTargetCity = HIGHLIGHT.has(p.n);
              const on = active === p.n;
              const cityData = CITY_COMMUNITY_MAP[p.n];
              return (
                <path
                  key={p.n}
                  d={p.d}
                  fill={on ? "url(#tr-active)" : isTargetCity ? "url(#tr-hot)" : "url(#tr-base)"}
                  stroke={on ? "var(--sand)" : isTargetCity ? "var(--sand)" : "var(--cream)"}
                  strokeWidth={on ? 2.6 : isTargetCity ? 1.8 : 0.9}
                  strokeLinejoin="round"
                  className="cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    opacity: active && !on ? (isTargetCity ? 0.9 : 0.45) : 1,
                    transformOrigin: "center",
                    transform: on ? "translateY(-3px)" : undefined,
                    filter: on ? "drop-shadow(0 4px 12px rgba(244, 208, 111, 0.45))" : undefined,
                  }}
                  onMouseEnter={() => setActive(p.n)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === p.n ? null : p.n)}
                >
                  <title>
                    {p.n}
                    {cityData ? ` - ${cityData.count} Topluluk` : ""}
                  </title>
                </path>
              );
            })}
          </g>

          {/* Markers */}
          {MARKERS.map((m, i) => {
            const on = active === m.name;
            return (
              <g
                key={m.name}
                className="cursor-pointer"
                onMouseEnter={() => setActive(m.name)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === m.name ? null : m.name)}
              >
                {/* Outer pulsing ring */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={on ? "8" : "6"}
                  fill="var(--sand)"
                  opacity={on ? "0.8" : "0.5"}
                >
                  <animate
                    attributeName="r"
                    values={on ? "8;26;8" : "6;20;6"}
                    dur="2.6s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values={on ? "0.8;0;0.8" : "0.5;0;0.5"}
                    dur="2.6s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Center dot pin */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={on ? 7.5 : 5.5}
                  fill="var(--sand)"
                  stroke="var(--cream)"
                  strokeWidth={on ? 2.5 : 2}
                  filter={on ? "url(#tr-marker-glow)" : "url(#tr-glow)"}
                  className="transition-all duration-300"
                />

                {/* City Name text */}
                <text
                  x={m.x}
                  y={m.y - 14}
                  textAnchor="middle"
                  className="pointer-events-none select-none transition-all duration-300"
                  style={{
                    fontSize: on ? 18 : 16,
                    fontWeight: 800,
                    fill: on ? "var(--sand)" : "var(--navy-deep)",
                    paintOrder: "stroke",
                    stroke: on ? "var(--navy-deep)" : "var(--cream)",
                    strokeWidth: on ? 5 : 4,
                    strokeLinejoin: "round",
                  }}
                >
                  {m.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Dynamic Modern Floating Card on Hover */}
        {activeCity && (
          <div
            className="pointer-events-none absolute z-30 transition-all duration-300 ease-out"
            style={{
              left: `${(activeCity.x / MAP_W) * 100}%`,
              top: `${(activeCity.y / MAP_H) * 100}%`,
              transform: activeCity.translate,
              marginTop: "-26px",
            }}
          >
            <div className="relative min-w-[220px] rounded-2xl border border-sand/40 bg-[#161233]/95 p-3.5 text-cream shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
              {/* Header with City Name & Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-sand" />
                  <span className="text-sm font-extrabold tracking-wide text-cream">
                    {activeCity.name}
                  </span>
                </div>
                <span className="rounded-full border border-sand/30 bg-sand/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sand">
                  {activeCity.badge}
                </span>
              </div>

              {/* Main Count Showcase */}
              <div className="mt-2.5 flex items-center gap-3 border-t border-white/10 pt-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-black text-lg text-[#131127] shadow-md">
                  {activeCity.count}
                </div>
                <div>
                  <div className="text-xs font-extrabold text-cream">
                    {activeCity.count === 1
                      ? "1 Aktif Topluluk"
                      : `${activeCity.count} Aktif Topluluk`}
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-cream/70">
                    {activeCity.description}
                  </p>
                </div>
              </div>

              {/* Pointer Caret */}
              <div
                className="absolute -bottom-1.5 h-3 w-3 rotate-45 border-b border-r border-sand/40 bg-[#161233]"
                style={{
                  left: activeCity.arrowLeft,
                  transform: "translateX(-50%) rotate(45deg)",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Interactive Quick City Badges Below Map */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {Object.values(CITY_COMMUNITY_MAP).map((city) => {
          const isSelected = active === city.name;
          return (
            <button
              key={city.name}
              type="button"
              onMouseEnter={() => setActive(city.name)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === city.name ? null : city.name)}
              className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-navy text-cream shadow-md ring-2 ring-sand scale-[1.02]"
                  : "border border-border/80 bg-card text-foreground hover:border-navy/40 hover:bg-secondary/60 hover:scale-[1.01]"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition-all ${
                  isSelected ? "bg-sand animate-ping" : "bg-sand/80"
                }`}
              />
              <span>{city.name}</span>
              <span
                className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold transition-colors ${
                  isSelected
                    ? "bg-white text-[#131127]"
                    : "bg-secondary text-foreground/85 group-hover:bg-white/20"
                }`}
              >
                {city.count} Topluluk
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
