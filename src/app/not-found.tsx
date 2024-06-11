'use client';

import * as React from 'react';
import Link from 'next/link';

const offers = [
    { name: 'историю JavaScript', link: '/js/introduction-to-js/history-of-js' },
    { name: 'ECMAScript 3', link: '/js/introduction-to-js/versions-of-js/es3' },
    { name: 'ECMAScript 5', link: '/js/introduction-to-js/versions-of-js/es5' },
    { name: 'переменные в JS', link: '/js/all-about-variables' },
];

export default function NotFound() {
    const [offerKey, setOfferKey] = React.useState(0);

    React.useEffect(() => {
        setOfferKey(Math.floor(Math.random() * offers.length));
    })

    return (
        <div className="flex h-full flex-col items-center justify-center gap-2">
            <h2 className="text-xl font-semibold">Кто здесь?</h2>
            <p>Тут страницы нет, да и не было вроде никогда :\</p>
            <p>Давай лучше почитаем про <Link prefetch href={offers[offerKey].link}>{offers[offerKey].name}</Link></p>
        </div>
    );
}