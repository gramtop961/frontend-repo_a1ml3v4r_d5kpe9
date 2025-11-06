import { useEffect, useState } from "react";
import { MapPin, Sun, Moon } from "lucide-react";

export default function PrayerTimes() {
  const [city, setCity] = useState("");
  const [times, setTimes] = useState(null);

  useEffect(() => {
    // Try to fetch city via geolocation
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        // Using Aladhan public API for prayer times
        const res = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        const data = await res.json();
        if (data?.data?.timings) {
          setTimes(data.data.timings);
        }
        // Reverse geocode city name (simple open API)
        const locRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const loc = await locRes.json();
        setCity(loc?.address?.city || loc?.address?.town || loc?.address?.village || "Your area");
      } catch (e) {
        console.error(e);
      }
    });
  }, []);

  const items = [
    { label: "Fajr", key: "Fajr", icon: <Moon className="w-4 h-4" /> },
    { label: "Dhuhr", key: "Dhuhr", icon: <Sun className="w-4 h-4" /> },
    { label: "Asr", key: "Asr", icon: <Sun className="w-4 h-4" /> },
    { label: "Maghrib", key: "Maghrib", icon: <Sun className="w-4 h-4" /> },
    { label: "Isha", key: "Isha", icon: <Moon className="w-4 h-4" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-6">
      <div className="rounded-2xl border bg-white/70 backdrop-blur-sm border-emerald-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span className="font-medium">{city || "Detecting location..."}</span>
          </div>
          <span className="text-sm text-slate-500">Prayer Times</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {items.map((it) => (
            <div key={it.key} className="rounded-xl border border-emerald-100 p-4 text-center bg-gradient-to-b from-emerald-50 to-white">
              <div className="mx-auto w-8 h-8 rounded-lg bg-white grid place-items-center shadow-sm text-emerald-700">
                {it.icon}
              </div>
              <div className="mt-2 text-sm text-slate-500">{it.label}</div>
              <div className="mt-1 font-semibold text-slate-800">
                {times ? times[it.key] : "--:--"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
