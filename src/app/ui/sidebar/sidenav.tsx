import Link from 'next/link';
import NavLinks from '@/app/ui/sidebar/nav-links';

export default function Sidenav() {
    return (
        <div className="flex h-auto flex-col px-3 pt-4 md:px-2">
            <Link
                className="mb-5 flex items-end justify-start rounded-md bg-blue-600 p-4"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    Roadmap
                </div>
            </Link>
            <div className="flex grow justify-between md:space-x-2 flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
            </div>
        </div>
    );
}
