"use client";

import { useState } from "react";
import data from "@/app/data/quran.json";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SurahsPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const surahs = Object.values(data.chapters);

  const handleSearch = () => {
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Surahs
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2">
            Explore and search through the Holy Quran
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-3 mb-12">
          <input
            type="text"
            placeholder="Search ayah translation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />

          <button
            onClick={handleSearch}
            className="px-6 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-bold"
          >
            Search
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {surahs.map((s: any) => (
            <Link
              key={s.id}
              href={`/surah/${s.id}`}
              className="group relative overflow-hidden p-6 rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50"
            >
              {/* ID BG */}
              <span className="absolute -top-2 -right-2 text-6xl font-bold opacity-5 pointer-events-none">
                {s.id}
              </span>

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    {/* ID */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800 font-bold">
                      {s.id}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        {s.surah_name}

                        <img
                          src={
                            s.type === "meccan" ? "/makkah.png" : "/madinah.png"
                          }
                          className="w-5 h-5"
                          alt=""
                        />
                      </h2>

                      <p className="text-xs text-neutral-400 uppercase">
                        {s.translation}
                      </p>
                    </div>
                  </div>

                  {/* ARABIC (FIXED FONT) */}
                  <div className="text-right">
                    <p className="text-3xl text-neutral-900 dark:text-white font-[var(--font-amiri)]">
                      {s.surah_name_ar}
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-5" />

                {/* FOOTER */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-[10px] text-neutral-400">Verses</p>
                    <p className="font-bold">{s.total_verses}</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-neutral-400">Origin</p>
                    <p
                      className={
                        s.type === "meccan"
                          ? "text-amber-600"
                          : "text-emerald-500"
                      }
                    >
                      {s.type === "meccan" ? "Makkah" : "Madinah"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
