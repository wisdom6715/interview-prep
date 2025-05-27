// import { useState } from "react"
// import React from "react"
// import ButtonComponent from "./components/Buttons"
// import PracticeUseRef from "./components/PracticeRef"
// import LogRef from "./components/PracticeLog"
import StandardForm from "./components/Standard"
import FormDataFunction from "./components/FormData"
function App() {
  // const [counter, setCounter] = useState<number>(0)
  // const [start, setCountStart] = useState<number>(0)

  // const handleStartCounter = (e: React.ChangeEvent<HTMLInputElement>)=>{
  //   e.preventDefault()
  //   const value = Number(e.target.value)
  //   setCountStart(value)
  //   setCounter(value)
  // }
  return (
    <div>
      {/* <form>
        <h1>count starts at: </h1>
        <input type="number" onChange={handleStartCounter} value={start}/>
      </form>
      <h1>Current count is: {counter}</h1>

      <ButtonComponent setCounter={setCounter} counter={counter}/>

      <div>
        <PracticeUseRef />
      </div>

      <div>
        <LogRef />
      </div> */}

      <StandardForm />

      <div style={{marginTop: '5rem'}}>
        <FormDataFunction />
      </div>
    </div>
  )
}

export default App
