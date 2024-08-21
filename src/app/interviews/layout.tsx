import Breadcrumbs from '@/app/ui/breadcrumbs/breadcrumbs';
import React from 'react';
import { Metadata } from 'next';

type LayoutType = {
    children: React.ReactNode
};

export const metadata: Metadata = {
    title: {
        template: '%s | Собеседования',
        default: 'Собеседования',
    },
    description: 'Подготовка к собеседованиям',
};


export default function Layout({children}: LayoutType) {
    return <div className={'pb-48'}>
        <Breadcrumbs />
        <br />
        {children}
    </div>
}