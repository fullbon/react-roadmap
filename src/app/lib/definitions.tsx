import * as React from 'react';

export type NavLink = {
    name: string;
    href: string;
    subLinks?: NavLink[];
}

export type Blockquote = {
    children: React.ReactNode;
    from?: React.ReactNode | string;
}