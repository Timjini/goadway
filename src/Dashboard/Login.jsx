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
    <div className="form-container">
      <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder="username" ref={userRef} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder="******" ref={passwordRef}  />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Goadway. All rights reserved.
      </p>
    </div>
    </div>
  )
}
