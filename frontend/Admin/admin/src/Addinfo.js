// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Addinfo = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [workplace, setWorkplace] = useState('');
//   const [moreDetails, setMoreDetails] = useState('');
//   const [salary, setSalary] = useState('');
//   const [leaves, setLeaves] = useState('');

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/addinfo', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           name,
//           age,
//           mobile,
//           address,
//           workplace,
//           moreDetails,
//           salary,
//           leaves,
//         }),
//       });

//       if (response.ok) {
//         console.log('Data saved successfully');
//         navigate('/');
//       } else {
//         console.error(
//           'Failed to save data. Server responded with:',
//           response.status,
//           response.statusText
//         );
//       }
//     } catch (error) {
//       console.error('An error occurred:', error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="px-6 py-8">
//           <h2 className="text-xl font-semibold mb-4">Add Employee Information</h2>
//           <form onSubmit={handleOnSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             {/* Other form fields go here */}
//             <div className="flex justify-end">
//               <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addinfo;



// import React, { useState } from 'react';
// import './App.css';
// import { useNavigate } from 'react-router-dom';


// const Addinfo = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [address, setAddress] = useState("");
//   const [workplace, setWorkplace] = useState("");
//   const [moreDetails, setMoredetails] = useState("");
//   const [salary, setSalary] = useState('');
//   const [leaves, setLeaves] = useState('');
   
  
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/addinfo', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           name,
//           age,
//           mobile,
//           address,
//           workplace,
//           moreDetails,
//           salary,
//           leaves,
//         }),
//       });

//       if (response.ok) {
//         console.log('Data saved successfully');
//         navigate('/');
//       } else {
//         console.error(
//           'Failed to save data. Server responded with:',
//           response.status,
//           response.statusText
//         );
//       }
//     } catch (error) {
//       console.error('An error occurred:', error.message);
//     }
//   };

  
   
//   return ( <div>
//     <div className='form'>
//     <h2>Add Employe Information</h2>  
//   <form onSubmit={handleOnSubmit}>
//         <table>
//           <tbody>
//           <tr>
//               <td>Email:</td>
//               <td>
//                 <input
//                   type='email'
//                   name='email'
//                   value={email} onChange={(e) => setEmail(e.target.value)} required/>
//               </td>
//             </tr>
//             <tr>
//               <td>Name:</td>
//               <td>
//                 <input
//                   type='text'
//                   name='name'
//                   value={name} onChange={(e) => setName(e.target.value)} required />
//               </td>
//             </tr>
//             <tr>
//               <td>Age:</td>
//               <td>
//                 <input
//                   type='number'
//                   name='age'
//                   value={age} onChange={(e) => setAge(e.target.value)} required/>
//               </td>
//             </tr>
//             <tr>
//               <td>Mobile Number:</td>
//               <td>
//                 <input
//                   type='text'
//                   name='mobile'
//                   value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
//               </td>
//             </tr>
//             <tr>
//               <td>Address:</td>
//               <td>
//                 <input
//                   type='text'
//                   name='address'
//                   value={address} onChange={(e) => setAddress(e.target.value)} required/>
//               </td>
//             </tr>
//             <tr>
//               <td>Workplace:</td>
//               <td>
//                 <input
//                   type='text'
//                   name='workplace'
//                   value={workplace} onChange={(e) => setWorkplace(e.target.value)} required />
//               </td>
//             </tr>
//             <tr>
//               <td>More Details:</td>
//               <td>
//                 <textarea
//                   name='moreDetails'
//                   value={moreDetails} onChange={(e) => setMoredetails(e.target.value)} required />
//               </td>
//             </tr>
//             <tr>
//                 <td>Salary:</td>
//                 <td>
//                   <input
//                     type='text'
//                     name='salary'
//                     value={salary}
//                     onChange={(e) => setSalary(e.target.value)}
//                     required
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td>Leaves:</td>
//                 <td>
//                   <input
//                     type='text'
//                     name='leaves'
//                     value={leaves}
//                     onChange={(e) => setLeaves(e.target.value)}
//                     required
//                   />
//                 </td>
//               </tr>
//           </tbody>
//         </table>
//         <button type="submit">Submit</button>
//   </form>
//     </div>
//   </div>

// );
// };

// export default Addinfo;


// // import React, { useState } from 'react';
// // import './App.css';
// // import { useNavigate } from 'react-router-dom';

// // const Addinfo = () => {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState('');
// //   const [name, setName] = useState('');
// //   const [age, setAge] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [workplace, setWorkplace] = useState('');
// //   const [moreDetails, setMoreDetails] = useState('');

// //   const handleOnSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:5000/addinfo', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email,
// //           name,
// //           age,
// //           mobile,
// //           address,
// //           workplace,
// //           moreDetails,
// //         }),
// //       });

// //       if (response.ok) {
// //         console.log('Data saved successfully');
// //         navigate('/');
// //       } else {
// //         console.error(
// //           'Failed to save data. Server responded with:',
// //           response.status,
// //           response.statusText
// //         );
// //       }
// //     } catch (error) {
// //       console.error('An error occurred:', error.message);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card w-100">
// //             <div className="card-header">
// //               <h2>Add Employee Information</h2>
// //             </div>
// //             <div className="card-body">
// //               <form onSubmit={handleOnSubmit}>
// //                 <div className="form-group">
// //                   <label>Email:</label>
// //                   <input
// //                     type="email"
// //                     className="form-control"
// //                     value={email}
// //                     placeholder='Email'
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Name:</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     placeholder='Name'
                    
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Age:</label>
// //                   <input
// //                     type="number"
// //                     className="form-control"
// //                     value={age}
// //                     placeholder='Age'
// //                     onChange={(e) => setAge(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Mobile Number:</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     value={mobile}
// //                     placeholder='Mobile Number'
// //                     onChange={(e) => setMobile(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Address:</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     value={address}
// //                     placeholder='Address'
// //                     onChange={(e) => setAddress(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Workplace:</label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     value={workplace}
// //                     placeholder='Workplace'
// //                     onChange={(e) => setWorkplace(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>More Details:</label>
// //                   <textarea
// //                     className="form-control"
// //                     value={moreDetails}
// //                     placeholder='More Details'
// //                     onChange={(e) => setMoreDetails(e.target.value)}
// //                     required
// //                   />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary btn-block">
// //                   Submit
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addinfo;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addinfo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [workplace, setWorkplace] = useState('');
  const [moreDetails, setMoreDetails] = useState('');
  const [salary, setSalary] = useState('');
  const [leaves, setLeaves] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/addinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          age,
          mobile,
          address,
          workplace,
          moreDetails,
          salary,
          leaves,
        }),
      });

      if (response.ok) {
        console.log('Data saved successfully');
        navigate('/');
      } else {
        console.error(
          'Failed to save data. Server responded with:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Employee Information</h2>
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder='EMAIL'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                   <label htmlFor="name">Name:</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder='NAME'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                   <label htmlFor="Age">Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder='AGE'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                   <label htmlFor="Mobile">Mobile:</label>
                  <input
                    type="mobile"
                    className="form-control"
                    id="mobile"
                    placeholder='Mobile Number'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                   <label htmlFor="workplace">Workplace:</label>
                  <input
                    type="workplace"
                    className="form-control"
                    id="workplace"
                    placeholder='Workplace'
                    value={workplace}
                    onChange={(e) => setWorkplace(e.target.value)}
                    required
                  />
                   <label htmlFor="Moredetails">Moredetails:</label>
                  <input
                    type="moredetails"
                    className="form-control"
                    id="moredetails"
                    placeholder='Moredetails'
                    value={moreDetails}
                    onChange={(e) => setMoreDetails(e.target.value)}
                    required
                  />
                   <label htmlFor="Salary">salary:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    value={salary}
                    placeholder='Salary'
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                   <label htmlFor="Leaves">Leaves:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="leaves"
                    value={leaves}
                    placeholder='Leaves'
                    onChange={(e) => setLeaves(e.target.value)}
                    required
                  />
                </div>
                {/* Other form fields go here */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addinfo;
