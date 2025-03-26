/*
코드 설명 : 히어로 섹션 컴포넌트 (디자인 개선)
*/
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-32">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          당신의 <span className="text-blue-600">완벽한 팀</span>을 찾아보세요
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          프로젝트의 성공을 위한 최적의 팀원들과 함께하세요
        </p>
        <Link
          href="/team-building"
          className="inline-block px-7 py-3.5 bg-basecolor text-white text-base font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          지금 시작하기
        </Link>
      </div>
    </section>
  );
}
