import { useEffect, useState } from "react";
import SIngleClass from "../Home/SHowClasses/SIngleClass";


const AllClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    }, [])
    return (
       <div className="my-8">
         <h3 className="text-3xl uppercase text-center font-bold my-4">OUR All CLASSES</h3>
         <div className="grid grid-cols-3 gap-2 ms-4">
           
            {
             classes.map(item=> <SIngleClass key={item._id} item={item}
             
             ></SIngleClass> )
            }
        </div>
       </div>
    );
};

export default AllClass;