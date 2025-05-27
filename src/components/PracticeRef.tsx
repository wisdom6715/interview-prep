import {useRef} from "react"

const PracticeUseRef = () =>{
    const focusRef = useRef<HTMLInputElement>(null)
    const focusInput = ()=>[
        focusRef?.current?.focus()
    ]
    return(
        <div>
            <input type="text" ref={focusRef} />
            <button onClick={focusInput}>focus</button>
        </div>
    )
}

export default PracticeUseRef