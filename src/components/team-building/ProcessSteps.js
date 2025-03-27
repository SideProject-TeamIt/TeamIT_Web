import Image from 'next/image';

const steps = [
  {
    title: '팀원 신청',
    desc: '직무와 팀을 지원',
    image: '/team-building/plus.png',
  },
  {
    title: 'AI 매칭',
    desc: '최적의 팀 구성 추천',
    image: '/team-building/robot.png',
  },
  {
    title: '팀 결성',
    desc: '프로젝트 시작',
    image: '/team-building/check.png',
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-sectionBg py-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">TeamIT 매칭 프로세스</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {steps.map(({ image, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between text-center"
          >
            <Image src={image} alt={title} width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
