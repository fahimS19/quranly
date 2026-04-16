"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import data from "@/app/data/quran.json";
import SettingsSidebar from "@/app/components/SettingsSidebar";

type FontType = "amiri" | "reem";

export default function SurahPage() {
  const { id } = useParams();
  const surah = data.chapters[id as keyof typeof data.chapters];

  const [settings, setSettings] = useState({
    arabicFont: "amiri" as FontType,
    arabicSize: 28,
    translationSize: 16,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [jump, setJump] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const verses = Object.values(surah.verses);

  const handleJump = () => {
    const num = Number(jump);

    if (!num || num < 1 || num > surah.total_verses) {
      alert(`Enter a number between 1 and ${surah.total_verses}`);
      return;
    }

    const el = document.getElementById(`ayah-${num}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    setTimeout(() => {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
              {surah.surah_name}
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400">
              {surah.translation} • {surah.total_verses} Ayahs
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder={`jump to ayah(1 - ${surah.total_verses})`}
              value={jump}
              onChange={(e) => setJump(e.target.value)}
              className="w-47 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm"
            />

            <button
              onClick={handleJump}
              className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
            >
              Go
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm"
            >
              Settings
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {verses.map((v, i) => (
            <div
              key={i}
              id={`ayah-${i + 1}`}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <p
                className={`text-right leading-loose mb-4 ${
                  settings.arabicFont === "amiri" ? "font-amiri" : "font-reem"
                }`}
                style={{ fontSize: settings.arabicSize }}
              >
                {v.content}
              </p>
              <p
                className="text-neutral-700 dark:text-neutral-300"
                style={{ fontSize: settings.translationSize }}
              >
                {v.translation_eng}
              </p>

              <p className="text-xs text-neutral-400 mt-3">Ayah {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <SettingsSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        settings={settings}
        setSettings={setSettings}
      />
    </main>
  );
}
