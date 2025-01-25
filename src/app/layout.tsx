// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Hero from '@/components/Hero';
import { NextUIProvider } from '@nextui-org/react';
import { Toaster } from 'react-hot-toast';
import AuthContextProvider from '@/contexts/AuthContext'; // Import the AuthContextProvider

export const metadata = {
    title: 'Peros',
    description: 'Peanut Butter Ecommerce Website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Toaster />
                
                <NextUIProvider>
                    {/* <AuthContextProvider> */}
                        {children}
                    {/* </AuthContextProvider> */}
                </NextUIProvider>
            </body>
        </html>
    );
}
