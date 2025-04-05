import {FaGithub, FaGoogle } from "react-icons/fa";
import {RiKakaoTalkFill} from "react-icons/ri";
import SocialLoginButton from "./SocialLoginButton";

const socialLogins = [
  {
    provider: "kakao",
    bgColor: "bg-[#FEE500]",
    textColor: "text-black",
    text: "카카오톡으로 로그인",
    icon: <RiKakaoTalkFill />,
  },
  {
    provider: "github",
    bgColor: "bg-black",
    textColor: "text-white",
    text: "GitHub으로 로그인",
    icon: <FaGithub />,
  },
  {
    provider: "google",
    bgColor: "bg-white border",
    textColor: "text-black",
    text: "Google로 계속하기",
    icon: <FaGoogle />,
  },
];

export default function SocialLoginGroup() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <div className="space-y-3">
      {socialLogins.map(({ provider, bgColor, textColor, text, icon }) => (
        <SocialLoginButton
          key={provider}
          bgColor={bgColor}
          textColor={textColor}
          text={text}
          icon={icon}
          onClick={() => {
            window.location.href = `${baseUrl}/auth/login/${provider}`;
          }}
        />
      ))}
    </div>
  );
}
