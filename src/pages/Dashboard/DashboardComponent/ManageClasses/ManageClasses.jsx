import {  useEffect, useState } from "react";
// import { AuthContext } from "../../../../Provider/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageClasses = () => {
   const [classes, setClasses] = useState([])
    // const {user} = useContext(AuthContext)
    // const axiosSecure = useAxiosSecure();
   useEffect(()=>{
       fetch("https://learn-language-school-server-mojammelhaque8967-gmailcom.vercel.app/classes")
       .then(res=>res.json())
       .then(data=>{
           setClasses(data)
           console.log(data)
       })
   }, [])
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
        <h2 className="text-4xl text-center font-bold mb-4">Manage Classes</h2>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="py-3 border-b">Class Img</th>
                      <th className="py-3 border-b">Class Name</th>
                      <th className="py-3 border-b">Instructor Name</th>
                      <th className="py-3 border-b">Instructor Email</th>
                      <th className="py-3 border-b">Available Seats</th>
                      <th className="py-3 border-b">Price</th>
                      <th className="py-3 border-b">Status</th>
                      <th className="py-3 border-b">Approve</th>
                      <th className="py-3 border-b">Deny</th>
                      <th className="py-3 border-b">Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((classData, index) => (
                       
                      <tr
                        key={classData._id}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="py-2 border-b">
                          <img
                            src={classData.photo}
                            alt={classData.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </td>
                        <td className="py-2 text-center border-b">
                          {classData.name}
                        </td>
                        <td className="py-2 text-center border-b">
                          {classData.instructorName}
                        </td>
                        <td className="py-2 text-center border-b">
                          {classData.email}
                        </td>
                        <td className="py-2 text-center border-b">
                          {classData.seats}
                        </td>
                        <td className="py-2 text-center border-b">
                          ${classData.price}
                        </td>
                        <td className="py-2 text-center border-b">
                          {classData.status}
                        </td>
                        <td className="py-2 text-center border-b">
                          <button
                            // onClick={() => handleApprove(classData)}
                            // disabled={classData.status !== "pending"}
                            className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded mr-2">
                            Approve
                          </button>
                        </td>
                        <td className="py-2 text-center border-b">
                          <button
                            // onClick={() => handleDeny(classData)}
                            // disabled={classData.status !== "pending"}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                            Deny
                          </button>
                        </td>
                        <td className="py-2 text-center border-b">
                          <button
                            // onClick={() => handleOpenFeedbackModal(classData)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded ml-2">
                            Feedback
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
        {/* {showFeedbackModal && (
          <FeedbackModal
            classData={selectedClass}
            onClose={() => setShowFeedbackModal(false)}
            onSendFeedback={handleSendFeedback}
          />
        )} */}
      </div>
        </div>
    );
};

export default ManageClasses;