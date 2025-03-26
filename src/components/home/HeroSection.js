/*
코드 설명 : 히어로 섹션 컴포넌트
*/

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            당신의 완벽한 팀을 찾아보세요
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            프로젝트의 성공을 위한 최적의 팀원들과 함께하세요
          </p>
          <Link
            href="/team-building"
            className="inline-block px-6 py-3 bg-basecolor text-white rounded-lg text-base hover:bg-blue-700 transition"
          >
            지금 시작하기
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/logo.png"
            alt="TeamIT 일러스트"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
