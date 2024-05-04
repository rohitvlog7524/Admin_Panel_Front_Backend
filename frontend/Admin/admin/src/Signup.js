
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/signup', {
//         name,
//         email,
//         password,
//       });

//       if (response.status === 201) {
//         console.log('User registered successfully');
//         // Redirect to login or perform any other actions
//         navigate("/addinfo");
//       } else {
//         console.error('Failed to register user');
//       }
//     } catch (error) {
//       console.error('Error:', error);

//     }
//   };

//   return (
//     <div className="App">
//       <h1>Signup</h1>
//       <form onSubmit={handleOnSubmit}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('User registered successfully');
        // Redirect to login or perform any other actions
        navigate("/addinfo");
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    // <div className="App">
    //   <h1>Signup</h1>
    //   <form onSubmit={handleOnSubmit}>
    //     <label>Name:</label>
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    //     <label>Email:</label>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     <label>Password:</label>
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card w-100 mt-5">
          <div className="card-header">
            <h1 className="text-center">Signup</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control p-2" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control p-2" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder='Password ' className="form-control p-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary px-4 mt-4 btn-block">Submit</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Signup
