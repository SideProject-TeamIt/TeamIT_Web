export default function LoginHeader() {
    return (
      <div className="mb-6">
        <img
          src="/logo.png" // 로고 이미지 경로에 맞게 수정하세요
          alt="TeamIT Logo"
          className="mx-auto w-20 h-20"
        />
        <h1 className="text-xl font-bold mt-4">TeamIT에 오신 것을 환영합니다</h1>
        <p className="text-sm text-gray-500 mt-2">소셜 계정으로 간편하게 로그인하세요</p>
      </div>
    );
  }
  