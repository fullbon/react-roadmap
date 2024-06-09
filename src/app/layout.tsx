import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidenav from '@/app/ui/sidebar/sidenav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Roadmap',
        default: 'Roadmap',
    },
    description: 'Дорожная карта React разработчика',
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
            className="flex h-[calc(100vh-4rem)] flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Sidenav/>
            </div>
            <div
                className="flex-grow p-6 md:overflow-y-auto md:p-12 max-w-screen-lg ml-auto mr-auto content">{children}</div>
        </div>

        <footer className="bg-gray-50">
            <div
                className="w-full flex h-[calc(4rem)] justify-center items-end">
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 ml-5 space-x-4">
                    <li>
                        <a href="https://github.com/fullbon/react-roadmap"
                           target='_blank'
                           className="hover:underline me-4 md:me-6">
                            <Image
                                priority
                                src="/github-mark.svg"
                                height={24}
                                width={24}
                                alt="gh"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/ioioiooioioioo"
                           target='_blank'
                           className="hover:underline me-4 md:me-6">
                            <Image
                                priority
                                src="/telegram.svg"
                                height={24}
                                width={24}
                                alt="tg"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        </body>
        </html>
    );
}
