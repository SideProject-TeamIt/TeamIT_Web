/*
코드 설명 : 서비스 장점 섹션을 구성하는 컴포넌트입니다.
*/

import Image from 'next/image';

const benefits = [
  {
    image: '/home/guard.png',
    title: '신뢰할 수 있는 팀 빌딩',
    desc: '검증된 팀원들과 함께\n안전한 프로젝트를 시작하세요',
  },
  {
    image: '/home/puzzle.png',
    title: '역할별 맞춤 매칭',
    desc: '각 역할에 맞는 최적의\n팀원을 찾아드립니다',
  },
  {
    image: '/home/rocket.png',
    title: '간편한 프로젝트 시작',
    desc: '복잡한 절차 없이\n빠르게 시작하세요',
  },
];

export default function ServiceBenefits() {
  return (
    <section className="bg-sectionBg py-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">서비스 장점</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {benefits.map(({ image, title, desc }) => (
          <div key={title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between text-center">
            <Image src={image} alt={title} width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed whitespace-pre-line">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}