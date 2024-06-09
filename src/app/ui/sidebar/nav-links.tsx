'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavLink as NavLinkType } from '@/app/lib/definitions';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';

const links = [
    {
        name: 'JS',
        href: '/js',
        subLinks: [
            {
                name: '1. Введение в JavaScript',
                href: '/introduction-to-js',
            },
        ],
    },
    { name: 'React', href: '/react' },
];

function NavLink(link: NavLinkType) {
    const isActiveLink = link.pathname.indexOf(link.href) !== -1;

    const [openSubLinks, setOpenSubLinks] = React.useState(isActiveLink);

    useEffect(() => {
        setOpenSubLinks(isActiveLink);
    }, [isActiveLink]);

    const toggleOpenSubLinks = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        setOpenSubLinks(!openSubLinks);
    }

    return (
        <>
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'bg-sky-100 text-blue-600': isActiveLink,
                    },
                )}
            >
                <div className="flex w-full justify-between">
                    <p>{link.name}</p>
                    {link.subLinks && <p onClick={toggleOpenSubLinks}>
                        <ChevronLeftIcon className={clsx(
                            'w-5',
                            {
                                'transform rotate-90': openSubLinks
                            }
                        )}/>
                    </p>}
                </div>
            </Link>
            {
                openSubLinks
                    ? <div className="pl-5">
                        {link.subLinks?.map((subLink) => {
                            return <NavLink
                                key={subLink.href}
                                pathname={link.pathname}
                                name={link.name}
                                href={link.href + subLink.href}
                            />
                        })}
                    </div>
                    : null
            }
        </>
    );
}

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((link: NavLinkType) => {
                    return <NavLink
                        key={link.href}
                        pathname={pathname}
                        {...link}
                    />
                })
            }
        </>
    );
}
