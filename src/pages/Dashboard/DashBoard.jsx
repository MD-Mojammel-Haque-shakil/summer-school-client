import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
const isAdmin = true;
const isInstructor = false;
    return (
        <div>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      { isAdmin? <>
       <li><NavLink to='/dashboard/manageclass'>manage classes</NavLink></li>
       <li><NavLink to='/dashboard/manageuser'>manage users</NavLink></li>
      </> : isInstructor? 
      <> <li><Link to='/classes' >Add classes</Link></li>
       <li><Link to=''>All class</Link></li></> :  <>
       <li><Link>selected classes</Link></li>
       <li><Link>enroll classes</Link></li>
       <li><Link>payment history</Link></li>
       </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;