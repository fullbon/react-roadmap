import { Metadata } from 'next';
import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Имена переменных',
};

export default function Hoisting() {
    return <div>
        <h1>Области видимости</h1>
    </div>
}