import React, { useState } from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({ ferstName: '', lastName: '' })
    return (
        <div>
            <form>
            <input type="text" value={name.ferstName} onChange={(e) => setName({...name, ferstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value })} />
            <h3>Your name {name.ferstName}</h3>
            <h3>lastName {name.lastName}</h3>
            </form>
        </div>
    )
}

export default HookCounterThree
