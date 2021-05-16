import React, { useState, useRef } from 'react';


interface Person {
    firstName: string;
    lastName: string;
}

//props option 1:
// export const TextField React.FC<{ text: string }> = () => {

// Props option 2: 
interface Props {
    text: string;
    bool?: boolean;
    int?: number;
    fn?: (name: string) => string;
    //fnNoReturn?: (num: number) => void;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    //Can also do an object
}

interface TextNode {
    text: string
}

//Then plug the props in like this
export const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<TextNode>({ text: "hello" });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null); //I found this type by hovering over the ref below
    
    ///setCount(null)
    
    return (
        <div ref={divRef}>
          <input ref={inputRef} onChange={handleChange} />
        </div>
    );
};