


const Login = () => {
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

        <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Login</button>
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