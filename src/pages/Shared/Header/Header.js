import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container className='custom-class'>
                    <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='custom-toggler' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <ul>
                                <li><Link to="/cart">Cart</Link></li>
                                {
                                    user?<li><Link onClick={logout} to="/">Logout</Link></li>:<li><Link to="/login">Login</Link></li>
                                }
                                {
                                    !user && <li><Link className='btn' to="/singup">Sign Up</Link></li>
                                }
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;