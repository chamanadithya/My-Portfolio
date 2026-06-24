import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaman Adithya — UI/UX & Frontend Developer",
  description:
    "Portfolio of Chaman Adithya, a UI/UX designer and frontend developer building thoughtful digital products with design and clean code.",
};

// Runs before paint to set theme/density/font from localStorage, avoiding a flash.
const noFlash = `(function(){try{var p=JSON.parse(localStorage.getItem('chaman-portfolio-prefs')||'{}');var r=document.documentElement;r.setAttribute('data-theme',p.theme||'light');r.setAttribute('data-density',p.density||'regular');r.setAttribute('data-font',p.font||'helvetica');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" data-density="regular" data-font="helvetica"
      suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Archivo:wght@600;700;800;900&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Dancing+Script:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
