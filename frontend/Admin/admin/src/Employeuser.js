// import React, { useState, useEffect } from 'react';
// import './Loginsignup.css';

// const Employeuser = () => {
//   const [userList, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/show'); // Replace with your actual API endpoint
//       if (response.ok) {
//         const userData = await response.json();
//         setUsers(userData);
//       } else {
//         console.error("Failed to fetch user data. Server responded with:", );
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching user data:", error.message);
//     }
//   };

//   return (
//     <div className='user'>
//       <h2>Employee Information</h2>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>Sr.no</th>
//             <th>Email</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Mobile Number</th>
//             <th>Address</th>
//             <th>Workplace</th>
//             <th>More Details</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userList.map((user, index) => (
//             <tr key={index}>
//             <td>{index + 1}</td>
//              <td>{user.email ? user.email : 'N/A'}</td>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>{user.mobile}</td>
//               <td>{user.address}</td>
//               <td>{user.workplace}</td>
//               <td>{user.moreDetails}</td>
//               <td>{user.date || new Date().toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Employeuser;


import React, { useState, useEffect } from 'react';
import './Loginsignup.css';

const Employeuser = () => {
  const [userList, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/show'); // Replace with your actual API endpoint
      if (response.ok) {
        const userData = await response.json();
        setUsers(userData);
      } else {
        console.error("Failed to fetch user data. Server responded with:", );
      }
    } catch (error) {
      console.error("An error occurred while fetching user data:", error.message);
    }
  };
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('User deleted successfully');
        fetchUserData(); // Refresh user data after deletion
      } else {
        console.error('Failed to delete user. Server responded with:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while deleting user:', error.message);
    }
  };

  return (
    <div className='user'>
      <h2>Employee Information</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Email</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Workplace</th>
            <th>More Details</th>
            <th>Salary</th> {/* Add Salary column */}
            <th>Leaves</th> {/* Add Leaves column */}
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email ? user.email : 'N/A'}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.workplace}</td>
              <td>{user.moreDetails}</td>
              <td>{user.salary}</td> {/* Display Salary */}
              <td>{user.leaves}</td> {/* Display Leaves */}
              <td>{user.date || new Date().toLocaleDateString()}</td>
             <td><button onClick={() => handleDelete(user._id)}>Delete</button> {/* Button to trigger delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employeuser;
