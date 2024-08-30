import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('')
  const [users, setUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setUsers([...users ,username])
    console.log(users)
    setusername('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        
        <input 
        value={username}
        onChange={(e)=>{
          setusername(e.target.value);
        }}

        type="text" placeholder='Enter name'/>
        <button>Submit</button>
      </form>

      <div>
        {users.map(function(elm,idx){
          return <h2 key={idx}>{elm}</h2>
        })}
      </div>
    </div>
  )
}

export default App