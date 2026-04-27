import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug } from "@/lib/works";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "作品詳細",
    };
  }

  return {
    title: `${work.title}`,
    description: work.summary,
    openGraph: {
      title: `${work.title} | Masas Portfolio`,
      description: work.summary,
      type: "article",
      images: [
        {
          url: work.imagePath,
          width: 1200,
          height: 630,
          alt: work.imageAlt,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <article className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold text-blue-700">作品詳細</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{work.title}</h1>
      <p className="mt-4 text-zinc-700">{work.summary}</p>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        掲載先: {work.client}
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
        <Image
          src={work.imagePath}
          alt={work.imageAlt}
          width={1200}
          height={630}
          className="h-auto w-full"
          priority
        />
      </div>

      <dl className="mt-8 grid gap-6">
        <div>
          <dt className="text-sm font-semibold text-zinc-900">制作背景 / 解決した課題</dt>
          <dd className="mt-1 text-sm leading-7 text-zinc-600">{work.background}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-zinc-900">使用技術</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-zinc-900">担当範囲</dt>
          <dd className="mt-1 text-sm leading-7 text-zinc-600">{work.role}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-zinc-900">成果</dt>
          <dd className="mt-1 text-sm leading-7 text-zinc-600">{work.result}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-zinc-900">画像</dt>
          <dd className="mt-1 text-sm leading-7 text-zinc-600">
            {work.imageAlt}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-zinc-900">関連リンク</dt>
          <dd className="mt-2 flex flex-wrap gap-4 text-sm">
            {work.links.github ? (
              <a
                href={work.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-500"
              >
                GitHub
              </a>
            ) : null}
            {work.links.demo ? (
              <a
                href={work.links.demo}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-500"
              >
                Demo
              </a>
            ) : null}
          </dd>
        </div>
      </dl>

      <Link
        href="/works"
        className="mt-8 inline-block text-sm font-semibold text-zinc-700 hover:text-zinc-500"
      >
        ← 作品一覧へ戻る
      </Link>
    </article>
  );
}
