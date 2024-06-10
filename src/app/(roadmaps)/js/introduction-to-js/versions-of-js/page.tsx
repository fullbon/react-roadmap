import { Metadata } from 'next';

import Blockquote from '@/app/ui/text/blockquote';
import CodeBlock from '@/app/ui/text/code-block';

export const metadata: Metadata = {
    title: 'ECMAScript',
};

export default function JsVersions() {
    return <div className='pb-32'>
        <h1>Версии JavaScript (ECMAScript)</h1>
        <h2>ES1 (1997)</h2>
        <Blockquote from={<>Перевод с <a href="https://www.educative.io/blog/javascript-versions-history" target='_blank'>educative.io</a></>}>
            В 1997 году Netscape Communicator подала документы [на стандартизацию JavaScript] в ECMA International – компанию, которая стандартизирует информационные и коммуникационные системы.
            <br />
            <br />
            ECMA International использовала JavaScript Netscape и JScript Microsoft для создания стандартизации под названием ECMAScript, спецификации языка, на которой основаны оба языка. ECMA нельзя было назвать JavaScript, поскольку JavaScript был торговой маркой, принадлежащей Sun Microsystems (которая позже стала Oracle).
        </Blockquote>

        <h2>ES2 (1998)</h2>
        <Blockquote from={<>Перевод с <a href="https://lhuria94.github.io/ecmascript-past-present-and-future/">lhuria94.github.io</a></>}>
            ECMAScript 2 был выпущен в июне 1998 года как исправление несоответствий между стандартами ECMA и ISO для JavaScript. Никаких новых изменений внесено не было.
        </Blockquote>

        <h2>ES3 (1999)</h2>
        <p>ECMAScript 3 выпущен в 1999 году. Он внес большие и долгожданные изменения в спецификацию:</p>
        <ul>
            <li>
                <b>Строгое сравнение</b>
                <p>Добавлен оператор `===`, при котором не происходит неявного приведения типов.</p>
                <CodeBlock>
                {
`const num = 0;
const isHappened = '';
console.log('нестрогое сравнение', num == isHappened);
console.log('строгое сравнение', num === isHappened);`
                }
                </CodeBlock>
            </li>
            <li>
                <b>Регулярные выражения</b>
                <p>Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках. Их можно задать двумя способами:</p>
                <ol>
                    <li>
                        Через литерал регулярного выражения:
                        <CodeBlock>
                            {
`const regexDigit = /^\\d$/;
console.log(regexDigit.test(4));
console.log(regexDigit.test('qwerty'));
console.log(regexDigit.test(50));`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        Или через вызов функции-конструктора объекта <b>RegExp</b>:
                        <CodeBlock>
                            {
`const regexDigit = new RegExp('^\\\\d$');
console.log(regexDigit.test(4));
console.log(regexDigit.test('qwerty'));
console.log(regexDigit.test(50));`
                            }
                        </CodeBlock>
                    </li>
                </ol>
            </li>

            <li>
                <b>Конструкция `switch`</b>
                <p>Заменяет собой сразу несколько операторов `<b>if</b>`. Имеет хотя бы один обязательный блок `<b>case</b>` и необязательный блок `<b>default</b>`.</p>
                <p>Операция продолжается, проходя через каждый условие в блоке до ближайшего `<b>break</b>`</p>
                <CodeBlock>
                    {
`// Генерируем рандомный возраст от 1 до 25
const min = 1;
const max = 25;
const age = Math.floor(Math.random() * (max - min + 1) + min);

console.log('Если ваш возраст равен ' + age + ', то ');
switch (true) {
    case age > 5 && age < 18:
        console.log('вы учитесь в школе');
        break;
    case age >= 18:
        console.log('вы уже закончили школу');
        break;
    default: 
        console.log('вам еще рано идти в школу');
        break;
}`
                    }
                </CodeBlock>
            </li>
            <li>
                <b>Обработка ошибок `try/catch`</b>
                <p>Название говорит само за себя, конструкция позволяет отлавливать ошибки и обрабатывать их.</p>
                <CodeBlock>
                    {
`const isArray = Math.floor(Math.random() * 2); // 1 или 0
console.log(!!isArray);
                        
let x;
if (isArray) {
    x = [2, 1, 3];
} else {
    x = 'not array';
}

try {
    x.sort(); 
    console.log(x);
} catch (e) {
    console.log(e.message);
}`
                    }
                </CodeBlock>
            </li>
        </ul>

        <h2>ES4</h2>
        <p>Так и не вышла :(</p>
    </div>
}