// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    summary: string;
    responsibilities: string[];
    technologies: string[];
    image: string; // 画像のパス
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "インタビューAIシステム開発",
      summary:
        "企業の商品やサービス利用の理由を自動で収集・分析する「インタビューAIシステム」のフロントエンド開発を担当しました。アンケート形式のインタビュー機能により、顧客からの回答をもとにAIが自然な口コミを生成します。企業はこのシステムを通じて、顧客インサイトを効率的に取得できます。",
      responsibilities: [
        "フロントエンド開発：Reactでのインタビュー画面、管理画面の設計・実装。",
        "API実装：フロントエンドとバックエンド間のデータのやり取りに必要なAPIを設計・構築。",
        "データ管理機能：回答データや顧客情報を管理するデータベースの設計・実装。",
        "ログイン・アカウント管理機能：セキュアなログイン機能と、ユーザーごとのプロフィール管理を提供。",
      ],
      technologies: ["TypeScript", "React", "Supabase"],
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "口コミ自動生成システム開発",
      summary:
        "顧客アンケートから口コミを自動生成し、Google口コミへの投稿を支援するシステムを開発。GPT-4を用いて、アンケート回答をもとに自然な口コミを生成し、SEO効果や集客に貢献します。また、サブスクリプション型で他の企業にも提供可能な仕組みを構築しました。",
      responsibilities: [
        "フロントエンド開発：エンドユーザー、ショップオーナー、クライアント向けのインターフェースを設計・実装。",
        "予約トラッキングおよび管理機能：アンケート回答の収集・保存、GPT-4による口コミ自動生成機能を実装。",
        "サブスクリプション対応：アフィリエイター登録や報酬計算、顧客管理の仕組みを構築し、サブスクリプションサービスの基盤を整備。",
      ],
      technologies: ["TypeScript", "React", "GPT-4", "Supabase"],
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "NEST琵琶湖 予約システム フロントエンド開発",
      summary:
        "宿泊施設NEST琵琶湖の予約システムのフロントエンド開発を担当し、宿泊予約の体験向上を実現しました。デザイナーのイメージをもとに、モバイル対応のユーザーフレンドリーなUIを設計。Supabaseを活用して、予約内容の保存、予約確認やキャンセル機能も提供しています。",
      responsibilities: [
        "予約ページの作成：デザイナーのイメージに基づいた直感的で使いやすい予約ページを構築。",
        "UI/UX設計：ユーザーライクな操作性を意識したデザインとレスポンシブ対応で、各デバイスでの利用をサポート。",
        "予約機能の実装：Supabaseを利用し、予約内容の保存や予約の確認・キャンセル機能を提供。",
      ],
      technologies: ["TypeScript", "React", "Supabase"],
      image: "/images/project3.jpg",
    },
  ];
  