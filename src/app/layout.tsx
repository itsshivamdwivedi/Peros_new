// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Hero from '@/components/Hero';


export const metadata = {
    title: 'Peros',
    description: 'Peanut Butter Ecommerce Website',
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
