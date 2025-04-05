'use client';

import LoginSection from '@/components/login/LoginSection';
import CloseButton from '@/components/common/CloseButton';

export default function LoginPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="bg-[#EDF2FF] text-gray-800 flex justify-center items-center min-h-screen relative">
      {/* 우상단 CloseButton */}
      <CloseButton onClick={handleBack} />
      <LoginSection />
    </main>
  );
}