'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/team-building', label: '팀빌딩' },
  { href: '/projects', label: '프로젝트 찾기' },
  { href: '/teams', label: '팀원 찾기' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-5">
        {/* 로고 왼쪽 고정 */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="홈으로 이동">
          <Image src="/logo.png" alt="TeamIT 로고" width={40} height={40} />
          <span className="text-2xl font-bold text-gray-700">TeamIT</span>
        </Link>

        {/* 메뉴 */}
        <div className="flex items-center gap-8 ml-auto">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <div key={href} className="flex flex-col items-center">
                <Link
                  href={href}
                  className={`transition font-semibold ${
                    isActive
                      ? 'text-gray-900 font-bold'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <Image
                    src="/underline.png"
                    alt="선택 표시"
                    width={40}
                    height={6} // ⬅️ 두께 증가
                    className="mt-2 mx-auto"
                  />
                )}
              </div>
            );
          })}

          {/* 로그인 버튼 */}
          <Link
            href="/login"
            className="ml-10 px-5 py-2.5 bg-basecolor text-white rounded-xl hover:bg-blue-500 transition"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}
