import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
// import ViewCanvas from '@/components/ViewCanvas';
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
         <Navbar />
        
        {children}
        {/* <Hero /> */}
        
     
        </main>
      </body>
    </html>
  );
}
