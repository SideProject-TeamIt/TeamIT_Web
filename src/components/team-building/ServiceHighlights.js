import Image from 'next/image';

const highlights = [
  {
    icon: '/team-building/ai.png',
    title: 'AI 매칭',
    desc: '데이터 기반으로 최적의 팀원을 매칭해드립니다',
  },
  {
    icon: '/team-building/pichart.png',
    title: '높은 매칭률',
    desc: '90% 이상의 팀 매칭 성공률을 자랑합니다',
  },
  {
    icon: '/team-building/watch.png',
    title: '빠른 매칭',
    desc: '평균 3일 이내 팀 구성 완료',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-sectionBg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 text-center">
        {highlights.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center"
          >
            <Image src={icon} alt={title} width={56} height={56} className="mb-4" />
            <h4 className="text-base font-bold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
