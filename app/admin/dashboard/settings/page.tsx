import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <section className="rounded-3xl border border-white/60 bg-white/45 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <Settings className="text-emerald-500" size={24} />
      <h1 className="mt-5 text-3xl font-bold">Settings</h1>
      <p className="mt-2 text-sm text-black/60 dark:text-white/60">
        Configure your admin workspace preferences.
      </p>
    </section>
  );
}
