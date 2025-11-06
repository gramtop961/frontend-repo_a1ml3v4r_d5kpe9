import HeroProfile from "./components/HeroProfile";
import DailyMotivation from "./components/DailyMotivation";
import PrayerTimes from "./components/PrayerTimes";
import SimpleChatbot from "./components/SimpleChatbot";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeroProfile />
      <DailyMotivation />
      <PrayerTimes />
      <SimpleChatbot />
      <footer className="text-center text-sm text-slate-500 py-8">
        Made with calm and care • May your day be filled with barakah
      </footer>
    </div>
  );
}

export default App;
