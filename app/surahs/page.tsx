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
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Surahs
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2">
            Explore and search through the Holy Quran
          </p>
        </div>

        {/* Modern Search Bar */}
        <div className="relative flex items-center gap-3 mb-12 group">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search ayah translation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full p-4 pl-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-black dark:focus:ring-white/20 transition-all"
            />
            {/* Search Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={handleSearch}
            className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-bold hover:opacity-90
            transition-opacity shadow-lg shadow-black/5"
          >
            Search
          </button>
        </div>

        {/* Surah Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {surahs.map((s: any) => (
            <Link
              key={s.id}
              href={`/surah/${s.id}`}
              className="group relative overflow-hidden p-6 rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-white
              dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-all duration-300 hover:shadow-xl
              hover:shadow-black/[0.05] dark:hover:shadow-white/[0.02] hover:border-neutral-400 dark:hover:border-neutral-500"
            >
              {/* Decorative ID Background */}
              <span
                className="absolute -top-2 -right-2 text-6xl font-bold opacity-[0.03] dark:opacity-[0.05] pointer-events-none
                group-hover:scale-110 transition-transform duration-500"
              >
                {s.id}
              </span>

              <div className="relative z-10">
                {/* Header: ID, Names, City Icon, and Arabic */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    {/* ID Badge */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100
                      dark:bg-neutral-800 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white
                      dark:group-hover:text-black transition-colors duration-300 text-base font-bold"
                    >
                      {s.id}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white leading-none">
                          {s.surah_name}
                        </h2>
                        <img
                          src={
                            s.type === "meccan" ? "/makkah.png" : "/madinah.png"
                          }
                          alt={s.type}
                          className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                        {s.translation}
                      </p>
                    </div>
                  </div>

                  {/* Arabic Name - Restored & Styled */}
                  <div className="text-right">
                    <p className="text-3xl font-serif text-neutral-900 dark:text-neutral-100 leading-none">
                      {s.surah_name_ar}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-neutral-100 dark:bg-neutral-800 mb-5" />

                {/* Footer Metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-tighter">
                        Verses
                      </span>
                      <span className="text-sm font-bold dark:text-neutral-200">
                        {s.total_verses}
                      </span>
                    </div>

                    <div className="flex flex-col border-l border-neutral-100 dark:border-neutral-800 pl-6">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-tighter">
                        Origin
                      </span>
                      <span
                        className={`text-sm font-bold ${s.type === "meccan" ? "text-amber-600" : "text-emerald-500"}`}
                      >
                        {s.type === "meccan" ? "Makkah" : "Madinah"}
                      </span>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div
                    className="p-2 rounded-full bg-neutral-50 dark:bg-neutral-800 opacity-0 -translate-x-4 group-hover:opacity-100
                    group-hover:translate-x-0 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-neutral-900 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
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
