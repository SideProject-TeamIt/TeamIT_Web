/*
코드 설명 : 서비스 장점 섹션을 구성하는 컴포넌트입니다.
*/
const benefits = [
    {
      icon: '🛡️',
      title: '신뢰할 수 있는 팀 빌딩',
      desc: '검증된 팀원들과 함께 안전한 프로젝트를 시작하세요',
    },
    {
      icon: '🧩',
      title: '역할별 맞춤 매칭',
      desc: '각 역할에 맞는 최적의 팀원을 찾아드립니다',
    },
    {
      icon: '🚀',
      title: '간편한 프로젝트 시작',
      desc: '복잡한 절차 없이 빠르게 시작하세요',
    },
  ];
  
  export default function ServiceBenefits() {
    return (
      <section className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">서비스 장점</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {benefits.map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-xl p-6 hover:shadow transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  