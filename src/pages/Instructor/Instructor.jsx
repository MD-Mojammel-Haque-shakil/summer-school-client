import { useEffect, useState } from "react";


const Instructor = () => {
    const [data, useData]= useState([])
    useEffect(()=>{
        fetch("instructor")
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Instructor;