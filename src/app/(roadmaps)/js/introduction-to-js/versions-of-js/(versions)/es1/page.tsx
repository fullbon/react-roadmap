import Blockquote from '@/app/ui/text/blockquote';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ES1',
};

export default function Page() {
    return <>
        <h1>ES1 (1997)</h1>
        <Blockquote from={<>Перевод с <a href="https://www.educative.io/blog/javascript-versions-history" target='_blank'>educative.io</a></>}>
            В 1997 году Netscape Communicator подала документы [на стандартизацию JavaScript] в ECMA International – компанию, которая стандартизирует информационные и коммуникационные системы.
            <br />
            <br />
            ECMA International использовала JavaScript Netscape и JScript Microsoft для создания стандартизации под названием ECMAScript, спецификации языка, на которой основаны оба языка. ECMA нельзя было назвать JavaScript, поскольку JavaScript был торговой маркой, принадлежащей Sun Microsystems (которая позже стала Oracle).
        </Blockquote>
    </>
}