/*
코드 설명 : 직군 탐색 섹션
*/

import Image from 'next/image';

const roles = [
  { image: '/home/pm.png', title: 'PM', desc: '프로젝트를 이끌어갈 PM을 찾아보세요' },
  { image: '/home/designer.png', title: '디자이너', desc: '아름다운 디자인을 만들 디자이너를 찾아보세요' },
  { image: '/home/developer.png', title: '개발자', desc: '기술력 있는 개발자와 함께하세요' },
];

export default function RoleSection() {
  return (
    <section className="bg-sectionBg py-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">역할별 탐색</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {roles.map(({ image, title, desc }) => (
          <div key={title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between text-center">
            <Image src={image} alt={title} width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}