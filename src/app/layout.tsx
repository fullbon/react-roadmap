import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidenav from '@/app/ui/sidebar/sidenav';
import Footer from '@/app/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Roadmap',
        default: 'Roadmap',
    },
    description: 'Дорожная карта React разработчика',
    appleWebApp: {
        capable: 'yes'
    },

    appleMobileWebAppCapable: 'yes',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div
            className="flex h-[calc(100vh-4rem)] flex-col md:flex-row overflow-y-scroll">
            <div className="w-full flex-none md:w-64">
                <Sidenav/>
            </div>
            <div className="flex-grow p-6 md:p-12 max-w-screen-lg ml-auto mr-auto content">{children}</div>
        </div>
        <Footer />
        </body>
        </html>
    );
}
