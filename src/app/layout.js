import Navbar from '@/components/ui/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
