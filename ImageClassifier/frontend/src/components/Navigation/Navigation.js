import React from 'react';
import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Container } from 'react-bootstrap';
import logo from './Logo_inpt.PNG'; // Assuming your logo is in the same directory
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navigation-bar" variant="dark"> {/* Apply the custom class */}
            <Container> {/* Wrap the navbar content in a container for better responsiveness */}
                <NavbarBrand href="/">
                    <img src={logo} alt="My Company Logo" width="100" height="50" />
                    <span style={{ marginLeft: 10, color:'#7469B6'}}>The Image Classifier</span> {/* Add company name next to logo */}
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Toggle for collapsing navbar on smaller screens */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/history">History</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;