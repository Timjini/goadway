import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username , setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
         //aync await
        const res = await axios.post('http://goadway-api.onrender.com/api/auth/register', {
            username,
            email,
            password
        })
        console.log(res)
    }




  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register