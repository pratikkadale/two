import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
// import { FormControl } from 'react-bootstrap';
// import FormLabel from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';

export default function (props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">                                                {/*   <-this one can reuse if not copying component from-(getReactBootstrap) */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>


                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input"  type="checkbox"  role="switch"  id="flexSwitchCheckChecked" onClick={props.togglemode} /> 
                        <label className="form-check-label"  for="flexSwitchCheckChecked" color='#fff'>Enable dark mode</label>    
                    </div>

                </div>

            </div>
           
         </nav>
        
        
        
        
        
        
        
{/*         
        <Navbar expand="lg" className="bg-body-tertiary" bg={props.mode} data-bs-theme={props.mode}>
        <Container>
            
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
             <Navbar.Collapse id="basic-navbar-nav"> 
             <Nav className="me-auto">
                    
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    
                    
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink> 
              
                 <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/about">About</Nav.Link>
         
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
             
             */}
            
             
            
            
         


        </>
  )
}
