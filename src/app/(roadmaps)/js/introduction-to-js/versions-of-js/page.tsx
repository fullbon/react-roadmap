import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
    title: 'ECMAScript',
};

export default function JsVersions() {
    return <div className='pb-32'>
        <h1>Версии JavaScript (ECMAScript)</h1>
        <ul>
            <li><Link href={'versions-of-js/es1'}>ES1 (1997)</Link></li>
            <li><Link href={'versions-of-js/es2'}>ES2 (1998)</Link></li>
            <li><Link href={'versions-of-js/es3'}>ES3 (1999)</Link></li>
            <li><Link href={'versions-of-js/es4'}>ES4 (не вышла)</Link></li>
            <li><Link href={'versions-of-js/es5'}>ES5 (2009)</Link></li>
            <li><Link href={'versions-of-js/es6'}>ES6 (2015)</Link></li>

            <br />
            <p><b>TODO</b></p>
            <li><Link href={'versions-of-js/es7'}>ES7 (2016)</Link></li>
            <li><Link href={'versions-of-js/es8'}>ES8 (2017)</Link></li>
            <li><Link href={'versions-of-js/es9'}>ES9 (2018)</Link></li>
            <li><Link href={'versions-of-js/es10'}>ES10 (2019)</Link></li>
            <li><Link href={'versions-of-js/es11'}>ES11 (2020)</Link></li>
            <li><Link href={'versions-of-js/es12'}>ES12 (2021)</Link></li>
            <li><Link href={'versions-of-js/es13'}>ES13 (2022)</Link></li>
            <li><Link href={'versions-of-js/es14'}>ES14 (2023)</Link></li>
            <li><Link href={'versions-of-js/es15'}>ES15 (2024)</Link></li>
        </ul>
    </div>
}