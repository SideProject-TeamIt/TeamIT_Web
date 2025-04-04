export default function TermsNotice() {
    return (
      <p className="text-xs text-gray-400 mt-6">
        로그인 시{" "}
        <a href="/terms" className="text-blue-500 underline">
          이용약관
        </a>{" "}
        및{" "}
        <a href="/privacy" className="text-blue-500 underline">
          개인정보 처리방침
        </a>
        에 동의하게 됩니다
      </p>
    );
  }
  