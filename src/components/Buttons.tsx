import React from "react";

type counterType ={
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>
}
const  ButtonComponent: React.FC<counterType> =({counter, setCounter}) =>{

    const increaseFunction = () =>{
        setCounter(counter + 1)
    }
      
    const decreaseFunction = () =>{
        setCounter(counter - 1)
    }
    return(
        <div>
            <button onClick={()=> increaseFunction()}>Increase</button>
            <button onClick={()=> decreaseFunction()}>Decrease</button>
        </div>
    )
}

export default ButtonComponent