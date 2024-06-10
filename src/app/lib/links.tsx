const links = [
    {
        name: 'JavaScript',
        href: '/js',
        subLinks: [
            {
                name: '1. Введение в JavaScript',
                href: '/introduction-to-js',
                subLinks: [
                    {
                        name: '1.1. Что такое JS',
                        href: '/what-is-js',
                    },
                    {
                        name: '1.2. История JS',
                        href: '/history-of-js',
                    },
                    {
                        name: '1.3. Версии JS',
                        href: '/versions-of-js',
                        subLinks: [
                            {
                                name: 'ES1 (1997)',
                                href: '/es1',
                            },
                            {
                                name: 'ES2 (1998)',
                                href: '/es2',
                            },
                            {
                                name: 'ES3 (1999)',
                                href: '/es3',
                            },
                            {
                                name: 'ES4 (не вышла)',
                                href: '/es4',
                            },
                            {
                                name: 'ES5 (2009)',
                                href: '/es5',
                            },
                            {
                                name: 'ES6 (2015)',
                                href: '/es6',
                            },
                        ]
                    },
                    {
                        name: '1.4. Как запустить JS?',
                        href: '/how-to-run-js',
                    },
                ]
            },
            {
                name: '2. Переменные',
                href: '/all-about-variables'
            }
        ],
    },
    { name: 'React', href: '/react' },
];

export default links;