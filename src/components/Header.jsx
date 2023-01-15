import { useContext } from 'react';
import { Context } from '../context/Context';


export default function Header() {

  const { user, dispatch } = useContext(Context);
   
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>

    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="logo">
            <img src="img/logo.png" alt="" className='img-fluid'/>
          </div>
        </div>
      </div>
    </div>
    {user ? (
      <button onClick={handleLogout}>Logout</button>
    ) : (
      <a href="/login">Login</a>
    )}
    </>
  )
}
