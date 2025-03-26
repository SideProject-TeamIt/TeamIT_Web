/*
코드 설명 : 프로젝트 탐색 페이지에서 역할별로 팀원을 찾을 수 있는 섹션을 구현합니다.
*/


const roles = [
    { icon: '📝', title: 'PM', desc: '프로젝트를 이끌어갈 PM을 찾아보세요' },
    { icon: '🎨', title: '디자이너', desc: '아름다운 디자인을 만들 디자이너를 찾아보세요' },
    { icon: '💻', title: '개발자', desc: '기술력 있는 개발자와 함께하세요' },
  ];
  
  export default function RoleSection() {
    return (
      <section className="bg-white py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">역할별 탐색</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {roles.map(({ icon, title, desc }) => (
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
  