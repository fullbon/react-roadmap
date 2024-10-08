import { Metadata } from 'next';
import TableOfContents from '@/app/ui/table-of-contents/table-of-contents';

export const metadata: Metadata = {
    title: 'JS',
};

export default function Page() {
    return <>
        <h1>Javascript Developer Roadmap</h1>
        <p><a href='https://roadmap.sh/javascript' target={'_blank'}>Дорожная карта</a></p>
        <br />
        <TableOfContents/>
    </>
}