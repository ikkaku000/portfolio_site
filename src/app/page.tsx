import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "AI活用の制作実績をまとめたポートフォリオのトップページ",
};

export default function Home() {
  return (
    <section className="flex w-full flex-col gap-10">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-wide text-blue-700">
          AI Portfolio
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          AI活用の制作実績をまとめたポートフォリオ
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          業務効率化ツール、自動化ツール、Webアプリなど、課題解決を目的に作った成果物を掲載しています。
          作品の背景、担当範囲、成果まで一目で分かる構成を目指しています。
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/works"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            作品を見る
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100"
          >
            プロフィール
          </Link>
        </div>
      </div>
    </section>
  );
}
