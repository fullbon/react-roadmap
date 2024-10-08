const links = [
    {
        name: 'JavaScript',
        href: '/js',
        subLinks: [
            {
                name: 'Введение в JavaScript',
                href: '/js/introduction-to-js',
                subLinks: [
                    {
                        name: 'Что такое JS',
                        href: '/js/introduction-to-js/what-is-js',
                    },
                    {
                        name: 'История JS',
                        href: '/js/introduction-to-js/history-of-js',
                    },
                    {
                        name: 'Версии JS',
                        href: '/js/introduction-to-js/versions-of-js',
                        subLinks: [
                            {
                                name: 'ES1 (1997)',
                                href: '/js/introduction-to-js/versions-of-js/es1',
                            },
                            {
                                name: 'ES2 (1998)',
                                href: '/js/introduction-to-js/versions-of-js/es2',
                            },
                            {
                                name: 'ES3 (1999)',
                                href: '/js/introduction-to-js/versions-of-js/es3',
                            },
                            {
                                name: 'ES4 (не вышла)',
                                href: '/js/introduction-to-js/versions-of-js/es4',
                            },
                            {
                                name: 'ES5 (2009)',
                                href: '/js/introduction-to-js/versions-of-js/es5',
                            },
                            {
                                name: 'ES6 (2015)',
                                href: '/js/introduction-to-js/versions-of-js/es6',
                            },
                            {
                                name: 'ES7 (2016)',
                                href: '/js/introduction-to-js/versions-of-js/es7',
                                status: 'to-do',
                            },
                            {
                                name: 'ES8 (2017)',
                                href: '/js/introduction-to-js/versions-of-js/es8',
                                status: 'to-do',
                            },
                            {
                                name: 'ES9 (2018)',
                                href: '/js/introduction-to-js/versions-of-js/es9',
                                status: 'to-do',
                            },
                            {
                                name: 'ES10 (2019)',
                                href: '/js/introduction-to-js/versions-of-js/es10',
                                status: 'to-do',
                            },
                            {
                                name: 'ES11 (2020)',
                                href: '/js/introduction-to-js/versions-of-js/es11',
                                status: 'to-do',
                            },
                            {
                                name: 'ES12 (2021)',
                                href: '/js/introduction-to-js/versions-of-js/es12',
                                status: 'to-do',
                            },
                            {
                                name: 'ES13 (2022)',
                                href: '/js/introduction-to-js/versions-of-js/es13',
                                status: 'to-do',
                            },
                            {
                                name: 'ES14 (2023)',
                                href: '/js/introduction-to-js/versions-of-js/es14',
                                status: 'to-do',
                            },
                            {
                                name: 'ES15 (2024)',
                                href: '/js/introduction-to-js/versions-of-js/es15',
                                status: 'to-do',
                            },
                        ],
                    },
                    {
                        name: 'Как запустить JS?',
                        href: '/js/introduction-to-js//how-to-run-js',
                    },
                ],
            },
            {
                name: 'Переменные',
                href: '/js/all-about-variables',
                status: 'at-work',
                subLinks: [
                    {
                        name: 'Объявление переменных',
                        href: '/js/all-about-variables/var-declarations',
                    },
                    {
                        name: 'Hoisting (Подъем)',
                        href: '/js/all-about-variables/hoisting',
                    },
                    {
                        name: 'Имена переменных',
                        href: '/js/all-about-variables/naming-variables',
                    },
                    {
                        name: 'Области видимости',
                        href: '/js/all-about-variables/scopes',
                        status: 'at-work',
                    },
                ],
            },
        ],
    },
    { name: 'React', href: '/react', status: 'to-do' },
    {
        name: 'Собеседования',
        href: '/interviews',
        status: 'at-work',
        subLinks: [
            {
                name: 'PHP',
                href: '/interviews/php',
                subLinks: [
                    {
                        name: 'Паттерны',
                        href: '/interviews/php/patterns',
                        subLinks: [
                            {
                                name: 'Порождающие',
                                href: '/interviews/php/patterns/creational',
                            },
                            {
                                name: 'Структурные',
                                href: '/interviews/php/patterns/structural',
                            },
                            {
                                name: 'Поведенческие',
                                href: '/interviews/php/patterns/behavioral',
                            },
                        ]
                    },
                ]
            }
        ]
    },
];

export default links;