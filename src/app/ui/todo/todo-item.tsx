import clsx from 'clsx';
import * as React from 'react';
import type { TodoItem } from '@/app/lib/definitions';

export default function TodoItem(option: TodoItem) {
    return <div className="w-full flex mb-2">
        <input type="checkbox"
               className="mr-5"
               readOnly
               checked={!!option.done}
        />
        <p className={clsx(
            {
                'text-gray-300': option.done ===
                    true,
            },
        )}>
            {option.name}
        </p>
    </div>;
}