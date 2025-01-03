"use client";

import { useState } from "react";
import WorksSlider from "@/components/WorksSlider";
import { works } from "@/data/works";
import { CarouselApi } from "@/components/ui/carousel";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CircularText from "@/components/CircularText";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  const [, setApi] = useState<CarouselApi | null>(null);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
            </nav>
          </div>
        </div>
      </header>

     <section id="hero" className="pt-32 pb-8 md:pb-16 px-4 relative z-10">
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6">Ryosuke Tokashiki</h1>
        <p className="text-lg mb-8">生成AIエンジニア</p>
        <p className="text-sm text-gray-600 mb-4 md:mb-8">
          AIを活用したサービス展開に興味があり、縁があって前職では、生成AIエンジニアとして業務に従事しておりました、。生成AIの力で効率的なエンジニアリングを実現し、クライアントのビジネス課題を解決しています。
        </p>
      </div>
      <div className="relative h-[400px] -mt-8 md:mt-0">
        <CircularText
          text="React Next.js TypeScript Figma Chat-GPT AI Engineer"
          radius={180}
          fontSize={18}
          color="#1a1a1a"
          rotationSpeed={30}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
      "Claude AI、Chat GPT、v0の活用",
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

