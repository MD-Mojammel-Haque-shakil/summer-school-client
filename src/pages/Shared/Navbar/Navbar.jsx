import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
}

    return (
        <div className="bg-info">
            <div className="navbar bg-info">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Language School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><Link to='/'>Home</Link></li>
       <li> <Link>Instructors</Link></li>
      <li><Link to='/allclass'>All Classes</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
      user? <>
           <img title={user.displayName} style = {{width:40, height:40}} src={user.photoURL} alt="" />
          <button onClick={handleLogOut} className="btn" type="submit">log out</button>
           </> :
    <Link to='/login' className="btn">log in</Link>
    
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;