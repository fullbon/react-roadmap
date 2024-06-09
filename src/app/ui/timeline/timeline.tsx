import * as React from 'react';
import type {
    Timeline as TimelineType,
    TimelineItem as TimelineItemType,
} from '@/app/lib/definitions';

const heightAround = 8; // rem

const VerticalLine = ({height = heightAround}) => {
    return <div className={'h-' + (height * 4) + ' border-2 w-1 mx-auto border-blue-400'}></div>
}

function TimelineItem(timelineItem: TimelineItemType) {
    return <>
        <div className='bg-blue-400 text-white w-48  m-auto rounded-full text-center p-4 font-bold text-2xl'>
            {timelineItem.date}
        </div>
        <VerticalLine height={1} />
        <div className='text-center bg-blue-400 text-sky-100 w-[calc(100%-6rem)] m-auto p-4 rounded-lg'>
            {timelineItem.text}
        </div>
        <VerticalLine />
        <VerticalLine height={4} />
    </>
}

export default function Timeline(props: TimelineType) {
    return <>
        <VerticalLine />
        {props.options.map((item) => <TimelineItem key={item.date} {...item} />)}
    </>
}