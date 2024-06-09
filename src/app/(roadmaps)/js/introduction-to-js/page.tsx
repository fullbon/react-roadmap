import Blockquote from '@/app/ui/text/blockquote';
import TodoList from '@/app/ui/todo/todo-list';
import Image from 'next/image';

const needToLearning = [
    'JavaScript (JS) — это язык программирования, который используется как на стороне клиента, так и на стороне сервера',
    'JS на сайтах используется для того, чтобы сделать веб-страницу "живой"',
    'Изначально создавался для браузеров, но сейчас используется во множестве других платформ',
];

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
        <Blockquote
            from={<>Перевод с <a href="https://roadmap.sh/javascript"
                                 target="_blank">https://roadmap.sh/javascript</a></>}
        > JavaScript, часто сокращенно JS, — это язык программирования, который
            является одной из основных технологий World Wide Web, наряду с HTML
            и CSS. Например, JS позволяет добавлять интерактивность к страницам.
            Возможно, вы видели слайдеры, оповещения, взаимодействие с кликами,
            всплывающие окна и т. д. на разных веб-сайтах — все это создано с
            использованием JavaScript. Помимо использования в браузере, он также
            используется в других небраузерных средах, таких как Node.js для
            написания серверного кода на JavaScript, Electron для написания
            настольных приложений, React Native для мобильных приложений и
            т.д. </Blockquote> <br/>

        <h2>Важные моменты</h2>
        <TodoList options={needToLearning.map(i => ({ name: i }))}/>

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