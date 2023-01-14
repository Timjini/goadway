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
            const res = await axios.post('https://goadway-api.onrender.com/api/auth/login', {
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
    <div className="form-container">
          <form className="" onSubmit={handleSubmit}>
            <div className="">
              <label className="" for="username">
                Username
              </label>
              <input className='' type="text" placeholder="username" ref={userRef} />
            </div>
            <div className="mb-6">
              <label className="" for="password">
                Password
              </label>
              <input className='' type="password" placeholder="******" ref={passwordRef}  />
            </div>
            <div className="">
              <button className="" type="submit">
                Sign In
              </button>
              <a className="" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
    </div>
  )
}
