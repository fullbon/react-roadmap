'use client';

import * as React from 'react';
import type { TodoList } from '@/app/lib/definitions';
import TodoItem from '@/app/ui/todo/todo-item';

export default function TodoList(props: TodoList) {
    return <>
        {props.options.map((option, index) => <TodoItem
            key={option.name + index}
            {...option}
        />)}
    </>;
}