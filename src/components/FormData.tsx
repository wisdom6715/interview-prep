
const FormDataFunction = () =>{
    return(
        <form onSubmit={(e)=>{
            const formData = new FormData(e.currentTarget);
            e.preventDefault()
            console.log(formData.get('fax'), 'and ', formData.get('standard'))
        }}>
            <input type="text" placeholder="stndard" name='standard'/>
            <input type="text" placeholder="enter fax" name='fax' />

            <button type="submit">submit</button>
        </form>
    )
}

export default FormDataFunction