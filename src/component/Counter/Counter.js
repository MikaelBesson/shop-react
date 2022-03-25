
import {useEffect, useState} from "react";

export const Counter = function () {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "compteur: " + count;
    }, [count]);

    const [factor, setFactor] = useState(2);
    useEffect(() => {
        console.log("debug, factor vaut: " + factor);
    }, [factor]);


    useEffect(() => {
        document.title = "compteur: " + count + "facteur: " + factor;
    },[count])

    return (
        <div className='counter'>
            <button onClick={() =>setCount(count + 1)}>incrementer</button>
            <button onClick={() =>setCount(count - 1)}>decrementer</button>
            <button onClick={() =>setCount(count * 2)}>fois 2</button>
            <button onClick={() =>setCount(count / 2)}>div 2</button>

            <p>Compteur: {count}</p>
            <p>Facteur: {factor}</p>
            <span>{count}</span>
        </div>
    );
};