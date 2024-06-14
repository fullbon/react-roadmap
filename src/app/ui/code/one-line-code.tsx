import { OneLineCode as OneLineCodeType } from '@/app/lib/definitions';

export default function OneLineCode({children}: OneLineCodeType) {
    return <span className='bg-gray-100 rounded-md text-red-500 px-2'>{children}</span>
}