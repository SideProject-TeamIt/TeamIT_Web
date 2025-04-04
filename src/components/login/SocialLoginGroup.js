import {FaGithub, FaGoogle } from "react-icons/fa";
import {RiKakaoTalkFill} from "react-icons/ri";
import SocialLoginButton from "./SocialLoginButton";

export default function SocialLoginGroup() {
  return (
    <div className="space-y-3">
      <SocialLoginButton
        bgColor="bg-[#FEE500]"
        textColor="text-black"
        text="카카오톡으로 로그인"
        icon={<RiKakaoTalkFill />}
        onClick={() => console.log("카카오 로그인")}
      />
      <SocialLoginButton
        bgColor="bg-black"
        textColor="text-white"
        text="GitHub으로 로그인"
        icon={<FaGithub />}
        onClick={() => console.log("GitHub 로그인")}
      />
      <SocialLoginButton
        bgColor="bg-white border"
        textColor="text-black"
        text="Google로 계속하기"
        icon={<FaGoogle />}
        onClick={() => console.log("Google 로그인")}
      />
    </div>
  );
}
