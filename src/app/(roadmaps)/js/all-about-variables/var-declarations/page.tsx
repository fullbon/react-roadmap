import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Объявление переменных',
};

export default function VarDeclarations() {
    return <div>
        <h1>Объявление переменных</h1>
        <div>
            <p>
                До ES6 переменные объявление переменной происходило через
                <OneLineCode>var</OneLineCode>. Сейчас можно пользоваться
                <OneLineCode>let</OneLineCode> и
                <OneLineCode>const</OneLineCode>.
            </p>
            <p>Основное отличие кроется в области видимости переменной:</p>
            <ul>
                <li><OneLineCode>var</OneLineCode> - переменная находится в области видимости функции, в которой её объявили</li>
                <li><OneLineCode>let</OneLineCode> - переменная доступна только в рамках блока</li>
                <li><OneLineCode>const</OneLineCode> - переменная доступна только в рамках блока и недоступна для изменения</li>
            </ul>

            <br />

            <p>Примеры:</p>
            <ol>
                <li>
                    <p><OneLineCode>var</OneLineCode></p>
                    <CodeBlock>
                        {
`try {
    var x = 1;
    if (true) {
        var y = 2;
    }
    
    x = 3;
    console.log('x = ' + x);
    y = 4;
    console.log('y = ' + y);
} catch (e) {
    console.log('Ошибка: ' + e.message);
}`
                        }
                    </CodeBlock>
                </li>
                <li>
                    <p><OneLineCode>let</OneLineCode> - тот же код, но переменная будет находиться в другой области видимости</p>
                    <CodeBlock>
                        {
`try {
    let x = 1;
    if (true) {
        let y = 2;
    }
    
    x = 3;
    console.log('x = ' + x);
    y = 4; // ОШИБКА - переменная 'y' не объявлена в этой области видимости
    console.log('y = ' + y);
} catch (e) {
    console.log('Ошибка: ' + e.message);
}`
                        }
                    </CodeBlock>
                </li>
                <li>
                    <p><OneLineCode>const</OneLineCode> - переменные, которые объявлены через const не могут быть изменены</p>
                    <CodeBlock>
                        {
`try {
    const x = 1;
    if (true) {
        const y = 2;
    }
    
    x = 3; // ОШИБКА - переменную 'x' нельзя изменять, т.к. она объявлена через const
    console.log('x = ' + x);
    y = 4;
    console.log('y = ' + y);
} catch (e) {
    console.log('Ошибка: ' + e.message);
}`
                        }
                    </CodeBlock>
                </li>
            </ol>
        </div>
    </div>
}