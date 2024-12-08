// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Hero from '@/components/Hero';


export const metadata = {
    title: 'Your Website Title',
    description: 'Your website description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* <Navbar /> */}
                {children}
                {/* <Hero /> */}
               
                </body>
        </html>
    );
}
