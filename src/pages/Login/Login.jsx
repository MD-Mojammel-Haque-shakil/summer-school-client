import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";



const Login = () => {
   const {signIn } = useContext(AuthContext);
    const handleSignInWIthEmail = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       signIn(email, password)
       .then(result =>{
        const user = result.user;
        console.log(user)
        form.reset()
      })
    .catch(error=>{
        console.log(error)
      })
    }
 
   
    return (
       <div className="w-2/3 mx-auto my-4">
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center ms-4 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 text-lg">Please Login now to connect with us. after login you can see our course details & instructor information. also you can buy a course.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

        <form onSubmit={handleSignInWIthEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Login</button>
          {/* <button onClick={handleGoogleLogin} className="btn btn-info mt-2">Login With google</button> */}
           <Link to='/signup'> <p><span className="text-warning">Are u new here? Please Sign Up first</span></p></Link>
        </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;