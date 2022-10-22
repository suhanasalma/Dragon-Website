import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/ContextProvide';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const getOut =() =>{
    logOut()
      .then(() => {
      })
      .catch((error) => {
      });
  }
   return (
     <div className="mb-5">
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>
           <Navbar.Brand href="#home">
             <Link to="/">Dragon News</Link>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link>
                 <Link to="/">Home</Link>
               </Nav.Link>
               <Nav.Link href="#pricing">Pricing</Nav.Link>
               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                   Another action
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   Something
                 </NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">
                   Separated link
                 </NavDropdown.Item>
               </NavDropdown>
             </Nav>
             <Nav>
               <Nav.Link>
                 {user?.uid ? (
                   <div>
                     <span>{user.displayName}</span>
                     <button onClick={getOut}>Log Out</button>
                   </div>
                 ) : (
                   <div>
                     <Link to="/login">Login</Link>
                     <Link to="/register">Register</Link>
                   </div>
                 )}
               </Nav.Link>
               <Nav.Link>
                <Link to='/account'>
                Account
                </Link>
               </Nav.Link>
             </Nav>
             <div className="d-lg-none">
               <LeftSideNav></LeftSideNav>
             </div>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </div>
   );
};

export default Header;