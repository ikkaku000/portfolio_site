import Link from "next/link";
import type { Metadata } from "next";
import { works } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works",
  description: "AIを活用した制作物の一覧ページ",
};

export default function WorksPage() {
  return (
    <section className="w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">作品一覧</h1>
        <p className="mt-2 text-zinc-600">
          制作背景から成果まで確認できるように、各作品の詳細ページを用意しています。
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {works.map((work) => (
          <article
            key={work.slug}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{work.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{work.summary}</p>
            <p className="mt-3 text-xs font-medium text-zinc-500">
              掲載先: {work.client}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {work.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-zinc-700">成果: {work.result}</p>
            <Link
              href={`/works/${work.slug}`}
              className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:text-blue-500"
            >
              詳細を見る →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
