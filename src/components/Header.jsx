import { useContext } from 'react';
import { Context } from '../context/Context';


export default function Header() {

  const { user, dispatch } = useContext(Context);
   
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
    </>
  )
}
