import { MessageSquare } from "lucide-react";

export default function AdminMessagesPage() {
  return (
    <section className="rounded-3xl border border-white/60 bg-white/45 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <MessageSquare className="text-amber-500" size={24} />
      <h1 className="mt-5 text-3xl font-bold">Messages</h1>
      <p className="mt-2 text-sm text-black/60 dark:text-white/60">
        Review messages and enquiries from your portfolio.
      </p>
    </section>
  );
}
