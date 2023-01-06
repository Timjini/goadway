import React,{useState, useContext, useRef} from 'react';
import axios from 'axios';
import {Context} from '../context/Context';


export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {user,dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', {
              username : userRef.current.value,
              password : passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        }
        catch(err) {
            dispatch({type: "LOGIN_FAILURE"});
        }
    }
 console.log(isFetching);
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={userRef} />
        <input type="password" placeholder="password" ref={passwordRef}  />
        <button type="submit">Register</button>
    </form>
  )
}