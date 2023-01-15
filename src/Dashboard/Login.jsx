import React,{useState, useContext, useRef} from 'react';
import axios from 'axios';
import {Context} from '../context/Context';


// url api localhost 3000

const API_URL = 'http://localhost:3000/api/auth/login';

// const API_URL = 'https://goadway-api.onrender.com/api/auth/login';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {user,dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post((API_URL), {
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
            <h2>Login</h2>
            <div className="">
              <label className="" for="username">
                Username
              </label>
              <input className='form-control' type="text" placeholder="username" ref={userRef} />
            </div>
            <div className="mb-6">
              <label className="" for="password">
                Password
              </label>
              <input className='form-control' type="password" placeholder="******" ref={passwordRef}  />
            </div>
            <div className="">
              <button className="btn btn-primary mt-2" type="submit">
                Sign In
              </button>
            </div>
          </form>
    </div>


  )
}



{/* <div className="form-container">
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
    </div> */}




//     <>
// <section className="vh-100">
//   <div className="container-fluid h-custom">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-md-9 col-lg-6 col-xl-5">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//           className="img-fluid" alt="Sample image" />
//       </div>
//       <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//         <form onSubmit={handleSubmit}>
//           <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//             <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//             <button type="button" className="btn btn-primary btn-floating mx-1">
//               <i className="fab fa-facebook-f"></i>
//             </button>

//             <button type="button" className="btn btn-primary btn-floating mx-1">
//               <i className="fab fa-twitter"></i>
//             </button>

//             <button type="button" className="btn btn-primary btn-floating mx-1">
//               <i className="fab fa-linkedin-in"></i>
//             </button>
//           </div>

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">Or</p>
//           </div>

//           <div className="form-outline mb-4">
//             <input type="email" id="form3Example3" className="form-control form-control-lg"
//               placeholder="Enter a valid email address"  ref={userRef} />
//             <label className="form-label" for="form3Example3">Email address</label>
//           </div>

//           <div className="form-outline mb-3">
//             <input type="password" id="form3Example4" className="form-control form-control-lg"
//               placeholder="Enter password" ref={passwordRef} />
//             <label className="form-label" for="form3Example4">Password</label>
//           </div>

//           <div className="d-flex justify-content-between align-items-center">
//             <div className="form-check mb-0">
//               <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//               <label className="form-check-label" for="form2Example3">
//                 Remember me
//               </label>
//             </div>
//             <a href="#!" className="text-body">Forgot password?</a>
//           </div>

//           <div className="text-center text-lg-start mt-4 pt-2">
//             <button type="button" className="btn btn-primary btn-lg"
//               >Login</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   </div>
//   <div
//     className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//     <div className="text-white mb-3 mb-md-0">
//       Copyright © 2020. All rights reserved.
//     </div>

//     <div>
//       <a href="#!" className="text-white me-4">
//         <i className="fab fa-facebook-f"></i>
//       </a>
//       <a href="#!" className="text-white me-4">
//         <i className="fab fa-twitter"></i>
//       </a>
//       <a href="#!" className="text-white me-4">
//         <i className="fab fa-google"></i>
//       </a>
//       <a href="#!" className="text-white">
//         <i className="fab fa-linkedin-in"></i>
//       </a>
//     </div>
//   </div>
// </section>
// </>