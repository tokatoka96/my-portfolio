//src/app/home/page.tsx
"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import WorksSlider from "@/components/WorksSlider";
import { works } from "@/data/works";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CarouselApi } from "@/components/ui/carousel";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CircularText from "@/components/CircularText"; // CircularText.tsx をインポート

export default function Component() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const handlePrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
    } else {
      console.log("Carousel API is not available yet.");
    }
  }, [api]);

  const handleNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    } else {
      console.log("Carousel API is not available yet.");
    }
  }, [api]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* 既存のブロブ */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* 追加のブロブ */}
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-blob animation-delay-5000"></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={scrollToTop} className="text-xl font-medium">
              Ryosuke Tokashiki
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-sm hover:text-gray-600 cursor-pointer"
              >
                Top
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-sm hover:text-gray-600 cursor-pointer"
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="works"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-sm hover:text-gray-600 cursor-pointer"
              >
                Works
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-sm hover:text-gray-600 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </nav>
          </div>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Ryosuke Tokashiki</h1>
              <p className="text-lg mb-8">生成AIエンジニア</p>
              <p className="text-sm text-gray-600 mb-8">
                AIを活用したサービス展開に興味があり、縁があって合同会社アリガトサンで生成AIエンジニアとして業務に従事しています。生成AIの力で効率的なエンジニアリングを実現し、クライアントのビジネス課題を解決しています。
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Ryosuke Tokashiki"
                width={400}
                height={400}
                className="w-full h-auto rounded-full"
              />
              {/* CircularTextコンポーネントを配置 */}
              <CircularText
                text="AI Engineer React Next.js TypeScript"
                radius={60}
                className="absolute -right-8 -bottom-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="works"
        className="py-16 px-4 bg-white/80 backdrop-blur-sm relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Works</h2>
          <WorksSlider works={works} setApi={setApi} />
          <div className="flex justify-center mt-4 gap-2">
            <Button
              onClick={handlePrev}
              className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 w-10 rounded-full p-0"
            >
              ←
            </Button>
            <Button
              onClick={handleNext}
              className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 w-10 rounded-full p-0"
            >
              →
            </Button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-4 bg-[#faf9f7]/80 backdrop-blur-sm relative z-10"
      >
        {/* Contactセクションの内容 */}
      </section>
    </div>
  );
}

const skills = [
  {
    title: "生成AI",
    items: [
      "Claude AI、Chat GPT、GPT-4の活用",
      "自動化や業務効率化の実現",
      "AIを活用したサービス展開",
    ],
  },
  {
    title: "フロントエンド開発",
    items: [
      "React、Next.js、TypeScript、JavaScript",
      "Tailwind CSS",
      "UI/UX設計とレスポンシブデザイン",
    ],
  },
  {
    title: "デザインツール",
    items: [
      "Illustrator、Photoshop",
      "POPやLPデザイン",
      "SNSコンテンツ制作",
    ],
  },
  {
    title: "データベース管理",
    items: [
      "Supabaseを使用したデータベース構築・管理",
      "リアルタイムなデータアクセス対応",
    ],
  },
  {
    title: "その他",
    items: [
      "GitHubを使ったバージョン管理",
      "チームでのコード管理",
      "プロジェクトの品質維持",
    ],
  },
];
