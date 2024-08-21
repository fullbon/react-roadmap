import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return <div className='flex h-full flex-col items-center justify-center gap-2'>
        <h1>Подготовка к собеседованиям</h1>
        <p className='md:mb-8'>
            Здесь я постараюсь собрать наиболее часто упоминаемые вопросы на собеседованиях.
        </p>

        <p className='md:mb-16'>Ссылка на <a href='https://github.com/fullbon/react-roadmap' target='_blank'>Github</a></p>

        <div className='flex w-full space-x-8 md:mb-4'>
            <Link href={'/interviews/php'}
                  title='Дорожная карта JS разработчика'
                  className='w-full flex items-center hover:bg-sky-100 rounded-lg p-5'>
                <Image
                    src='/php.svg'
                    alt={'ЧАВО PHP'}
                    height='0'
                    width='0'
                    style={{ width: '100%', height: 'auto' }}
                />
            </Link>
        </div>

        <p><b>Легенда</b></p>
        <div className='flex space-y-2 md:space-y-0 md:space-x-5 flex-wrap items-center flex-col md:flex-row'>
            <div className='w-44 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 bg-gray-50 text-center cursor-pointer'>
                Готовая ссылка
            </div>
            <div className='w-44 rounded-md bg-gray-50 p-3 text-sm font-medium bg-green-100 hover:bg-green-200 hover:text-green-900 text-center cursor-pointer'>
                В работе
            </div>
            <div className='w-44 rounded-md p-3 text-sm font-medium bg-red-50 hover:bg-red-200 hover:text-red-900 cursor-pointer text-center'>
                TODO
            </div>
        </div>
    </div>
}