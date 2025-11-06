import { useEffect, useState } from "react";
import { Quote, RefreshCw } from "lucide-react";

const QUOTES = [
  "Begin your day with Bismillah and your heart with gratitude.",
  "Allah is with the patient. Breathe, trust, and continue.",
  "Small consistent steps are beloved—keep moving with sincerity.",
  "Your worth is not measured by pace, but by intention.",
  "Let your dua be your anchor and your smile be your sadaqah.",
  "Storms pass. Roots deepen. Hearts soften.",
  "You are exactly where you need to be to learn and blossom.",
];

export default function DailyMotivation() {
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    // Rotate quote daily based on date seed
    const idx = new Date().getDate() % QUOTES.length;
    setQuote(QUOTES[idx]);
  }, []);

  const shuffle = () => {
    const next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(next);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-rose-50 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-xl bg-white p-3 shadow-sm">
            <Quote className="w-6 h-6 text-emerald-700" />
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed">{quote}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <span>Gentle Reminder</span>
              <button
                onClick={shuffle}
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
                aria-label="Shuffle quote"
              >
                <RefreshCw className="w-4 h-4" /> New inspiration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
