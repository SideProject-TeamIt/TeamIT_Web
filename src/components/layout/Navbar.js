import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/team-building', label: '팀빌딩' },
  { href: '/projects', label: '프로젝트 찾기' },
  { href: '/teams', label: '팀원 찾기' },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-5">
        {/* 로고 왼쪽 고정 */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="홈으로 이동">
          <Image src="/logo.png" alt="TeamIT 로고" width={40} height={40} />
          <span className="text-2xl font-bold text-gray-700">TeamIT</span>
        </Link>

        {/* 메뉴 및 로그인 우측 정렬 */}
        <div className="flex items-center gap-6 text-base text-gray-700 ml-auto">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-blue-600">
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-4 px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}
