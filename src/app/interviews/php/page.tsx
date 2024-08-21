import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/app/ui/table-of-contents/table-of-contents';

export const metadata: Metadata = {
    title: 'PHP',
};

export default function Page() {
    return <>
        <h1>PHP</h1>
        <TableOfContents />
    </>
}