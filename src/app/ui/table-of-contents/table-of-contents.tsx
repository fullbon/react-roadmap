'use client';

import links from '@/app/lib/links';
import { usePathname } from 'next/navigation';
import { NavLink as NavLinkType } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const findLink = (items, pathname) => {
    for (let obj of items) {
        if (obj.href === pathname) {
            if (obj.status === 'to-do') {
                return [];
            }
            return obj.subLinks ?? [];
        }
        if (obj.subLinks && obj.subLinks.length > 0) {
            const result = findLink(obj.subLinks, pathname);
            if (result.length > 0) {
                return result;
            }
        }
    }
    return [];
};

type TableType = {
    content: NavLinkType[];
}

const Table = (props: TableType) => {
    if (props.content.length === 0) {
        return null;
    }

    return <ol>
        {props.content
            .filter(link => link.status !== 'to-do')
            .map(link => <li key={link.href} className={'mt-0'}>
                <Link href={link.href}>
                    {link.name}
                </Link>
                {
                    link.subLinks
                        ? <Table content={link.subLinks}/>
                        : null
                }
            </li>)}
    </ol>;
};

export default function TableOfContents() {
    const pathname = usePathname();
    const [content, setContent] = useState<NavLinkType[]>([]);

    useEffect(() => {
        setContent(findLink(links, pathname));
    }, []);

    if (content.length === 0) {
        return null;
    }

    return <div>
        <Table content={content}/>
    </div>;
}
