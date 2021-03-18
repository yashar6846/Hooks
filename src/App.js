import React from 'react'
import Hook from './Components/Hooks/ClassCounter'
import HookCounter from './Components/Hooks/HookCounter'
import HookCounterFure from './Components/Hooks/HookCounterFour'
import HookCounterThree from './Components/Hooks/HookCounterThree'
import HookCounterTwo from './Components/Hooks/HookCounterTwo'

 const App = () => {
  return (
    <>
      <Hook />
      <HookCounter />
      <HookCounterTwo />
      <br />
      <div>
        <HookCounterThree />
      </div>
      <div>
        <HookCounterFure />
      </div>
    </>
  )
}
export default App