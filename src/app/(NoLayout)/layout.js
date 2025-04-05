import '@/styles/globals.css';

export const metadata = {
  title: 'TeamIT',
  description: '프로젝트 팀 빌딩 플랫폼',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}

