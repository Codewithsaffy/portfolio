import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layouts/Header";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muhammad Yousuf | Next.js Developer Portfolio",
  description: "Explore the professional portfolio of Muhammad Yousuf, an experienced Next.js developer specializing in building high-performance, scalable web applications. Discover projects, skills, and expertise in React, JavaScript, Tailwind CSS, and full-stack development.",
  keywords: "Muhammad Yousuf, Next.js developer, React developer, full-stack developer, web development, JavaScript expert, Tailwind CSS, portfolio, scalable applications, Next.js projects, front-end development, SEO-optimized web apps",
  authors: [{ name: "Muhammad Yousuf" }],
  creator: "Muhammad Yousuf",
  publisher: "Muhammad Yousuf",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    siteName: 'Muhammad Yousuf Portfolio',
    title: 'Muhammad Yousuf | Next.js Developer Portfolio',
    description: 'Explore the professional portfolio of Muhammad Yousuf, an experienced Next.js developer specializing in building high-performance, scalable web applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Yousuf Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Yousuf | Next.js Developer Portfolio',
    description: 'Explore the professional portfolio of Muhammad Yousuf, an experienced Next.js developer.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://your-portfolio-url.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
