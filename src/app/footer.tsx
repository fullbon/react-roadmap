import * as React from 'react';
import Image from 'next/image';
import { FooterLinkType } from '@/app/lib/definitions';

function FooterLink(props: FooterLinkType) {
    return <li className='list-none'
               title={props.title ?? undefined}>
        <a href={props.href}
           target='_blank'
           className="hover:underline me-4 md:me-6">
            <Image
                priority
                src={props.svgPath}
                height={24}
                width={24}
                alt={props.alt}
            />
        </a>
    </li>
}

export default function Footer() {
    return <footer className="w-full h-[calc(4rem)] bg-gray-50 fixed bottom-0 pl-10 shadow-inner">
        <div
            className="w-full flex h-full items-end">
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 ml-5 space-x-4">
                <FooterLink
                    href='https://github.com/fullbon/react-roadmap'
                    svgPath='/github-mark.svg'
                    alt='github'
                    title='Ссылка на репозиторий проекта'
                />
                <FooterLink
                    href='https://t.me/ioioiooioioioo'
                    svgPath='/telegram.svg'
                    alt='tg'
                    title='Связаться со мной в тг'
                    className=''
                />
                <FooterLink
                    href='https://roadmap.sh/javascript'
                    svgPath='/js.svg'
                    alt='js-roadmap'
                    title='Дорожная карта JS разработчика'
                />
                <FooterLink
                    href='https://roadmap.sh/react'
                    svgPath='/react.svg'
                    alt='react-roadmap'
                    title='Дорожная карта React разработчика'
                />
            </ul>
        </div>
    </footer>;
}