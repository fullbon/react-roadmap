'use client';

import createElement from 'react-syntax-highlighter/dist/cjs/create-element';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react';

type PropsType = {
    children: string;
    wrapLines?: boolean;
    showLineNumbers?: boolean;
    language?: string;
    canExecute?: boolean;
    title?: string
}

export default function CodeBlock(props: PropsType) {
    const [result, setResult] = React.useState<React.ReactNode>(null);
    const {
        children,
        wrapLines = true,
        showLineNumbers = true,
        language = 'javascript',
        canExecute = true,
        title
    } = props;

    const execute = () => {
        let codeExecResult: any[];
        codeExecResult = [];
        const code = children.replace(/console.log\((.*)\)/g, 'codeExecResult.push($1)');

        eval(code);
        if (codeExecResult.length > 0) {
            setResult(
                <>
                    {codeExecResult.map((r, i) => {
                        return <div
                            key={i}>
                            {typeof r === 'string' ? r : JSON.stringify(r)}
                            <br />
                        </div>
                    })}
                </>
            )
        }
    };

    const reset = () => {
        setResult(null);
    }

    return <div className='my-5'>
        <SyntaxHighlighter
            style={docco}
            wrapLines={wrapLines}
            showLineNumbers={showLineNumbers}
            lineProps={{
                style: {
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                },
            }}
            language={language}
        >
            {children}
        </SyntaxHighlighter>
        {
            canExecute && language === 'javascript' && children.indexOf('console.log') !== -1
                ? <>
                    <div className='w-full p-5 border-4 border-sky-100 rounded-md mt-3'>
                        {
                            result
                                ? <div>{result}</div>
                                : <div className={'text-gray-400'}>Вывод...</div>
                        }
                    </div>
                <div className='flex'>
                    <button className='border-2 my-3 mr-3 p-2 border-sky-100 rounded-md' onClick={execute}>Выполнить</button>
                    <button className='border-2 my-3 p-2 border-sky-100 rounded-md' onClick={reset}>Сброс</button>
                </div>
                </>
                : null
        }
        <div className='text-gray-400 text-center w-full'>{title}</div>
    </div>;
}