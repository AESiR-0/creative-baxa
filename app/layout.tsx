import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const codecPro = localFont({
  src: [{path : "../fonts/CodecPro-Thin.otf", weight:'200', style:'normal'},
        {path : "../fonts/CodecPro-Regular.otf", weight:'500', style:'normal'},
        {path : "../fonts/CodecPro-Bold.otf", weight:'700', style:'normal'},
      ],
  display: "swap",
  variable: "--font-codec",
});


export const metadata: Metadata = {
  title: "Home",
  description: "Creative baxa is a creative agency that helps businesses grow their brand and reach their audience. We offer a wide range of services including web design, branding, and marketing. We are a team of passionate and creative individuals who are dedicated to helping businesses succeed. Our goal is to provide our clients with the best possible solutions to help them achieve their goals. We are committed to delivering high-quality work that is both creative and effective. We believe in building strong relationships with our clients and working together to create something amazing. We are passionate about what we do and we are excited to help you grow your business. Let us help you take your business to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={codecPro.className}>{children}</body>
    </html>
  );
}
