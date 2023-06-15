import { useEffect, useState } from "react";
import SIngleClass from "./SIngleClass";

const ShowClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-2 ms-4">
            {
             classes.map(item=> <SIngleClass key={item._id} item={item}
             
             ></SIngleClass> )
            }
        </div>
    );
};

export default ShowClasses;