import Blockquote from '@/app/ui/text/blockquote';

export default function Introduction() {
    return <>
        <h1>Введение в JavaScript</h1>
        <Blockquote
            from={<>Перевод с <a href="https://roadmap.sh/javascript" target='_blank'>https://roadmap.sh/javascript</a></>}
        >
            JavaScript, часто сокращенно JS, — это язык программирования, который
            является одной из основных технологий Всемирной паутины, наряду с
            HTML и CSS. Это позволяет нам добавлять интерактивность к страницам,
            например. Возможно, вы видели слайдеры, оповещения, взаимодействие с
            кликами, всплывающие окна и т. д. на разных веб-сайтах — все это
            создано с использованием JavaScript. Помимо использования в
            браузере, он также используется в других небраузерных средах, таких
            как Node.js для написания серверного кода на JavaScript, Electron
            для написания настольных приложений, React Native для мобильных
            приложений и так далее.
        </Blockquote>
        <br />
    </>;
}