import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { addCart } from "../redux/Slice"
import { useSelector } from 'react-redux'


function App() {
  const data = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const store_data = {
      test_id: "Shaikh",
      cart_id: data.current?.value
    }
    dispatch(addCart(store_data))
    if (data.current) {
      data.current.value = ""
    }
  }
  const carts = useSelector(state => state.carts)
  console.log("test: ", carts);
  return (
    <>
      <div>
        <h2>Cart Data:</h2>
        <ul>
          {carts.map((cart: any, index: number) => (
            <li key={index}>
              {cart.user_id} {cart.cart_id}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={data} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
