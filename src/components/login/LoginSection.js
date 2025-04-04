'use client'

import LoginHeader from "./LoginHeader";
import SocialLoginGroup from "./SocialLoginGroup";
import TermsNotice from "./TermsNotice";

export default function LoginSection() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-md w-[400px] text-center">
      <LoginHeader />
      <SocialLoginGroup />
      <TermsNotice />
    </section>
  );
}
