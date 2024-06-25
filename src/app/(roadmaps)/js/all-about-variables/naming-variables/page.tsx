import { Metadata } from 'next';
import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Имена переменных',
};

export default function Hoisting() {
    return <div>
        <h1>Имена переменных</h1>
        <p>Имя переменной должно точно давать понять, что она содержит или делает.</p>

        <h2>Правила именования переменных</h2>
        <ul>
            <li>не должны содержать пробелы;</li>
            <li>должны начинаться с буквы, подчеркивания <OneLineCode>_</OneLineCode> или знака доллара <OneLineCode>$</OneLineCode>;</li>
            <li>могут содержать только буквы, цифры, символы подчеркивания или знаки доллара;</li>
            <li>чувствительны к регистру;</li>
            <li>не должны совпадать со <Link target='_blank' href='https://www.w3schools.com/js/js_reserved.asp'>списком зарезервированных слов</Link></li>
        </ul>

        <h2>Рекомендованные ссылки</h2>
        <ul>
            <li>
                <Link
                    href="https://www.dummies.com/article/technology/programming-web-design/javascript/naming-javascript-variables-142522/"
                    target="_blank">
                    Naming JavaScript Variables
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.robinwieruch.de/javascript-naming-conventions/"
                    target="_blank">
                    JavaScript Naming Conventions
                </Link>
            </li>
            <li>
                <Link
                    href="https://google.github.io/styleguide/jsguide.html"
                    target="_blank">
                    Google JavaScript Style Guide
                </Link>
            </li>
        </ul>
    </div>
}