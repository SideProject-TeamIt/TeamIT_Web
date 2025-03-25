import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        {/* 로고 및 설명 */}
        <div className="flex flex-col items-start gap-2">
          <Image src="/logo.png" alt="TeamIT Logo" width={36} height={36} />
          <p className="text-gray-700 mt-2">프로젝트 팀 빌딩 플랫폼</p>
        </div>

        {/* 서비스 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">서비스</h4>
          <ul className="space-y-1">
            <li>프로젝트 찾기</li>
            <li>팀원 찾기</li>
            <li>팀 빌딩</li>
          </ul>
        </div>

        {/* 회사 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">회사</h4>
          <ul className="space-y-1">
            <li>회사 소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>

        {/* 문의 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">문의</h4>
          <ul className="space-y-1">
            <li>고객센터</li>
            <li>이메일: support@teamit.co.kr</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © 2024 TeamIT. All rights reserved.
      </div>
    </footer>
  );
}
