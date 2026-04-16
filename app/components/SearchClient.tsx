"use client";

import { useSearchParams } from "next/navigation";
import data from "@/app/data/quran.json";
import Link from "next/link";

export default function SearchClient() {
  const params = useSearchParams();
  const query = (params.get("q") || "").toLowerCase().trim();

  const surahs = Object.values(data.chapters);

  const results = surahs
    .flatMap((surah: any) =>
      Object.values(surah.verses).map((v: any, i: number) => {
        const text = v.translation_eng.toLowerCase();

        if (!query || !text.includes(query)) return null;

        return {
          surahId: surah.id,
          surahName: surah.surah_name,
          ayah: i + 1,
          text: v.translation_eng,
        };
      }),
    )
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">
          Search Results
        </h1>

        <p className="text-gray-500 mb-8">Searched keyword: {query}</p>

        {results.length === 0 ? (
          <p className="text-gray-500">No ayah found</p>
        ) : (
          <div className="space-y-4">
            {results.map((r: any, i: number) => (
              <Link
                key={i}
                href={`/surah/${r.surahId}#ayah-${r.ayah}`}
                className="block p-4 rounded-xl border hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                <p className="text-xs text-gray-500">
                  {r.surahName} • Ayah {r.ayah}
                </p>
                <p className="text-black dark:text-white">{r.text}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
