import Link from 'next/link';

const roles = [
  { count: 19, role: 'PM', color: 'text-orange-500' },
  { count: 15, role: '디자이너', color: 'text-green-500' },
  { count: 31, role: '프론트엔드', color: 'text-purple-500' },
  { count: 27, role: '백엔드', color: 'text-rose-500' },
];

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-[2rem] mx-4 md:mx-8 my-12 px-6 py-16 text-center shadow">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">AI 기반 스마트 팀빌딩</h2>
      <p className="text-gray-600 mb-10">
        AI 기술을 활용하여 프로젝트의 성공을 위한 최적의 팀을 구성해드립니다
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
        {roles.map(({ count, role, color }) => (
          <div
            key={role}
            className="bg-white rounded-xl py-8 px-6 shadow-sm flex flex-col items-center"
          >
            <span className={`text-2xl font-bold ${color}`}>{count}명</span>
            <p className="text-sm text-gray-800 mt-1">{role}</p>
            <p className="text-sm text-gray-400">신청 대기중</p>
          </div>
        ))}
      </div>

      <Link
        href="/team-building/apply"
        className="inline-block px-8 py-3.5 bg-basecolor text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition"
      >
        팀빌딩 신청하기
      </Link>
    </section>
  );
}
