// import React from 'react';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css";
// import { Link } from 'react-router-dom';
// import CIcon from '@coreui/icons-react';
// import * as icon from '@coreui/icons';
// import { DropdownButton, Dropdown } from 'react-bootstrap';

// // import Employe from './Employe';


// const Dashboard = () => {
 
 

//   return (
//     < >
   
//       <nav>
//       <header className='header'>
//       <h4><CIcon icon={icon.cibApacheFlink} size ="sm" className='xyz' />DEEPAK JAGLAN</h4>
//       <DropdownButton id="split-button-dropdown" title="Profile">
//       <Dropdown.Item eventKey="5"><Link to="/employeuser">Emp.Info</Link></Dropdown.Item>
//       <Dropdown.Item eventKey="5"><Link to="/logout">Logout</Link></Dropdown.Item>
//       <Dropdown.Divider />
//       </DropdownButton>
//       </header>
//       </nav>
//       <div className='deshboard'>
//       {/* <Employe /> */}
//       <h1>Your are in best place</h1>
//       </div>
//     </>
//   );
// };

// export default Dashboard;


import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import  { useState } from 'react';
import Employeuser from './Employeuser';



const Dashboard = () => {

  return (
    // <div className="container">
    //   <header className='header'>
    //     <div className="row">
    //       <div className="col-md-6">
    //         <h4><CIcon icon={icon.cibApacheFlink} size="sm" className="xyz" />Rohit Sharma</h4>
    //       </div>
    //       <div className="col-md-6 text-right">
    //         <DropdownButton id="split-button-dropdown" title="Profile">
    //           <Dropdown.Item eventKey="5"><Link to="/employeuser">Emp.Info</Link></Dropdown.Item>
    //           <Dropdown.Item eventKey="5"><Link to="/logout">Logout</Link></Dropdown.Item>
    //           <Dropdown.Divider />
    //         </DropdownButton>
    //       </div>
    //     </div>
    //   </header>
    //   <div className='deshboard'>
    //     <div className="row">
    //       <div className="col-md-12">
    //         <h1>Your are in the best place</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section>
  
    <nav>
       <input type="checkbox" id="check"/>
       <label for="check" className="checkbtn">
         <i className="fas fa-bars"></i>
       </label>
       <label className="logo text-left">Dashboard</label>
       {/* <ul>
          
         <li><a href="#" >Signup</a></li>
         <li><a href="#" >Login</a></li>
          <li><a href="javascript:logoutFunc()" ></a></li>  
        

        </ul> */}
        <ul>
          <li>
          <DropdownButton id="split-button-dropdown" title="Profile">
               <Dropdown.Item eventKey="5"><Link className='text-black admin ' to="/employeuser">Emp.Info</Link></Dropdown.Item>
               <Dropdown.Item eventKey="5"><Link className='text-black admin' to="/logout">Logout</Link></Dropdown.Item>
               <Dropdown.Divider />
            </DropdownButton>
          </li>
        </ul>
       
     </nav> 
     <div >
     <h4 className='text-center'>Rohit Sharma</h4>
     <h1 className='text-center' >Welcome to Dashboard Page</h1>
    
     </div>
      <Employeuser/> 
       </section>
  );
};

export default Dashboard;
