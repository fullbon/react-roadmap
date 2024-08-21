import { Metadata } from 'next';
import TableOfContents from '@/app/ui/table-of-contents/table-of-contents';

export const metadata: Metadata = {
    title: 'Паттерны',
};

export default function Page() {
    return <>
        <h1>Паттерны проектирования</h1>
        <TableOfContents/>
    </>;
}