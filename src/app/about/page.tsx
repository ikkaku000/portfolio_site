import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "制作スタイルや得意領域を紹介するプロフィールページ",
};

export default function AboutPage() {
  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="mt-4 leading-8 text-zinc-700">
        AIを活用した業務効率化やWebアプリ制作を中心に、課題の整理から実装、公開までを一貫して行っています。
        小さく早く作って検証し、改善を重ねる開発スタイルが得意です。
      </p>
      <p className="mt-4 leading-8 text-zinc-700">
        このサイトでは、制作背景・担当範囲・成果をセットで示し、何をどう作れるかを短時間で理解してもらえる構成を目指しています。
      </p>
    </section>
  );
}
