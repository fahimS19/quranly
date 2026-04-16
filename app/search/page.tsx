// app/search/page.tsx

"use client";

import { useSearchParams } from "next/navigation";
import data from "@/app/data/quran.json";
import Link from "next/link";

export default function SearchPage() {
  const params = useSearchParams();
  const query = (params.get("q") || "").toLowerCase();

  const surahs = Object.values(data.chapters);

  const results = surahs.flatMap((surah: any) =>
    Object.values(surah.verses)
      .filter((v: any) => v.translation_eng.toLowerCase().includes(query))
      .map((v: any, index: number) => ({
        surahId: surah.id,
        surahName: surah.surah_name,
        ayah: index + 1,
        text: v.translation_eng,
      })),
  );

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Search Results
        </h1>

        <p className="text-neutral-500 dark:text-neutral-400 mb-8">
          Query: "{query}"
        </p>

        {/* Results */}
        {results.length === 0 ? (
          <p className="text-neutral-500">No ayah found</p>
        ) : (
          <div className="space-y-4">
            {results.map((r: any, i: number) => (
              <Link
                key={i}
                href={`/surah/${r.surahId}#ayah-${r.ayah}`}
                className="block p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <p className="text-xs text-neutral-500 mb-1">
                  {r.surahName} • Ayah {r.ayah}
                </p>
                <p className="text-neutral-900 dark:text-white">{r.text}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
