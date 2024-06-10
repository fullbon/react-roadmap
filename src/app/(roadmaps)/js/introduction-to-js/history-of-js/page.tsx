import Timeline from '@/app/ui/timeline/timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'История JS',
};

const historyTimeLine = [
    {
        date: '1995',
        text: 'Компанией Netscape Communications и, в частности, Брендоном Эйхом (Brendan Eich) был разработан язык программирования Mocha, который предназначался для программирования как на стороне клиента, так и на стороне сервера. Позднее был переименован в LiveScript',
    },
    {
        date: '1996',
        text: 'Спустя около года после релиза Netscape переименовывают LiveScript в JavaScript из-за большой популярности языка Java',
    },
    {
        date: 'июнь 1997',
        text: 'Была выпущена первая спецификация ECMAScript для стандартизации JavaScript – ES1',
    },
    {
        date: 'июнь 1998',
        text: 'Выпуск ES2',
    },
    {
        date: 'декабрь 1999',
        text: 'Выпуск ES3',
    },
    {
        date: '2008-2009',
        text: 'К 2008 году был запланирован выпуск ES4, но из-за множества споров и несогласия поддержки со стороны разработчиков браузеров от работы над ES4 отказались. Вместо этого относительно скромное обновление в виде стандарта ES3.1 переименовали в ES5.',
    },
    {
        date: '2015-н.в.',
        text: 'Выпуски ES6/ES2015 – ES[x]/ES[yyyy]. Начиная с 2015 года спецификации выпускаются ежегодно и имеют соответствующие названия',
    },
];

export default function History() {
    return <>
        <h1>История JavaScript</h1>
        <Timeline options={historyTimeLine}/>
    </>;
}