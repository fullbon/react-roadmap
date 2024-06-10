import CodeBlock from '@/app/ui/code/code-block';

export default function Page() {
    return <>
        <h2>ES5 (2009)</h2>
        <p>Спустя 10 лет после выхода ES3 была выпущена ES5. Из нововведений</p>
        <ul>
            <li>
                <b>"use strict"</b>
                <p>Строгий режим - это директива, при которой для кода вводятся некоторые ограничения, а именно запрещены:</p>
                <CodeBlock>
                    {
`"use strict";
// Использование переменной без её объявления;
x = 5; 

// Удаление функции;
function f1() {}
delete f2;

// Дублирование названий параметров;
function f2(param, param) {}

// Восьмеричные числовые литералы;
let x = 010;

// Восьмеричные escape-символы;
let x = "\\010"; 

// Запись в свойство, доступное только для чтения;
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 10;  

// Запись в свойство get-only;
const obj = {get x() {return 0} };

obj.x = 10;

// Удаление неудаляемого свойства;
delete Object.prototype;

// Использование \`eval\` и \`arguments\` в качестве названий переменных;
// (а также \`implements\`, \`interface\`, \`let\`, \`package\`, 
// \`private\`, \`protected\`, \`public\`, \`static\`, \`yield\`)
let eval = 1;
let arguments = 2;

// Конструкция \`with\`;
with (Math){x = cos(2)};

// Инициализация переменных через \`var\` и \`let\` в \`eval\`;
eval ("var x = 2");
alert (x);

eval ("let x = 2");
alert (x);

// Также меняется поведение \`this\`;
function myFunction() {
  alert(this); // undefined вместо глобального объекта
}
myFunction();
`
                    }
                </CodeBlock>
                <p>Для работы "use strict" должна стоять на первой строчке скрипта</p>
            </li>
            <li>
                <b>Новые методы для работы с массивами</b>
                <ol>
                    <li>
                        <b>isArray()</b>
                        <p>Проверяет, является ли переменная массивом</p>
                        <CodeBlock>
                            {
`const str = 'hello';
const arr = ['world'];
const n = null;
const obj = { hello: ['world'] };

console.log(Array.isArray(str));
console.log(Array.isArray(arr));
console.log(Array.isArray(n));
console.log(Array.isArray(obj));`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>forEach()</b>
                        <p>Применяет переданную функцию к каждому элементу массива</p>
                        <CodeBlock>
                            {
`const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(num) {
    console.log(num * 10);
}); // В дальнейшем я буду использовать стрелочные функции для экономии места`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>map()</b>
                        <p>Возвращает новый массив, измененный переданной функцией</p>
                        <CodeBlock>
                            {
`const users = [
    {name: 'Вася', age: 15},
    {name: 'Леха', age: 25},
    {name: 'Миша', age: 23},
];

const names = users.map(user => user.name);
console.log('Имена: ', names);`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>filter()</b>
                        <p>Возвращает новый массив, отфильтрованный по переданным условиям</p>
                        <CodeBlock>
                            {
`const users = [
    {name: 'Вася', age: 15},
    {name: 'Леха', age: 25},
    {name: 'Миша', age: 23},
];

const adults = users.filter(user => user.age >= 18);
console.log('Совершеннолетние: ', adults);`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>reduce()</b>
                        <p>Применяет функцию к каждому элементу массива и приводит массив к одному элементу</p>
                        <p>Функцию часто используют для вычисления суммы элементов массива (см. пример)</p>
                        <br />
                        <p>Первым параметром передают callback-функцию с двумя параметрами: результирующее значение и текущее</p>
                        <p>На месте второго параметра ставят первоначальное значения. Если массив пустой, то результатом будет это значение. Выдаст ошибку, если массив пустой и первоначальное значение не задано</p>
                        <CodeBlock>
                            {
`const users = [
    {name: 'Вася', age: 15},
    {name: 'Леха', age: 25},
    {name: 'Брат Лехи', age: 25},
    {name: 'Миша', age: 23},
];

const sum = users.reduce((total, currentUser) => total + currentUser.age, 0);
console.log('Сумма возрастов: ', sum);

const oldest = users.reduce((potentialOldestUser, currentUser) => {
    if (currentUser.age > potentialOldestUser.age) {
        return currentUser;
    }
    return potentialOldestUser;
}, users[0]);
console.log('Самый взрослый: ', oldest);`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>reduceRight()</b>
                        <p>То же, что и reduce, но проходим по массиву справа налево</p>
                        <CodeBlock>
                            {
`const users = [
    {name: 'Вася', age: 15},
    {name: 'Леха', age: 25},
    {name: 'Брат Лехи', age: 25},
    {name: 'Миша', age: 23},
];

const sum = users.reduce((total, currentUser) => total + currentUser.age, 0);
console.log('Сумма возрастов: ', sum);

const oldest = users.reduceRight((potentialOldestUser, currentUser) => {
    if (currentUser.age > potentialOldestUser.age) {
        return currentUser;
    }
    return potentialOldestUser;
}, users[0]);
console.log('Самый взрослый: ', oldest);`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>every()</b>
                        <p>Проверяет, что каждый из элементов массива удовлетворяет переданным условиям</p>
                        <CodeBlock>
                            {
`
// Генерируем рандомный возраст от 15 до 25
const min = 15;
const max = 25;
const age = Math.floor(Math.random() * (max - min + 1) + min);

const users = [
    {name: 'Вася', age: Math.floor(Math.random() * (max - min + 1) + min)},
    {name: 'Леха', age: Math.floor(Math.random() * (max - min + 1) + min)},
    {name: 'Миша', age: Math.floor(Math.random() * (max - min + 1) + min)},
];

console.log(users);

const everyIsAdult = users.every(user => user.age >= 18);

if (everyIsAdult) {
    console.log('Все уже взрослые');
} else {
    console.log('Среди людей есть несовершеннолетние');
}`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>some()</b>
                        <p>Работает аналогично `<b>every()</b>`, но возвращает true, если хотя бы один элемент массива удовлетворяет условиям</p>
                        <CodeBlock>
                            {
`
// Генерируем рандомный возраст от 15 до 25
const min = 15;
const max = 25;
const age = Math.floor(Math.random() * (max - min + 1) + min);

const users = [
    {name: 'Вася', age: Math.floor(Math.random() * (max - min + 1) + min)},
    {name: 'Леха', age: Math.floor(Math.random() * (max - min + 1) + min)},
    {name: 'Миша', age: Math.floor(Math.random() * (max - min + 1) + min)},
];

console.log(users);

const teenagerAmongUs = users.some(user => user.age < 18);

if (teenagerAmongUs) {
    console.log('Среди людей есть несовершеннолетние');
} else {
    console.log('Все уже взрослые');
}`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>indexOf()</b>
                        <p>Возвращает позицию первого совпадения. Если совпадений нет возвращает `-1`</p>
                        <CodeBlock>
                            {
`const winners = ['Миша', 'Леха', 'Вася', 'Колян', 'Леха'];

const whereIsLeha = winners.indexOf('Леха');
if (whereIsLeha !== -1) {
    console.log('Первый Леха в массиве на позиции: ' + whereIsLeha);
} else {
    console.log('Лехи здесь нет');
}`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>lastIndexOf()</b>
                        <p>Возвращает позицию последнего совпадения. Если совпадений нет возвращает `-1`</p>
                        <CodeBlock>
                            {
`const winners = ['Миша', 'Леха', 'Вася', 'Колян', 'Леха'];

const whereIsLeha = winners.lastIndexOf('Леха');
if (whereIsLeha !== -1) {
    console.log('Последний Леха в массиве на позиции: ' + whereIsLeha);
} else {
    console.log('Лехи здесь нет');
}`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>Поддержка JSON</b>
                        <p>Основные методы:</p>
                        <ol>
                            <li>
                                <b>JSON.parse()</b>
                                <p>Парсит JSON строку и возвращает объект</p>
                                <CodeBlock>
                                    {
`const json = '{"name": "Леха"}';

console.log(JSON.parse(json).name);`
                                    }
                                </CodeBlock>
                            </li>
                            <li>
                                <b>JSON.stringify()</b>
                                <p>Конвертирует объект в строку</p>
                                <CodeBlock>
                                    {
`const obj = {name: "Леха"};

console.log(JSON.stringify(obj));`
                                    }
                                </CodeBlock>
                            </li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li>
                <b>Новые методы для работы с датой</b>
                <ul>
                    <li>
                        <b>now()</b>
                        <p>Возвращает количество миллисекунд, прошедших с 01.01.1970 по текущую дату</p>
                        <CodeBlock>
                            {
`console.log(Date.now() + ' миллисекунд прошло с 01.01.1970');`
                            }
                        </CodeBlock>
                    </li>
                    <li>
                        <b>valueOf()</b>
                        <p>Возвращает кол-во миллисекунд, прошедших с 01.01.1970 по выбранную дату</p>
                        <CodeBlock>
                            {
`const date = new Date('2000-01-01');
console.log(date.valueOf() + ' миллисекунд прошло с 01.01.1970 по 01.01.2000');`
                            }
                        </CodeBlock>
                    </li>
                </ul>
            </li>
            <li>
                <b>Геттеры и сеттеры (get и set)</b>
                <p>Помимо обычных свойств-данных у объекта появляются свойства-аксессоры. Это функции, которые позволяют получать и присваивать значения</p>
                <CodeBlock>
                    {
`const user = {
    name: "Леха",
    surname: "Алексеев",
    
    get fullName() {
        return this.name + ' ' + this.surname;
    },
    
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
};

console.log(user.fullName);

user.fullName = 'Серсея Ланнистер';
console.log(user.fullName);`
                    }
                </CodeBlock>
            </li>
        </ul>
    </>
}