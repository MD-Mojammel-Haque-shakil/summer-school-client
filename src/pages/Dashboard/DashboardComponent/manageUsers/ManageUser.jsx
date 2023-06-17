import { useEffect, useState } from "react";


const ManageUser = () => {
   
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    }, [])
 
const handleMakeAdmin = ()=>{

}
const handleMakeInstructor = () =>{

}
    return (
        <div>
            <h2>gggggggggg</h2>
            <div className="overflow-x-auto">
        <h1 className="text-4xl text-center font-bold mb-4">Users List</h1>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b">#</th>
              <th className="py-2 px-4 bg-gray-100 border-b">User Photo</th>

              <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Role</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>

                <td className="py-2 px-4 border-b">
                  <img
                    src={user.photoURl}
                    alt={user.photoURl}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="btn"
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin"}>
                    Make Admin
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="btn"
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role === "instructor"}>
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageUser;