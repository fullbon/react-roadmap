import { Blockquote as BlockquoteType } from '@/app/lib/definitions';

export default function Blockquote({ children, from }: BlockquoteType) {
    return <>
        <div>
            <blockquote className='text-gray-300 italic border-s-4 pl-5'>
                {children}
            </blockquote>
        </div>
        {from && <p className='mt-2 text-xs blockquote-from italic'>{from}</p>}
    </>;
}