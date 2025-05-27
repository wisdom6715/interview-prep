import { useRef, useState } from "react";

const LogRef = () =>{
    const InputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string | null>('')
    const handleGrabValue = () =>{
        setValue(InputRef.current?.value!)
    }
    return(
        <div>
            <input type="text" ref={InputRef} value={'wisdom'}/>
            <button onClick={handleGrabValue}>grab</button>
            <h1>The value is: {value}</h1>
        </div>
    )
}

export default LogRef