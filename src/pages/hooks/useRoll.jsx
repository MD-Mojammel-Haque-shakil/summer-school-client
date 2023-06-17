import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const useRoll = () => {
  const {user} = useContext(AuthContext)
  const [role, setRoles] = useState([])
  useEffect(()=>{
    fetch(`https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/user/${user.email}`)
    .then(res=> res.json())
    .then(data=> setRoles(data)
    )
  },[user])
  return (role);
};

export default useRoll;