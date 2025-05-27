import { useState } from "react"
import React from "react"

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [start, setCountStart] = useState<number>(0)
  const increaseFunction = () =>{
    setCounter(counter + 1)
  }
  
  const decreaseFunction = () =>{
    setCounter(counter - 1)
  }
  const handleStartCounter = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    const value = Number(e.target.value)
    setCountStart(value)
    setCounter(value)
  }
  return (
    <div>
      <form>
        <h1>count starts at: </h1>
        <input type="number" onChange={handleStartCounter} value={start}/>
      </form>
      <h1>Current count is: {counter}</h1>

      <div>
        <button onClick={()=> increaseFunction()}>Increase</button>
        <button onClick={()=> decreaseFunction()}>Decrease</button>
      </div>
    </div>
  )
}

export default App
