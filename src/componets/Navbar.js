import React from 'react';

import { Link } from'react-router-dom';

import './Navbar.css';
export default function Navbar(props) {
return(
<>
<nav style={{boxShadow:'1px 1px 2px white'}} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">JustThink</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.index}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about" tabindex="2" aria-disabled="true">About Us</Link>
        </li>
      </ul>
      {/*<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>*/}
      <button  style={{backgroundColor:'#100022',width:'20px',height:'20px' ,border:"1px solid yellow", margin:"4px", borderRadius:"15px"}} type="ratio" id="flexSwitchCheckChecked" onClick={props.togglemode} />
      <button  style={{backgroundColor:'green'  ,width:'20px',height:'20px' ,border:"1px solid yellow", margin:"4px", borderRadius:"15px"}} type="ratio" id="flexSwitchCheckChecked" onClick={props.togglemode3}  />
      <button  style={{backgroundColor:'white'  ,width:'20px',height:'20px' ,border:"1px solid yellow", margin:"4px", borderRadius:"15px"}} type="ratio" id="flexSwitchCheckChecked" onClick={props.togglemode2}  />                                                         
      <button  style={{backgroundColor:'brown'  ,width:'20px',height:'20px' ,border:"1px solid yellow", margin:"4px", borderRadius:"15px"}} type="ratio" id="flexSwitchCheckChecked" onClick={props.togglemode1}/>
      <span className='mx-4' style={{color:"white",border:'1px solid white',fontSize:'10px',padding:'5px',borderRadius:"15px"}}>Enable Mode</span>

  </div>
  </div>
</nav>
<hr></hr>
</>
);
}