import { Metadata } from 'next';
import TableOfContents from '@/app/ui/table-of-contents/table-of-contents';

export const metadata: Metadata = {
    title: 'Паттерны',
};

export default function Page() {
    return <>
        <h1>Паттерны проектирования</h1>

        <p>
            Более полную и красивую информацию можно почитать
            на <a href={'https://refactoring.guru/ru/design-patterns/catalog'}
               target={'_blank'}>
                refactoring.guru
            </a>
        </p>
        <br />
        <TableOfContents />
    </>;
}