"use client";

type FontType = "amiri" | "reem";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  settings: {
    arabicFont: FontType;
    arabicSize: number;
    translationSize: number;
  };
  setSettings: (s: any) => void;
};

export default function SettingsSidebar({
  isOpen,
  onClose,
  settings,
  setSettings,
}: Props) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-neutral-950 border-l border-neutral-200
          dark:border-neutral-800 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Settings
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-black dark:hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-500">
              Arabic Font
            </label>

            <select
              value={settings.arabicFont}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  arabicFont: e.target.value as FontType,
                })
              }
              className="w-full mt-2 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white"
            >
              <option value="amiri">📖 Amiri — Classical Mushaf</option>
              <option value="reem">🧱 Reem Kufi — Modern </option>
            </select>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-neutral-500">
                Arabic Size
              </label>
              <span className="text-xs text-neutral-400">
                {settings.arabicSize}px
              </span>
            </div>

            <input
              type="range"
              min="20"
              max="48"
              value={settings.arabicSize}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  arabicSize: Number(e.target.value),
                })
              }
              className="w-full mt-3 accent-black dark:accent-white"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-neutral-500">
                Translation Size
              </label>
              <span className="text-xs text-neutral-400">
                {settings.translationSize}px
              </span>
            </div>

            <input
              type="range"
              min="12"
              max="28"
              value={settings.translationSize}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  translationSize: Number(e.target.value),
                })
              }
              className="w-full mt-3 accent-black dark:accent-white"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
