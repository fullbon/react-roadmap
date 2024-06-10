import { TimelineItem as TimelineItemType } from '@/app/lib/definitions';
import * as React from 'react';
import VerticalLine from '@/app/ui/timeline/vertical-line';

export default function TimelineItem(timelineItem: TimelineItemType) {
    return <>
        <div className='bg-blue-400 text-white w-48  m-auto rounded-full text-center p-4 font-bold text-2xl'>
            {timelineItem.date}
        </div>
        <VerticalLine height={30} />
        <div className='text-center bg-blue-400 text-sky-100 w-[calc(100%-6rem)] m-auto p-4 rounded-lg'>
            {timelineItem.text}
        </div>
        <VerticalLine />
        <VerticalLine height={60} />
    </>
}