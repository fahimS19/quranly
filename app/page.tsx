export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
          Quran Reader
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Read, search, and explore the Quran with a clean and simple
          experience.
        </p>

        <a
          href="/surahs"
          className="inline-block px-6 py-3 text-lg font-medium rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Start Reading
        </a>
      </div>
    </main>
  );
}
