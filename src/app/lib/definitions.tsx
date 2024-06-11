import * as React from 'react';

export type NavLink = {
    name: string;
    href: string;
    subLinks?: NavLink[];
    status?: 'at-work' | 'to-do';
}

export type Blockquote = {
    children: React.ReactNode;
    from?: React.ReactNode | string;
}

export type TodoItem = {
    name: string;
    done?: boolean;
}

export type TodoList = {
    options: TodoItem[];
}

export type TimelineItem = {
    date: string | number;
    text: string;
}

export type Timeline = {
    options: TimelineItem[];
}

export type FooterLinkType = {
    href: string;
    svgPath: string;
    alt: string;
    title?: string;
    className?: string;
}