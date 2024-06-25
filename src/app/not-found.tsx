'use client';

import * as React from 'react';
import Link from 'next/link';

const offers = [
    { name: 'историю JavaScript', link: '/js/introduction-to-js/history-of-js' },
    { name: 'ECMAScript 3', link: '/js/introduction-to-js/versions-of-js/es3' },
    { name: 'ECMAScript 5', link: '/js/introduction-to-js/versions-of-js/es5' },
    { name: 'ES6', link: '/js/introduction-to-js/versions-of-js/es6' },
    { name: 'переменные в JS', link: '/js/all-about-variables' },
    { name: 'объявление переменных', link: '/js/all-about-variables/var-declarations' },
    { name: 'именование переменных', link: '/js/all-about-variables/naming-variables' },
];

export default function NotFound() {
    const [offerKey, setOfferKey] = React.useState<number|null>(null);

    React.useEffect(() => {
        setOfferKey(Math.floor(Math.random() * offers.length));
    }, [])

    return (
        <div className="flex h-full flex-col items-center justify-center gap-2 mb-24 md:mb-0">
            {offerKey === null
                ? <p>Загрузка...</p>
                : <>
                    <h2 className="text-xl font-semibold">Кто здесь?</h2>
                    <p>Тут страницы нет, да и не было вроде никогда :\</p>
                    <p>Давай лучше почитаем про <Link prefetch href={offers[offerKey].link}>{offers[offerKey].name}</Link></p>
                </>
            }
        </div>
    );
}