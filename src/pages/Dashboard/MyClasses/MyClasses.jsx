import { useContext , useState, useEffect} from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyClasses = () => {
    const {user} = useContext(AuthContext)
     const [classes, setClasses] = useState([])
   
     useEffect(()=>{
        fetch("https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/classes")
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
        })
    }, [])

    const AllClasses = classes.filter(
        (classData) => classData.instructorEmail === user?.email
      );
console.log(AllClasses)

  
    return (
        <div>
            <div className="container">
      <h2 className="text-2xl text-center font-bold mb-4">
        Instructor Classes
      </h2>
      <div className="overflow-x-auto">
        <div className="w-full overflow-scroll">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Class Image</th>
                <th className="px-4 py-2">Class Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 border">Available Seats</th>
                <th className="px-4 border">Price</th>
                <th className="px-4 py-2">Total Enrolled Students</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {classes.map((classData, index) => (
                <tr
                  key={classData._id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <td className="px-4 py-2 border"> {index + 1} </td>
                  <td className="py-2 border-b">
                    <img
                      src={classData?.classImage}
                      alt={classData?.className}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border">{classData?.className}</td>
                  <td className="px-4 py-2 border">{classData?.status}</td>{" "}
                  <td className="py-2  border">{classData.availableSeats}</td>
                  <td className="py-2 border">${classData.price}</td>
                  <td className="px-4 py-2 border">
                    {classData?.enrolledStudents?.length || 0}
                  </td>
                  <td className="px-4 py-2 border">
                    {classData.status ? classData.feedback : "No Feedback"}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    //   onClick={() => handleUpdateClick(classData)}
                      >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
        </div>
    );
};

export default MyClasses;