import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom';
import styles from './Navigator.module.css';
import logo from "../../photos/sa14.JPG"
import hamburgericon from "../../icons/hamburgericon.svg"
import closebtn from "../../icons/closebtn.svg"
function Navigator() {
  let resnavrref=null
  let closedbtn=null
  const responsiveNavbarOpen=()=>{
    resnavrref.style.display="flex"
    closedbtn.style.display="block"
  }
  const responsiveNavbarClose=()=>{
    resnavrref.addClasslist="moveright"
    closedbtn.addClasslist="moveright"
    resnavrref.style.display="none"
    closedbtn.style.display="none"
  }
    return (
        <div>
          {/* <Navbar collapseOnSelect expand="lg" className={styles.navbar} >
            <Navbar.Brand href="#home" className={styles.brand}>Savishkar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" variant="danger"> 
                         <NavDropdown className={styles.drop} title="Artwork" id="Drop" variant="primary" style={{color:"white"}}>
                  <NavDropdown.Item href="#action/3.1">Poems</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Paintings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Stories</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Video</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
                <Nav.Link eventKey={2} href="/signin" className={styles.link}>
                  SignIn
                </Nav.Link>
                <Nav.Link eventKey={3} href="/admin" className={styles.link}>
                  LogIn
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}
           {/* className={styles.hamburgericon} */}
        <header className={styles.navbar}>
          <div className={styles.leftnav}>
            <img src={logo} alt="savishlogo" title="Saviskar Logo" className={styles.logo}/>
            </div>
            <img src={closebtn} className={styles.closebtn} ref={e=>closedbtn=e} onClick={responsiveNavbarClose}/>
              <ul className={styles.navlinks}   ref={(e)=>{resnavrref=e}}>
                <Link to="/" className={styles.link}><li className={styles.navlink}>Home</li></Link>
                <li className={styles.navlink}>Sign In</li>
                <li className={styles.navlink}>Log In</li>
              </ul>
              <img src={hamburgericon} className={styles.hamburgericon} onClick={responsiveNavbarOpen} />
        </header>  
        </div>
    )
}

export default Navigator
