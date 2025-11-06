import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";

const SUGGESTIONS = [
  "Give me a gentle motivation",
  "How can I build a calm morning routine?",
  "Share a short dua for today",
];

function botReply(text) {
  const t = text.toLowerCase();
  if (t.includes("dua")) {
    return "Dua: Ya Rabb, fill my heart with sakinah (tranquility), guide my steps, and make today a source of goodness for me and others.";
  }
  if (t.includes("morning") || t.includes("routine")) {
    return "Start with Bismillah, hydrate, a few deep breaths, and 2 raka'ahs of sunnah. Keep your phone away for the first 20 minutes.";
  }
  if (t.includes("motivation") || t.includes("inspire")) {
    return "Remember: Allah is closer than your worries. Take one sincere step; barakah meets effort.";
  }
  return "I'm here to help with simple reflections, routines, and duas. Ask me anything gently.";
}

export default function SimpleChatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Salam! I’m your gentle companion. Ask a simple question or pick a suggestion." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const reply = botReply(text);
    setMessages((m) => [...m, { role: "user", content: text }, { role: "bot", content: reply }]);
    setInput("");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-16">
      <div className="rounded-2xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold text-slate-800">Gentle Chat</div>
          <div className="flex gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "bot" && (
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-slate-800"}`}>
                {m.content}
              </div>
              {m.role === "user" && (
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 grid place-items-center">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type your gentle question..."
            className="flex-1 rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button onClick={send} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700">
            <Send className="w-4 h-4" /> Send
          </button>
        </div>
      </div>
    </section>
  );
}
