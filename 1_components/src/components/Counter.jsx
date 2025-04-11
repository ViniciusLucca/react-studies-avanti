import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    //toda vez que o elemento (segundo parâmetro, no nosso caso, [counter]) for alterado, ele roda o callback que receber.
    // caso useEffect não receba um segundo argumento, ele só roda a callback 1 vez.
    useEffect(() => {
        document.title = `Contador: ${counter}`
        console.log('rodou')
    }, [counter])

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }
    const decrement = () => {
        setCounter((prevState) => prevState - 1)
    }
    return (
        <>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter