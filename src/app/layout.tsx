import type { Metadata } from "next";
import { Space_Grotesk, Inter, Poppins } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mehedi Hasan | Competitive Programmer & Full-Stack Developer",
  description: "Portfolio of Mehedi Hasan, a CSE student at Chittagong University of Engineering and Technology (CUET) specializing in competitive programming and high-performance web development.",
  icons: {
    icon: "./logo.png",
  },
};


import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full bg-background text-on-surface font-poppins transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
