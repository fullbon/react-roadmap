'use client';

import * as React from 'react';
import { NavLink as NavLinkType } from '@/app/lib/definitions';
import links from '@/app/lib/links';
import NavLink from '@/app/ui/sidebar/link';


export default function NavLinks() {
    return (
        <>
            {
                links.map((link: NavLinkType) => {
                    return <NavLink
                        key={link.href}
                        {...link}
                    />
                })
            }
        </>
    );
}
