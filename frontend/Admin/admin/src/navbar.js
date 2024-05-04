import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function Navbar(){
    return(
        <>
        <section>
  
     <nav >
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo text-left">Dashboard</label>
        <ul>
           
          <li><a href="#" >Signup</a></li>
          <li><a href="#" >Login</a></li>
           <li><a href="javascript:logoutFunc()" ></a></li>  
       
         </ul>
         <ul>
         <div className="container">
      <header className='header'>
        <div className="row">
          <div className="col-md-6">
            <h4><CIcon icon={icon.cibApacheFlink} size="sm" className="xyz" />Rohit Sharma</h4>
          </div>
          <div className="col-md-6 text-right">
            <DropdownButton id="split-button-dropdown" title="Profile">
              <Dropdown.Item eventKey="5"><Link to="/employeuser">Emp.Info</Link></Dropdown.Item>
              <Dropdown.Item eventKey="5"><Link to="/logout">Logout</Link></Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
          </div>
        </div>
      </header>
      <div className='deshboard'>
        <div className="row">
          <div className="col-md-12">
            <h1>Welcome to my page</h1>
          </div>
        </div>
      </div>
    </div>
    </ul>
      </nav> 
        </section>
        </>
    )
  }