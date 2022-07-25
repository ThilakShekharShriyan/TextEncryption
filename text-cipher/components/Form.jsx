import { useState } from "react"
import { decrypt, encrypt } from "../service/encryption"

export default function Form() {

  const [hashVal , setHashVal] = useState('')
  const [realVal , setrealVal] = useState('')

  const handlencrypt = async (event) => {
    event.preventDefault()
    console.log(event.target.first.value)
    console.log(encrypt(event.target.first.value))
    setHashVal(encrypt(event.target.first.value))
  }
  const handledecrypt = async (event) => {
    event.preventDefault()
    console.log(event.target.first.value)
    console.log(decrypt(event.target.first.value))
    setrealVal(decrypt(event.target.first.value))
  }

  const refresh = ()=>{
    setHashVal('')
  }
    
    return (
      <div>
        <form onSubmit={handlencrypt}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <button type="submit">Submit</button>
        </form>
        <form onSubmit={handledecrypt}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <button type="submit">Submit</button>
        </form>
        <button onClick={refresh}>
          Refresh
        </button>
      
        {hashVal}
        {realVal}
      
      </div>

      

    )
  }