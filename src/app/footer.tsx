import * as React from 'react';
import Image from 'next/image';

export default function Footer() {
    return <footer className="w-full h-[calc(4rem)] bg-gray-50 fixed bottom-0 pl-10 shadow-inner">
        <div
            className="w-full flex h-full items-end">
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
    </footer>;
}