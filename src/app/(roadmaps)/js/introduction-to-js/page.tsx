import Blockquote from '@/app/ui/text/blockquote';
import TodoList from '@/app/ui/todo/todo-list';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Введение в JS',
};

export default function Introduction() {
    return <>
        <h1>Введение в JavaScript</h1>
        <Image
            src="/js/introduction-to-js/roadmap.png"
            width={300}
            height={48}
            className="hidden md:block ml-auto mr-auto mb-5"
            alt="Скриншот с roadmap.sh"
        />

        <h2>Ссылки</h2>
        <ul className="mt-6 space-y-1">
            <li>
                <a target="_blank"
                   href="https://learn.javascript.ru/intro">Современный учебник
                    JavaScript (learn.javascript.ru)</a>
            </li>
            <li>
                <a href="https://github.com/azat-io/you-dont-know-js-ru"
                   target="_blank"> Вы не знаете JS (серия книг) </a>
            </li>
            <li>
                <a
                    href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
                    target="_blank">JavaScript MDN Документация</a>
            </li>
            <li>
                <a href="https://www.w3schools.com/js/"
                   target="_blank">W3Schools – JavaScript Tutorial</a>
            </li>
        </ul>
    </>;
}