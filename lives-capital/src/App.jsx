import { useState, useEffect } from 'react'
import {fetchBack} from './actions/fetchs'
import './App.css'

function App() {
  const [ipAddress, setIpAddress] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    
  },[])

  const handleClick = (e) => {
    e.preventDefault()

    fetchBack({name}).then(ip=>setIpAddress(ip.data))
  }

  return (
    <div>
      <form className="card" onSubmit={handleClick}>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={() => handleClick}>
          Get Ip Address
        </button>
      </form>
      <p className="read-the-docs">
        Ip address: { ipAddress }
      </p>
    </div>
  )
}

export default App
