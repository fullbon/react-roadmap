import { Metadata } from 'next';
import OneLineCode from '@/app/ui/code/one-line-code';
import CodeBlock from '@/app/ui/code/code-block';
import Link from 'next/link';

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
const withoutComma = Math.trunc(rand);

console.log(rand);
console.log(\`Число без запятой: \$\{withoutComma\}\`);`
                    }
                </CodeBlock>
            </li>
            <li>
                <OneLineCode>cbrt</OneLineCode> - вернет кубический корень числа
                <CodeBlock>
                    {
`const rand = Math.pow(Math.trunc(Math.random() * 10), 3);
const cbrt = Math.cbrt(rand);

console.log(rand);
console.log(\`Кубический корень: \$\{cbrt\}\`);`
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

        <h2 id={'spread-rest'}>Операторы <OneLineCode>spread</OneLineCode> и <OneLineCode>rest</OneLineCode></h2>
        <p>Оператор распространения <OneLineCode>spread</OneLineCode> используется для разбиения массива или объекта на отдельные аргументы</p>
        <p>Обозначается через <OneLineCode>...</OneLineCode></p>
        <br />
        <p>Пример использования:</p>
        <p>
            <CodeBlock>
                {
`const numbers = [1,2,3,4,5,6,7,-1,-2,-3];

// Math.max ожидает список аргументов типа 'number', поэтому попытка вызова Math.max(numbers) приведет к ошибке
const max = Math.max(...numbers);
console.log(max); // 7`
                }
            </CodeBlock>
        </p>
        <br />
        <p>Оператор остатка <OneLineCode>rest</OneLineCode> имеет такой же синтаксис, но используется, наоборот, для сбора аргументов в массив</p>
        <CodeBlock>
            {
`function log(firstValue, ...args) {
    console.log('Первое значение: ' + firstValue);
    console.log('Остальные: ' + args.join(', '));
}

log(1, 2, 3, 4);
log(5);`
            }
        </CodeBlock>

        <h2 id={'destructuring'}>Деструктуризация</h2>
        Деструктуризация позволяет вытащить значение из объекта или массива и присвоить его к переменной
        <CodeBlock>
            {
`const user = {
    name: 'Пользователь',
    city: 'Омск',
    phone: '1234',
}

const { name } = user;
console.log(name);

const values = [1,2,3,4,5];
const [, ,thirdValue] = values; // пропускаем первые два значения
console.log(thirdValue);`
            }
        </CodeBlock>
        <p>Отлично сочетается с <OneLineCode>spread-rest</OneLineCode> операторами</p>
        <CodeBlock>
            {
`const values = [1,2,3,4,5];
const [, , ...lastValues] = values; // пропускаем первые два значения

console.log(lastValues);`
            }
        </CodeBlock>

        <h2 id={'default-params'}>Параметры по умолчанию</h2>
        <p>
            <CodeBlock>
                {
`function sum(a, b = 5) { return a + b; }
console.log(sum(2)); // 2 + 5
console.log(sum(3, 1)); // 3 + 1`
                }
            </CodeBlock>
        </p>

        <h2 id={'modules'}>Модули</h2>
        <p>
            <CodeBlock>
                {
                    `// sum.js
export default function sum(a, b) {
    return a + b;
}

// index.js
import sum from './sum';
const sum = sum(10, 5);`
                }
            </CodeBlock>
        </p>

        <h2 id={'classes'}>Классы</h2>
        <p>
            <CodeBlock>
                {
`class Animal {
    constructor(name) {
        this.name = name;
        this.type = 'animal';
    }
    
    getName() {
        return this.name;
    }
    
    getType() {
        return this.type;
    }
}

class Dog extends Animal {
   constructor(name) {
      super(name); // вызов конструктора родителя класса
      this.type = 'dog';
   }
}

const dog1 = new Dog('Sharik');
console.log(dog1.getName());
console.log(dog1.getType());`
                }
            </CodeBlock>
        </p>

        <h2 id={'symbols'}>Символы</h2>
        <p>Новый примитивный тип данных, используется для создания уникальных идентификаторов</p>

        <CodeBlock>
            {
`const WHITE = Symbol('Цвет'); // в качестве параметра передается описание символа
const BLACK = Symbol('Цвет');

const colors = {
    [WHITE]: '#ffffff',
    [BLACK]: '#000000'
}

console.log(colors[WHITE]);
console.log(colors[BLACK]);`
            }
        </CodeBlock>

        <h2>А также:</h2>
        <ul>
            <li id={'map-set'}>
                <Link href={'https://learn.javascript.ru/map-set'}
                      target={'_blank'}
                >
                    <OneLineCode>Map</OneLineCode> и <OneLineCode>Set</OneLineCode>
                </Link>
            </li>
            <li id={'tag-template-strings'}>
                <Link href={'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals#%D1%82%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B'}
                      target={'_blank'}
                >
                    Тегированные шаблонные строки <OneLineCode></OneLineCode>
                </Link>
            </li>
            <li id={'generators'}>
                <Link href={'https://learn.javascript.ru/generators'}
                      target={'_blank'}
                >
                    Генераторы
                </Link>
            </li>
            <li id={'proxy'}>
                <Link href={'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy'}
                      target={'_blank'}
                >
                    Proxy
                </Link>
            </li>
            <li id={'promise'}>
                <Link href={'https://learn.javascript.ru/promise-basics'}
                      target={'_blank'}
                >
                    Promise
                </Link>
            </li>
        </ul>
    </>
}