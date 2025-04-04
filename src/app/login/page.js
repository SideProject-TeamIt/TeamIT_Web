'use client';

import LoginSection from '@/components/login/LoginSection';

export default function TeamBuildingPage() {
  return (
    <main className="bg-[#EDF2FF] text-gray-800 flex justify-center items-center min-h-screen">
      <LoginSection />
      <style jsx>{`
        footer {
          margin-top: 1rem; /* 로그인 페이지에서만 푸터 간격 조정 */
        }
      `}</style>
    </main>
  );
}
