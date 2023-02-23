import { useState } from "react";

export function useCounter(num) {
    const [number, setNumber] = useState(num)

    const incrementValue = () => {
        setNumber((curr) => curr +1)
    }
    const decrementValue = () => {
        setNumber((curr) => curr - 1)
    }
    return[number, incrementValue, decrementValue]
}