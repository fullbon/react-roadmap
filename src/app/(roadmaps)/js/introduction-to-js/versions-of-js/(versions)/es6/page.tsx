import Blockquote from '@/app/ui/text/blockquote';
import { Metadata } from 'next';
import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';

export const metadata: Metadata = {
    title: 'ES6',
};

export default function ES2() {
    return <>
        <h1>ES6 (2015)</h1>
        <p>
            &quot;Очень мажорное&quot; обновление спецификации, которое принесло много
            новвоведений
        </p>

        <h2 id='let-const'>Переменные</h2>
        <div>
            <p>
                До ES6 переменные объявление переменной происходило через
                <OneLineCode>var</OneLineCode>. Теперь можно пользоваться
                <OneLineCode>let</OneLineCode> и
                <OneLineCode>const</OneLineCode>.
            </p>
            <p>Основное отличие кроется в области видимости переменной:</p>
            <ul>
                <li><OneLineCode>var</OneLineCode> - переменная находится в области видимости функции, в которой её объявили</li>
                <li><OneLineCode>let</OneLineCode> и <OneLineCode>const</OneLineCode> - переменная доступна только в рамках блока</li>
            </ul>

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

        <h2 id='arrow-functions'>Стрелочные функции</h2>
        <p>Основные отличия от обычных функций</p>
        <ol>
            <li>Уменьшение кода</li>
            <li>Поведение <OneLineCode>this</OneLineCode> - у стрелочных функций нет своего <OneLineCode>this</OneLineCode></li>
        </ol>
        <br />
        <p>
            Методы <OneLineCode>printCustomPrices</OneLineCode>
            и <OneLineCode>printCustomPricesArrow</OneLineCode>: внимание на
            <OneLineCode>this</OneLineCode> и
            <OneLineCode>contextThis</OneLineCode>
        </p>
        <CodeBlock>
            {
                `
const car = {
    defaultPrice: 10000,
    defaultColor: 'Белая',
    brand: 'Toyota',
    customColors: [
        {
            price: 12000,
            color: 'Желтая'
        },
        {
            price: 14000,
            color: 'Зеленая'
        },
    ],
    printCustomPrices: function () {
        const contextThis = this;
        this.customColors.forEach(function (custom) {
            console.log([custom.color, contextThis.brand, 'стоит', custom.price].join(' '));
        });
    },
    printCustomPricesArrow: function () {
        this.customColors.forEach(custom => console.log([custom.color, this.brand, 'стоит', custom.price].join(' ')));
    },
}

console.log('Результат выполнения обычной функции:');
car.printCustomPrices();
console.log('Результат выполнения стрелочной функции:');
car.printCustomPricesArrow();
`
            }
        </CodeBlock>

        <h2 id='strings'>Строки</h2>
        <p>К прототипу строк <OneLineCode>String</OneLineCode> добавлены методы:</p>
        <ol>
            <li><OneLineCode>&quot;hello world&quot;.startsWith(&quot;hello&quot;)</OneLineCode> - проверяет, что строка начинается с переданного параметра</li>
            <li><OneLineCode>&quot;hello world&quot;.endsWith(&quot;hello&quot;)</OneLineCode> - проверяет, что строка кончается переданным параметром</li>
            <li><OneLineCode>&quot;hello world&quot;.includes(&quot;hello&quot;)</OneLineCode> - проверяет, что строка содержит переданный параметр</li>
            <li><OneLineCode>&quot;hello world&quot;.repeat(5)</OneLineCode> - дублирует строку переданное кол-во раз</li>
        </ol>
        <h2 id='template-strings'>Шаблонные строки</h2>
        <p>Выделяются в косые кавычки (шаблонные литералы) <OneLineCode>``</OneLineCode> и заменяют собой конкатенацию нескольких строк</p>
        <CodeBlock>
            {
`const tickets = 1000;
console.log('Кол-во билетов = ' + tickets);
console.log(\`Кол-во билетов = \$\{tickets\}\`);
`
            }
        </CodeBlock>
        <h2 id='arrays'>Массивы</h2>
        <ol>
            <li>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from'
                   target='_blank'>
                    Array.from
                </a> - Позволяет создать массив из массивоподобных и итерируемых объектов, например
                <ul>
                    <li>аргументы функции;</li>
                    <li>nodeList;</li>
                    <li>данные структур <OneLineCode>Map</OneLineCode> и <OneLineCode>Set</OneLineCode>.</li>
                </ul>
            </li>
            <li>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of'
                   target='_blank'>
                    Array.from
                </a> - создает массив из переданных параметров.
            </li>
            <li>
                <OneLineCode>find</OneLineCode> аналогичен функции <OneLineCode>filter</OneLineCode> но передает первый найденный элемент
                <CodeBlock>
                    {
`const fruits = ['Яблоко', 'Апельсин', 'Ананас'];
const orange = fruits.find(f => f === 'Апельсин');
console.log(orange);`}
                </CodeBlock>
            </li>
            <li>
                <OneLineCode>findIndex</OneLineCode> то же, что и <OneLineCode>find</OneLineCode>, но вернет индекс элемента в массиве
                <CodeBlock>
                    {
`const fruits = ['Яблоко', 'Апельсин', 'Ананас'];
const orange = fruits.findIndex(f => f === 'Апельсин');
console.log(orange);`}
                </CodeBlock>
            </li>
            <li>
                <OneLineCode>fill</OneLineCode> перезаписывает элементы массива
                <CodeBlock>
                    {
`const fruits = ['Яблоко', 'Апельсин', 'Ананас'];
const oranges = fruits.fill('Апельсин');
console.log(oranges);`}
                </CodeBlock>
            </li>
        </ol>

        <h2 id='math'>Math</h2>
        <ol>
            <li>
                <OneLineCode>sign</OneLineCode> - возвращает 1, -1 или 0 в зависимости от того, положительное число, отрицательное или равно нулю
                <CodeBlock>
                    {
`const x = 54;
const y = -23.324
const z = 0;

console.log(Math.sign(x));
console.log(Math.sign(y));
console.log(Math.sign(z));
`
                    }
                </CodeBlock>
            </li>
            <li>
                <OneLineCode>trunc</OneLineCode> - обрезает числа после запятой
                <CodeBlock>
                    {
`const rand = Math.random() * 10;

console.log(rand);
console.log(Math.trunc(rand));`
                    }
                </CodeBlock>
            </li>
            <li>
                <OneLineCode>cbrt</OneLineCode> - вернет кубический корень числа
                <CodeBlock>
                    {
`const rand = Math.pow(Math.trunc(Math.random() * 10), 3);

console.log(rand);
console.log(Math.cbrt(rand));`
                    }
                </CodeBlock>
            </li>
            <li>
                <a target='_blank'
                   href={'https://2ality.com/2015/04/numbers-math-es6.html'}>
                    и другие математические функции
                </a>
            </li>
        </ol>
    </>
}