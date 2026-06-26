import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Lock,
} from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/* ─── password gate ─── */
const PASS = "Bannu@2605";

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASS) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 p-10 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
      >
        <Lock className="w-10 h-10 text-amber-400" />
        <h2 className="text-2xl font-bold text-white">This story is private</h2>
        <p className="text-slate-400 text-sm text-center max-w-xs">
          Enter the password to continue
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Password"
          className={`w-64 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-500 outline-none border ${
            error ? "border-red-500" : "border-white/10 focus:border-amber-400"
          } transition`}
          autoFocus
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold transition"
        >
          Unlock
        </button>
        {error && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
            Wrong password, try again.
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}

/* ─── slide data ─── */
interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  coordinates: [number, number]; // [lng, lat]
  zoom: number;
  markerLabel: string;
  gradient: string;
  facts?: string[];
}

const slides: SlideData[] = [
  {
    id: "finland",
    title: "Finland 🇫🇮",
    subtitle: "Where I am now",
    body: "Currently based in Tampere, Finland — building AI products, studying at Tampere University, and experiencing the Nordic life. Endless summer days, frozen lakes, saunas, and silence that teaches you to think.",
    coordinates: [23.78, 61.5],
    zoom: 4,
    markerLabel: "Tampere",
    gradient: "from-blue-950 via-blue-900 to-slate-950",
    facts: ["🎓 Tampere University", "🧊 -30°C winters survived", "🧖 Sauna capital of the world"],
  },
  {
    id: "india",
    title: "India 🇮🇳",
    subtitle: "Where it all began",
    body: "Born and raised in the world's most diverse country. A land of festivals, chaos, colours, and a billion dreams. India shaped who I am — the hustle, the warmth, the resilience.",
    coordinates: [78.96, 20.59],
    zoom: 3.5,
    markerLabel: "India",
    gradient: "from-orange-950 via-amber-900 to-slate-950",
    facts: ["🪔 Land of festivals", "🌶️ Spice in everything", "🚂 Longest train journeys"],
  },
  {
    id: "andhra",
    title: "Andhra Pradesh",
    subtitle: "My roots",
    body: "From the coastal plains to the Eastern Ghats — Andhra Pradesh is home. Known for its spice, Tirupati, and people who work hard and celebrate harder.",
    coordinates: [79.74, 15.91],
    zoom: 5.5,
    markerLabel: "Andhra Pradesh",
    gradient: "from-green-950 via-emerald-900 to-slate-950",
    facts: ["🏔️ Eastern Ghats", "🛕 Tirupati Balaji", "🌊 Bay of Bengal coast"],
  },
  {
    id: "telugu",
    title: "Telugu — తెలుగు",
    subtitle: "My mother tongue",
    body: "Telugu — one of the oldest and most beautiful languages in the world. Called the 'Italian of the East' for its melodic vowel endings. Every word from home sounds like poetry.",
    coordinates: [79.74, 15.91],
    zoom: 5.5,
    markerLabel: "తెలుగు",
    gradient: "from-purple-950 via-violet-900 to-slate-950",
    facts: ["✍️ Italian of the East", "📜 2000+ years old", "🎬 Tollywood — world's largest film city"],
  },
  {
    id: "biryani",
    title: "Biryani 🍚",
    subtitle: "My favourite food",
    body: "Hyderabadi Biryani isn't just food — it's an emotion. Layers of fragrant basmati rice, tender meat, saffron, and fried onions. No matter where I go, nothing compares to a plate of dum biryani.",
    coordinates: [78.47, 17.38],
    zoom: 6,
    markerLabel: "Hyderabad",
    gradient: "from-yellow-950 via-amber-900 to-slate-950",
    facts: ["🔥 Dum cooking method", "🧅 Crispy fried onions", "🌾 Basmati + saffron"],
  },
  {
    id: "dal",
    title: "Amma's Dal 🏠",
    subtitle: "Taste of home",
    body: "No restaurant can recreate it. Simple dal with rice, a spoon of ghee, and the love of a mother who knows exactly how you like it. This is the meal that makes any place feel like home.",
    coordinates: [79.74, 15.91],
    zoom: 5.5,
    markerLabel: "Home",
    gradient: "from-amber-950 via-orange-900 to-slate-950",
    facts: ["🥣 Dal + Rice + Ghee", "❤️ Amma's recipe", "🏡 No restaurant can match it"],
  },
  {
    id: "journey",
    title: "My Journey 🌍",
    subtitle: "Places on the globe",
    body: "From Andhra to Finland, with stops in between — Dubrovnik, Istanbul, Stockholm, and more. Every pin on this map is a chapter in my story.",
    coordinates: [20, 35],
    zoom: 1.5,
    markerLabel: "",
    gradient: "from-slate-950 via-slate-900 to-slate-950",
  },
];

/* places I've been — shown on the final "journey" slide */
const journeyPins: { name: string; coordinates: [number, number] }[] = [
  { name: "Andhra Pradesh", coordinates: [79.74, 15.91] },
  { name: "Hyderabad", coordinates: [78.47, 17.38] },
  { name: "Tampere", coordinates: [23.78, 61.5] },
  { name: "Helsinki", coordinates: [24.94, 60.17] },
  { name: "Stockholm", coordinates: [18.07, 59.33] },
  { name: "Dubrovnik", coordinates: [18.09, 42.65] },
  { name: "Istanbul", coordinates: [28.98, 41.01] },
  { name: "Dubai", coordinates: [55.27, 25.2] },
  { name: "Delhi", coordinates: [77.1, 28.7] },
];

/* flight path connecting journey pins */
const journeyPath = journeyPins.map((p) => p.coordinates);

/* ─── map component ─── */
function GlobeMap({ slide, showJourney }: { slide: SlideData; showJourney: boolean }) {
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  const projConfig = {
    center: slide.coordinates as [number, number],
    scale: slide.zoom * 100,
  };

  return (
    <motion.div
      key={slide.id + "-map"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full relative"
    >
      {/* tooltip */}
      {tooltip && (
        <div
          className="absolute z-50 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -120%)" }}
        >
          {tooltip.name}
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={projConfig}
        className="w-full h-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHovered = hoveredGeo === geo.rsmKey;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHovered ? "#475569" : "#1e293b"}
                  stroke="#64748b"
                  strokeWidth={0.8}
                  style={{
                    default: { outline: "none", transition: "fill 0.2s" },
                    hover: { fill: "#475569", outline: "none", cursor: "pointer" },
                    pressed: { fill: "#334155", outline: "none" },
                  }}
                  onMouseEnter={(e) => {
                    setHoveredGeo(geo.rsmKey);
                    const name = geo.properties?.name || "";
                    const rect = (e.target as SVGElement).closest("svg")?.getBoundingClientRect();
                    if (rect) {
                      setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
                    }
                  }}
                  onMouseMove={(e) => {
                    const name = geo.properties?.name || "";
                    const rect = (e.target as SVGElement).closest("svg")?.getBoundingClientRect();
                    if (rect) {
                      setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredGeo(null);
                    setTooltip(null);
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* journey lines */}
        {showJourney &&
          journeyPath.slice(0, -1).map((from, i) => (
            <Line
              key={`line-${i}`}
              from={from}
              to={journeyPath[i + 1]}
              stroke="#f59e0b"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
          ))}

        {/* journey pins */}
        {showJourney &&
          journeyPins.map((pin) => (
            <Marker key={pin.name} coordinates={pin.coordinates}>
              <circle r={6} fill="#f59e0b" stroke="#fff" strokeWidth={2} className="drop-shadow-lg" />
              <text
                textAnchor="middle"
                y={-14}
                style={{ fontSize: 11, fill: "#fbbf24", fontWeight: 700, textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
              >
                {pin.name}
              </text>
            </Marker>
          ))}

        {/* current slide marker */}
        {!showJourney && (
          <Marker coordinates={slide.coordinates}>
            <motion.circle
              r={8}
              fill="#f59e0b"
              stroke="#fff"
              strokeWidth={2}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <text
              textAnchor="middle"
              y={-16}
              style={{ fontSize: 12, fill: "#fbbf24", fontWeight: 700 }}
            >
              {slide.markerLabel}
            </text>
          </Marker>
        )}
      </ComposableMap>
    </motion.div>
  );
}

/* ─── main presentation ─── */
function Presentation() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const slide = slides[current];
  const isJourney = slide.id === "journey";

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slide.gradient} transition-all duration-700 relative overflow-hidden`}>
      {/* map background */}
      <div className="absolute inset-0 opacity-60">
        <GlobeMap slide={slide} showJourney={isJourney} />
      </div>

      {/* content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center flex flex-col items-center gap-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-amber-300 italic">{slide.subtitle}</p>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {slide.body}
            </p>
            {/* facts */}
            {slide.facts && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3 mt-2"
              >
                {slide.facts.map((fact, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm text-white border border-white/10"
                  >
                    {fact}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white disabled:opacity-30 hover:bg-white/20 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-amber-400 scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white disabled:opacity-30 hover:bg-white/20 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* counter */}
      <div className="fixed top-6 right-6 z-50 text-white/50 text-sm font-mono">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}

/* ─── page export ─── */
export default function Story() {
  const [unlocked, setUnlocked] = useState(false);
  return unlocked ? <Presentation /> : <PasswordGate onUnlock={() => setUnlocked(true)} />;
}
