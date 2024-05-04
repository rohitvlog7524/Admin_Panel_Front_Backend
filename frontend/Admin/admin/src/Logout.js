// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Optionally, you can show a confirmation dialog here
//     const shouldLogout = window.confirm('Are you sure you want to logout?');

//     if (shouldLogout) {
//       // Perform your logout logic here

//       // Navigate to the home page ('/')
//       navigate('/', { replace: true });
//     }
//   };

//   return (
//     <>
//       <div  className="form">
//         <h1>Logout</h1>
//         <ul>
//           <li>
//             <button onClick={handleLogout}>
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Logout;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally, you can show a confirmation dialog here
    const shouldLogout = window.confirm('Are you sure you want to logout?');

    if (shouldLogout) {
      // Perform your logout logic here

      // Navigate to the home page ('/')
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Logout</h1>
              <ul className="list-unstyled">
                <li className="text-center">
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
