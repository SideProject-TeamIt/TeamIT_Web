import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'TeamIT',
  description: '프로젝트 팀 빌딩 플랫폼',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-sectionBg text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
