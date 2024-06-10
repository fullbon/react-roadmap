import Blockquote from '@/app/ui/text/blockquote';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ES2',
};

export default function Page() {
    return <>
        <h2>ES2 (1998)</h2>
        <Blockquote from={<>Перевод с <a href="@/app/(roadmaps)/js/introduction-to-js/versions-of-js/(versions)/es2">lhuria94.github.io</a></>}>
            ECMAScript 2 был выпущен в июне 1998 года как исправление несоответствий между стандартами ECMA и ISO для JavaScript. Никаких новых изменений внесено не было.
        </Blockquote>
    </>
}