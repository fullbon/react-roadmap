import Breadcrumbs from '@/app/ui/breadcrumbs/breadcrumbs';
import React from 'react';

type LayoutType = {
    children: React.ReactNode
};

export default function Layout({children}: LayoutType) {
    return <>
        <Breadcrumbs />
        <br />
        {children}
    </>
}