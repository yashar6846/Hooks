import React, {useState} from 'react'


const HookCounterTwo = () => {
    const initial = 0
    const [count, setCount] = useState(initial)

    const incrementFive  =()=> {
        for(let i = 0; i < 5; i ++)
          setCount (prevCount => prevCount + 1)
    }
    return (
        <div>
           <h1>{count}</h1> 
            <button onClick={()=> setCount(initial)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount +1)}>Increment</button>
            <button onClick={() => setCount(prevcount => prevcount - 1)}>Decrement</button>
            <button onClick={incrementFive}>InCrement 5</button>
            <button onClick={() => setCount(prevCount => prevCount + 10)}>Increment</button>
        </div>
    )
}

export default HookCounterTwo
