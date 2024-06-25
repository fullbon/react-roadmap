import { Metadata } from 'next';
import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';

export const metadata: Metadata = {
    title: 'Hoisting',
};

export default function Hoisting() {
    return <div>
        <h1>Hoisting (Поднятие)</h1>
        <p><OneLineCode>Hoisting</OneLineCode> - это поднятие объявления переменных наверх кода для доступности до их объявления.</p>
        <br />
        <p>Работает с <OneLineCode>var</OneLineCode>, но не работает с <OneLineCode>const</OneLineCode> и <OneLineCode>let</OneLineCode></p>
        <br />
        <p>Примеры:</p>
        <p>
            <CodeBlock>
                {
`let sum = a;
sum += b; // ReferenceError: b is not defined
sum += c; // ReferenceError: c is not defined

// Инициализация переменных
var a = 1;
let b = 3;
const c = 5;`
                }
        </CodeBlock>
        </p>
        <br />

        <p>Также работает с функциями:</p>
        <p>
            <CodeBlock>
                {
`hello();

function hello() { console.log("Hello world!"); }`
                }
            </CodeBlock>
        </p>
    </div>
}