import Image from 'next/image';

const features = [
  {
    icon: '/team-building/db.png',
    title: '데이터 기반 매칭',
    points: [
      '10,000+ 성공적인 프로젝트 데이터 분석',
      '멤버 성향 분석 및 최적 조합 도출',
      '실시간 프로젝트 트렌드 반영',
    ],
  },
  {
    icon: '/team-building/chart.png',
    title: '맞춤형 팀 구성',
    points: [
      '프로젝트 목표에 따른 최적 인력 구성',
      '팀원 간 커뮤니케이션 스타일 매칭',
      '업무 시간대 및 지역 고려',
    ],
  },
  {
    icon: '/team-building/guard.png',
    title: '보안 및 신뢰성',
    points: [
      '검증된 팀원 프로필 관리',
      '신원 인증 시스템 적용',
      '안전한 매칭 보장',
    ],
  },
  {
    icon: '/team-building/chat.png',
    title: '커뮤니케이션 최적화',
    points: [
      '팀원 간 소통 스타일 분석',
      '실시간 피드백 시스템',
      '협업 도구 연동 지원',
    ],
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-sectionBg py-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
        AI 매칭 알고리즘의 특별한 점
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {features.map(({ icon, title, points }) => (
          <div
            key={title}
            className="flex items-start gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
          >
            <Image src={icon} alt={title} width={40} height={40} />
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
