'use client';

import * as React from 'react';
import { TodoList } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function TodoList(props: TodoList) {
    return <>
        {props.options.map((option, index) => {
            return <div key={option.name + index}
                        className="w-full flex mb-2">
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
        })}
    </>;
}