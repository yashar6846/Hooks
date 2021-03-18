import React, {useState} from 'react'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => setCount(count + 1)}> counter{count}</button>
        </div>
    )
}

export default HookCounter
