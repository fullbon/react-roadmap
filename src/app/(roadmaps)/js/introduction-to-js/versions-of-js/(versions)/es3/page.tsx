import CodeBlock from '@/app/ui/code/code-block';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ES3',
};

export default function Page() {
    return <>
        <h2>ES3 (1999)</h2>
        <p>ECMAScript 3 выпущен в 1999 году. Он внес большие и долгожданные изменения в спецификацию:</p>
        <ul>
            <li id='strict-equal'>
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
            <li id='regex'>
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

            <li id='switch'>
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
            <li id='try-catch'>
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
    </>
}