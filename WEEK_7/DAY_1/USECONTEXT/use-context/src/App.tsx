import { useState } from 'react'
import './App.css'
import Child_1 from './child/child_1'
import Child_2 from './child/child_2'
import Child_3 from './child/child_3'
import { ParentContext } from "./context-api/context"

function App() {
  const [message, setMessage] = useState("Default Message")
  const updateMessage = (mssg: string) => {
    setMessage(mssg)
  }
  return (
    <>
      <ParentContext.Provider value={{ message, updateMessage }}>
        <Child_1 />
        <Child_2 />
        <Child_3 />
      </ParentContext.Provider>
      {console.log(message)}
      <strong>{message}</strong>
    </>
  )
}

export default App
