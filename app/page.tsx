import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-neutral-900 px-4">
      <h1
        className="absolute top-4 left-1/2 -translate-x-1/2
        text-3xl md:text-7xl font-bold tracking-tight
        text-neutral-900 dark:text-white"
      >
        Quranly
      </h1>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p
          className="font-amiri text-3xl md:text-5xl
          text-neutral-800 dark:text-neutral-200 mb-10 leading-relaxed"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 mb-8">
          A all in one minimalistic app for your Quran reading experience
        </p>
        <Link
          href="/surahs"
          className="inline-block px-8 py-4 text-lg font-medium rounded-2xl
          bg-black text-white dark:bg-white dark:text-black
          hover:opacity-90 transition"
        >
          Start Reading
        </Link>
      </div>
    </main>
  );
}
