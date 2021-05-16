import React, { Children, useState } from 'react'

interface Props {
    children: (data: {
        count: number, 
        setCount: React.Dispatch<React.SetStateAction<number>>; // Yay hovering!
    }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(0); //got the setCount type from hovering over setCount here
       
    return (
        <div>
            {children({ count, setCount })}
        </div>
    );
}