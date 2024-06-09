import { Blockquote as BlockquoteType } from '@/app/lib/definitions';

export default function Blockquote({ children, from }: BlockquoteType) {
    return <>
        <blockquote className='text-gray-300 italic'>
            {children}
        </blockquote>
        {from && <p className='mt-2 text-xs blockquote-from italic'>{from}</p>}
    </>;
}