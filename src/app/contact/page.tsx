import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "お問い合わせ先メールアドレスを掲載する連絡ページ",
};

export default function ContactPage() {
  const email = "your-email@example.com";

  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-zinc-700">
        お問い合わせは以下のメールアドレスからお願いします。
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-5 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700"
      >
        {email}
      </a>
    </section>
  );
}
