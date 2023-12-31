
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Classes = () => {
  
const {user}  = useContext(AuthContext)
console.log(user)
    const handleAddNewClass = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const instructorName = form.instructorname.value;
        const email = form.instructoremail.value;
        const seats = form.availeableseats.value;
        const price= form.price.value;

        const newClass = {
            photo,
            name,
            instructorName,
            seats,
            price,
            email
        } 
        
        fetch('https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/classes', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
            //     Swal.fire({
            //         title: 'Success',
            //         text: 'toy added succecfully',
            //         icon: 'success',
            //         showConfirmButton: 'ok'
            //       })
            }
        })


    }
    return (
        <div>
         <form onSubmit={handleAddNewClass}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input type="text"  name="photo" className="input input-bordered" />
                    {/* defaultValue={user?.displayName}  */}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name="name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="instructorname"  defaultValue={user?.displayName}className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" name="instructoremail" defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Availeable seats</span>
                    </label>
                    <input type="text" name="availeableseats"  className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered" />
                </div>
                
            </div>
           
            <div className="form-control mt-6">
                <input className="btn btn-info btn-block" type="submit" value="Add A New Class" />
            </div>
        </form>
        </div>
    );
};

export default Classes;