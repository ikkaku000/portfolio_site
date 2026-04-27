export type Work = {
  slug: string;
  title: string;
  summary: string;
  background: string;
  client: string;
  technologies: string[];
  role: string;
  result: string;
  imagePath: string;
  imageAlt: string;
  links: {
    github?: string;
    demo?: string;
  };
};

export const works: Work[] = [
  {
    slug: "ai-meeting-minutes",
    title: "AI議事録生成ツール",
    summary:
      "会議音声から議事録を自動生成し、要点とアクションアイテムを抽出するWebアプリ。",
    background:
      "議事録作成に毎回30分以上かかる課題を解決するために開発。記録品質の平準化も狙った。",
    client: "国内BtoB SaaS企業（匿名化）",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Supabase"],
    role: "要件定義、設計、実装、デプロイまで一貫して担当",
    result:
      "議事録作成時間を約70%短縮。初稿生成を数分で完了し、レビュー中心の運用に変更できた。",
    imagePath: "/works/ai-meeting-minutes.svg",
    imageAlt: "AI議事録生成ツールのダッシュボード画面",
    links: {
      github: "https://github.com/example/ai-meeting-minutes",
      demo: "https://example-demo.com/ai-meeting-minutes",
    },
  },
  {
    slug: "invoice-auto-checker",
    title: "請求書突合の自動化ツール",
    summary:
      "請求書PDFと受発注データを突合し、差分項目を自動検出するデスクトップ向けツール。",
    background:
      "月末の請求処理で目視確認が集中し、担当者の残業が常態化していたため、確認作業の自動化を実施。",
    client: "地方製造業グループ会社（匿名化）",
    technologies: ["Python", "Pandas", "OCR", "Electron"],
    role: "業務ヒアリング、PoC作成、運用導入、保守改善",
    result:
      "請求確認の作業時間を月40時間削減。転記ミスの検出率を向上し、再発防止フローを整備。",
    imagePath: "/works/invoice-auto-checker.svg",
    imageAlt: "請求書差分の検出結果を表示する画面",
    links: {
      demo: "https://example-demo.com/invoice-auto-checker",
    },
  },
  {
    slug: "recruitment-faq-bot",
    title: "採用向けFAQチャットボット",
    summary:
      "採用候補者からのよくある質問に24時間回答する、社内ナレッジ連携型チャットボット。",
    background:
      "説明会後の問い合わせが集中し、対応のばらつきが発生。回答品質の統一と即時対応を目的に開発。",
    client: "IT企業 採用部門（匿名化）",
    technologies: ["Next.js", "TypeScript", "RAG", "OpenAI API", "Vercel"],
    role: "情報設計、プロンプト設計、フロント実装、分析レポート作成",
    result:
      "一次回答の自動化率が65%に到達。採用担当者の対応負荷を削減し、回答速度を平均2営業日から即時へ改善。",
    imagePath: "/works/recruitment-faq-bot.svg",
    imageAlt: "採用FAQボットの会話UI",
    links: {
      github: "https://github.com/example/recruitment-faq-bot",
    },
  },
];

export const getWorkBySlug = (slug: string) =>
  works.find((work) => work.slug === slug);
