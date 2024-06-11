import { NavLink as NavLinkType } from '@/app/lib/definitions';
import * as React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const checkIsActive = (urlPartList: string[], hrefPartList: string[]) => {
    for (let i = 1; i < hrefPartList.length; i++) {
        if (urlPartList[i] !== hrefPartList[i]) {
            return false
        }
    }

    return true;
}

export default function NavLink(link: NavLinkType) {
    const pathname = usePathname();

    const [isActiveLink, setIsActiveLink] = React.useState(false);

    React.useEffect(() => {
        setIsActiveLink(checkIsActive(pathname.split('/'), link.href.split('/')))
    }, [pathname])

    const [openSubLinks, setOpenSubLinks] = React.useState(isActiveLink);

    React.useEffect(() => {
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
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mb-1 md:mb-2',
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
                        {link.subLinks?.map((subLink: NavLinkType) => {
                            return <NavLink
                                key={subLink.href}
                                {...subLink}
                                href={subLink.href}
                            />
                        })}
                    </div>
                    : null
            }
        </>
    );
}
