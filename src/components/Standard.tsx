import React, { useState } from "react"
type userTypes= {
    name: string;
    email: string;
    phoneNumber: string;
    age: string
}

const StandardForm = () =>{
    const [user, setUser] = useState<userTypes>({name: '', email: '', phoneNumber: '' , age: ''})

    const handleSubmission = (e: React.FormEvent)=>{
        e.preventDefault()
        console.log(user)
        setUser({
            name: '', email: '', phoneNumber: '' , age: ''
        })
    }

    return(
        <form onSubmit={handleSubmission} style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="">enter name: </label>
            <input type="text" onChange={(e)=> setUser({...user, name: e.target.value})} value={user.name} required/>

            <label htmlFor="">enter email: </label>
            <input type="text" onChange={(e)=> setUser({...user, email:e.target.value})} value={user.email} required/>

            <label htmlFor="">enter age: </label>
            <input type="text" onChange={(e)=> setUser({...user, age:e.target.value})} value={user.age} required/>

            <label htmlFor="">enter phoneNumber: </label>
            <input type="text" onChange={(e)=> setUser({...user, phoneNumber: e.target.value})} value={user.phoneNumber} required/>

            <button type="submit">Submit</button>
        </form>
    )
}
export default StandardForm