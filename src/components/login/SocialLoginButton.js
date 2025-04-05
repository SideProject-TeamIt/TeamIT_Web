export default function SocialLoginButton({ bgColor, textColor, text, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 py-2 rounded-md font-medium ${bgColor} ${textColor}`}
    >
      <span className="text-lg">{icon}</span>
      {text}
    </button>
  );
}
