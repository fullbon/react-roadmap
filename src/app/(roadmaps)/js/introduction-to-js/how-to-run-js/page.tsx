import CodeBlock from '@/app/ui/code/code-block';

export default function HowToRunJs() {
    return <>
        <h1>Как запустить JavaScript?</h1>
        <p>Подключить и выполнить JS код на веб-странице можно двумя способами:</p>
        <ol>
            <li>
                Написать код внутри страницы и обернув его в тег <b>{"<script></script>"}</b>;
                <CodeBlock language={'html'} title={'Выполнение кода на html странице'} >
                    {
                        `<script>
const x = "Hello world!";
console.log(x);
</script>`
                    }
                </CodeBlock>
            </li>
            <li>
                или указать путь к JS файлу в атрибуте src тега script.
                <CodeBlock language={'html'} title={'Подключение скрипта'} >
                    {
                        `<script type="text/javascript" src="/path/to/script.js"></script>`
                    }
                </CodeBlock>
            </li>
        </ol>

    </>
}