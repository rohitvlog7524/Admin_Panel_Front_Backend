// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Loginsignup.css";
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


// const handleOnSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('http://localhost:5000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
    

//     const data = await response.json();

//     if (data.error) {
//       alert(data.error);
//     } else {
//       // Check if the email and password match admin credentials
//       const isAdmin = email === 'admin@gmail.com' && password === 'admin999';

//       if (isAdmin) {
//         // Save user type to session or local storage
//         const userType = 'admin';
//         sessionStorage.setItem("userType", userType);
//         localStorage.setItem("userType", userType);

//         // Save user credentials
//         sessionStorage.setItem("email", email);
//         localStorage.setItem("email", email);
//         sessionStorage.setItem("password", password);
//         localStorage.setItem("password", password);

//         setIsLoggedIn(true);
//         alert("Login successful");

//         // Redirect to the admin dashboard
//         navigate("/dashboard1");
//       } else {
//         // For regular employees
//         // Save user type to session or local storage
//         const userType = 'employee';
//         sessionStorage.setItem("userType", userType);
//         localStorage.setItem("userType", userType);

//         // Save user credentials
//         sessionStorage.setItem("email", email);
//         localStorage.setItem("email", email);
//         sessionStorage.setItem("password", password);
//         localStorage.setItem("password", password);

//         setIsLoggedIn(true);
//         alert("Login successful");

//         // Redirect to the employee dashboard
//         navigate("/dashboard");
//       }
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


// const setIsLoggedIn = () => {
//   const type = password === 'password' ? 'text' : 'password';
//   setPassword(type);
// }

//   return (
//     <section className="card">
//     <div className="form">
//       <h1>Login</h1>
//       <div className="form-body">
//         <form onSubmit={handleOnSubmit}>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <label>Password:</label>

//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//                 <button type="submit">Submit</button>

//                 <p>If Email not register First<Link to="/signup">Signup</Link></p>

//             </form>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Loginsignup.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const handleOnSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    

    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      // Check if the email and password match admin credentials
      const isAdmin = email === 'admin@gmail.com' && password === 'admin999';

      if (isAdmin) {
        // Save user type to session or local storage
        const userType = 'admin';
        sessionStorage.setItem("userType", userType);
        localStorage.setItem("userType", userType);

        // Save user credentials
        sessionStorage.setItem("email", email);
        localStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        localStorage.setItem("password", password);

        setIsLoggedIn(true);
        alert("Login successful");

        // Redirect to the admin dashboard
        navigate("/dashboard1");
      } else {
        // For regular employees
        // Save user type to session or local storage
        const userType = 'employee';
        sessionStorage.setItem("userType", userType);
        localStorage.setItem("userType", userType);

        // Save user credentials
        sessionStorage.setItem("email", email);
        localStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        localStorage.setItem("password", password);

        setIsLoggedIn(true);
        alert("Login successful");

        // Redirect to the employee dashboard
        navigate("/dashboard");
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


const setIsLoggedIn = () => {
  const type = password === 'password' ? 'text' : 'password';
  setPassword(type);
}

  return (
    <>
    {/* <section className='abc'>
    <div className="form">
      <div className='card'>
      <h1 className='text-center'>Login</h1>
      <div className="form-body">
        <form onSubmit={handleOnSubmit}>
          <label>Email:</label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label >Password:</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
          <button type="submit">Submit</button>

                <p>If Email not register First<Link to="/signup">Signup</Link></p>

            </form>
      </div>
    </div>
    </div>
    </section> */}

<section className='abc'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className='card w-100 mt-5'>
              <h1 className='card-header text-center'>Login</h1>
              <div className="card-body">
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control p-2" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control p-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className='d-flex justify-content-center'>
                  <button type="submit" className="btn btn-primary px-4 mt-4 btn-block">Submit</button>
                  </div>
                  
                  <p className="mt-3 text-center">If Email not registered, <Link to="/signup">Signup</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login; 