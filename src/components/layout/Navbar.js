import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full px-6 py-5 flex justify-between items-center">
        {/* 로고 + 텍스트 */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="TeamIT 로고" width={40} height={40} />
          <span className="text-2xl font-bold text-gray-700">TeamIT</span>
        </div>

        {/* 메뉴 */}
        <nav className="flex items-center gap-8 text-base text-gray-700">
          <Link href="/team-building" className="hover:text-blue-600">팀빌딩</Link>
          <Link href="/projects" className="hover:text-blue-600">프로젝트 찾기</Link>
          <Link href="/teams" className="hover:text-blue-600">팀원 찾기</Link>
          <Link
            href="/login"
            className="ml-6 px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
}
