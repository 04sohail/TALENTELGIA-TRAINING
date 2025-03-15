import { useState } from 'react'
import "./App.css"
const App = () => {
  const [name, func] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    func(event.target.value)
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    const button = document.getElementById("password")
    if ((button?.getAttribute("type") == "text")) {
      document.getElementById("password")?.setAttribute("type", "password")
    } else {
      document.getElementById("password")?.setAttribute("type", "text")
    }
  }
  console.log(name);
  return (
    <>
      <form action="">
        <input type="password" id='password' onChange={handleChange} />
        <button onClick={handleClick}>EYE</button>
      </form>
    </>
  )
}

export default App