import React from 'react';

interface BadgesProps {
    children?: string | React.ReactNode;
    color?: string;
    refSpan?: React.RefObject<HTMLTextAreaElement>;
}

const Badges: React.FunctionComponent<BadgesProps> = ({children = 'Badge', color = 'blue', refSpan, ...props}) => {

    const colorBanner: string = `bg-${color}-50 hover:bg-${color}-70 text-${color}-500: text-${color}-700 ring-1 hover:ring-2 ring-inset ring-${color}-500 hover:ring-${color}-800`;
    const variableClassName: string = `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorBanner} hover:shadow-lg`;
    
    return (
        <>
            <span className={variableClassName} ref={refSpan}>
                {children}
            </span>
        </>
    )
}

export type {
    BadgesProps
}

export {
    Badges
}