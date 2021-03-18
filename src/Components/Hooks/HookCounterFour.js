import React, {useState} from 'react'

const HookCounterFure = () => {
    const [items, setItems] = useState([])

    const clickItem = () => {
        setItems([...items, {
          id: items.length,
          value: Math.floor(Math.random() * 20) + 1
        }])
    }
    return (
        <div>
            <button onClick={clickItem}>Items</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFure
