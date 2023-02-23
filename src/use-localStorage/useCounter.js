import React, {useState} from "react";
import {useCounter} from "./useLocalStorage";

export default function NumberCounter() {
    const [value, incrementValue, decrementValue] = useCounter(3)
    // const [incrementValue, setIncrementValue] = useCounter()
    // const [decrementValue, setDecrementValue] = useCounter()
   

    return(
        <div>
            <div>
            My number is:
            {value} 
            {/* {counter} */}
            
            <button onClick={incrementValue}>
                Increment
            </button>
            <button onClick={decrementValue}>
                Decrement
            </button>
            </div>
        </div>
    )
}