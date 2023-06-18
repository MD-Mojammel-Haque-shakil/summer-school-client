import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
// import { GoogleAuthProvider, signInWithPopup,getAuth  } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import useAuth from "../../hooks/useAuth";
// import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const users = {
              name: data.name,
              email: data.email,
              photoURl: data.photoUrl,
              role: "student",
            };
            console.log(users);
            fetch("https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(users),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            // Handle error while updating user profile
          });
      })
      .catch((error) => {
        console.log(error);
        // Handle error while creating user
      });
  };
  //google log in
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();

//   const handleGoogleLogin =()=>{
//     signInWithPopup(auth, googleProvider)

//     .then(result=>{
//       const user =result.user;
//       console.log(user);
//     })

//     .catch(error=>{
//       console.log(error)
//     })
// }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl text-center font-bold mb-4 text-yellow-500">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*\W)/,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="text-red-500 text-xs italic">Password is required</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className="text-red-500 text-xs italic">
              Password must be at least 6 characters long
            </p>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <p className="text-red-500 text-xs italic">
              Password must contain at least one capital letter and one special character
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword', { required: true })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">Please confirm your password</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoUrl"
            type="text"
            placeholder="Enter your photo URL"
            {...register('photoUrl')}
          />
          {errors.photoUrl && (
            <p className="text-red-500 text-xs italic">Photo URL is required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <Link to='/register'> <p><span className="text-warning mb-2">Are u new here? Please Sign Up first</span></p></Link>
          {/* <button className='btn btn-primary w-3/4 mx-auto mb-4'>Login with Google</button> */}
        </div>
      </form>

      <div>
      </div>
   
    </div>
  );
};

export default SignUp;