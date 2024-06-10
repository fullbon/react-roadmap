import * as React from 'react';
import { clsx } from 'clsx';

type VerticalLineType = {
    height?: number;
}

const defaultHeightAround = 90; // px

export default function VerticalLine({ height = defaultHeightAround }: VerticalLineType) {
    return <div className='border-2 w-1 mx-auto border-blue-400' style={{height}}></div>;
}