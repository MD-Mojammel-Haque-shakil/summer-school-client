import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            
            updateProfile(user, {
                displayName: name, photoURL: photo
              })
              .then(() => {
                alert('registation completed')
             })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
          <div className="card flex-shrink-0 w-full mx-auto my-4 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h3 className="text-2xl text-center">Sign Up Now</h3>
        <form onSubmit={handleSignUp}>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Name</span>
          </label> */}
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">photo url</span>
          </label> */}
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Sign Up</button>
         
           <Link to='/login'> <p className="mt-4"><span className="text-warning">Already Have Account? Please Login Now</span></p></Link>
        </div>
        </form>
      </div>
      
    </div>
        </div>
    );
};

export default SignUp;