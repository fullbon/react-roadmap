'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
    const pathname = usePathname();

    const pathnameParts = pathname.split('/');

    if (pathnameParts.length === 2) {
        return null;
    }

    return <>
        {pathnameParts.map((urlPart, index) => {
            if (!urlPart) {
                return null;
            }

            let url = '';
            for (let i = 1; i <= index; i++) {
                url += '/' + pathnameParts[i];
            }

            return <span key={urlPart + index}>
                {
                    index !== (pathnameParts.length - 1)
                        ? <Link href={url}>{urlPart}</Link>
                        : urlPart
                }
                {
                    index !== (pathnameParts.length - 1)
                        ? '  /  '
                        : null
                }
            </span>
        })}
        <br />
    </>
}