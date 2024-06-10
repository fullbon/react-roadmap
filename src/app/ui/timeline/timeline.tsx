import * as React from 'react';
import type {
    Timeline as TimelineType,
} from '@/app/lib/definitions';
import TimelineItem from '@/app/ui/timeline/timeline-item';
import VerticalLine from '@/app/ui/timeline/vertical-line';

export default function Timeline(props: TimelineType) {
    return <>
        <VerticalLine />
        {props.options.map((item) => <TimelineItem key={item.date} {...item} />)}
    </>
}