import Image from 'next/image';
import Link from 'next/link';

const footerData = [
  {
    title: '서비스',
    links: [
      { text: '프로젝트 찾기', href: '/projects' },
      { text: '팀원 찾기', href: '/teams' },
      { text: '팀 빌딩', href: '/team-building' },
    ],
  },
  {
    title: '회사',
    links: [
      { text: '회사 소개', href: '/about' },
      { text: '이용약관', href: '/terms' },
      { text: '개인정보처리방침', href: '/privacy' },
    ],
  },
  {
    title: '문의',
    links: [
      { text: '고객센터', href: '/support' },
      { text: '이메일: support@teamit.co.kr', href: 'mailto:support@teamit.co.kr' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        {/* 로고 및 소개 */}
        <div className="flex flex-col items-start gap-2">
          <Image src="/logo.png" alt="TeamIT 로고" width={36} height={36} />
          <p className="text-gray-700 mt-2">프로젝트 팀 빌딩 플랫폼</p>
        </div>

        {/* 각 메뉴 섹션 */}
        {footerData.map(({ title, links }) => (
          <div key={title}>
            <h4 className="font-semibold text-gray-800 mb-3">{title}</h4>
            <ul className="space-y-1">
              {links.map(({ text, href }) => (
                <li key={text}>
                  {href.startsWith('mailto:') ? (
                    <a href={href} className="hover:text-blue-600">{text}</a>
                  ) : (
                    <Link href={href} className="hover:text-blue-600">{text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © 2024 TeamIT. All rights reserved.
      </div>
    </footer>
  );
}
