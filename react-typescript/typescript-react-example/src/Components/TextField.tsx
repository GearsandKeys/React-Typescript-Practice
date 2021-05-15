import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

//props option 1:
// export const TextField React.FC<{ text: string }> = () => {

// Props option 2: 
interface Props {
    text: string;
    ok?: boolean;
    int?: number;
    functionNoReturn?: (parameter: boolean) => void;
    functionReturn?: (parameter1: string) => string;
    object?: {
        f1: string
    }
    object2?: Person; //See above interface


}

//Then plug the props in like this
export const TextField: React.FC<Props> = ({text}) => {
    const [count, setCount] = useState<number | null>(5); //automatically infers, 5 is the type: number
    
    setCount(null)
    
    return(
        <div>
            <input />
            <h1> Test</h1>
        </div>
    );
};