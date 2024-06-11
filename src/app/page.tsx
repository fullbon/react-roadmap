import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex h-full flex-col items-center justify-center gap-2'>
            <h1>Дорожная карта React разработчика</h1>
            <p className='mb-8'>
                Цель – реализовать и/или пояснить все пункты дорожных карт Javascript и React разработчика
            </p>

            <p className='mb-16'>Ссылка на <a href='https://github.com/fullbon/react-roadmap' target='_blank'>Github</a></p>

            <div className='flex w-full space-x-8'>
                <Link href={'/js'}
                      title='Дорожная карта JS разработчика'
                      className='w-full flex items-center hover:bg-sky-100 rounded-lg p-5'>
                    <Image
                        src='/js.svg'
                        alt={'JavaScript Developer Roadmap'}
                        height='0'
                        width='0'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Link>
                <Link href={'/react'}
                      title='Дорожная карта React разработчика'
                      className='w-full flex items-center hover:bg-sky-100 rounded-lg p-5'>
                    <Image
                        src='/react.svg'
                        alt={'React Developer Roadmap'}
                        height='0'
                        width='0'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Link>
            </div>
        </div>
    );
}
