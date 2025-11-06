import { Moon, Sparkles, Instagram, Linkedin, Mail } from "lucide-react";

export default function HeroProfile() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-rose-50 to-white" />

      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-emerald-300 via-rose-200 to-amber-200 p-[3px]">
              <div className="w-full h-full rounded-full bg-white grid place-items-center">
                <span className="text-3xl md:text-4xl" aria-hidden>🧕🏽</span>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 text-sm font-medium">
              <Moon className="w-4 h-4" />
              Calm & grounded
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
              As-salamu alaykum, I’m Amina
            </h1>
            <p className="mt-3 text-slate-600 max-w-xl">
              A gentle corner on the web to reflect, grow, and radiate kindness. I share
              daily motivations and mindful notes rooted in faith and compassion.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Soft motif */}
        <div className="mt-10 grid grid-cols-3 gap-2 opacity-60">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-md bg-gradient-to-tr from-transparent via-emerald-100/50 to-rose-100/50"
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-emerald-700">
          <Sparkles className="w-4 h-4" />
          <p className="text-sm">Be gentle with your heart. Every step matters.</p>
        </div>
      </div>
    </section>
  );
}
