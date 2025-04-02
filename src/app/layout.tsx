import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/sidebarContext';
import { ThemeProvider } from '@/context/themeContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} dark:bg-gray-900 min-h-screen`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
