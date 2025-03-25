import React, { useRef } from 'react'
import './App.css'

function App() {
  const inputField = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (inputField.current) {
      inputField.current.focus()
    }
  }
  return (
    <React.Fragment>
      <input type="text" ref={inputField} placeholder='Enter Name...' />
      <button onClick={handleClick}>Click Me !</button>
    </React.Fragment>
  )
}

export default App
