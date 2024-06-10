import Blockquote from '@/app/ui/text/blockquote';
import TodoList from '@/app/ui/todo/todo-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Что такое JS?',
};

const needToLearning = [
    'JavaScript (JS) — это язык программирования, который используется как на стороне клиента, так и на стороне сервера',
    'JS на сайтах используется для того, чтобы сделать веб-страницу "живой"',
    'Изначально создавался для браузеров, но сейчас используется во множестве других платформ',
];

export default function WhatIsJS() {
    return <>
        <h1>Что такое JavaScript?</h1>
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
    </>
}