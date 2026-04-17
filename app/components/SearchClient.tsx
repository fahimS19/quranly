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
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3
        text-neutral-900 dark:text-white tracking-tight"
        >
          Search Results
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Showing results for{" "}
          <span className="font-semibold text-black dark:text-white px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800">
            {query || "…"}
          </span>
        </p>

        {results.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
              No results found
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6">
              We couldn’t find any ayah matching{" "}
              <span className="font-medium text-black dark:text-white">
                "{query}"
              </span>
            </p>

            <Link
              href="/surahs"
              className="inline-block px-6 py-3 rounded-xl
              bg-black text-white dark:bg-white dark:text-black
              hover:opacity-90 transition"
            >
              Browse Surahs
            </Link>
          </div>
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
