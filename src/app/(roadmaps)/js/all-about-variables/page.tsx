import { Metadata } from 'next';
import TableOfContents from '@/app/ui/table-of-contents/table-of-contents';

export const metadata: Metadata = {
    title: 'Переменные',
};

export default function AllAboutVars() {
    return <>
        <h1>Всё о переменных</h1>
        <TableOfContents/>
    </>
}