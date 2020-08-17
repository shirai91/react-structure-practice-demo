import React, { useState } from 'react';
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {
  Link,
  useHistory
} from "react-router-dom"

export type NavbarProp = {
  authenticated?: boolean
}

const Navbar: React.FC<NavbarProp> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem('auth', '');
    history.push('/');
  }
  return (
    <BootstrapNavbar color="light" light expand="md">
      <NavbarBrand className="pl-1" href="/">Bootstrap Example</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="">Components</NavLink>
          </NavItem>
        </Nav>
        {!props.authenticated && <NavbarText><Link to="/login">Login</Link></NavbarText>}
        {props.authenticated && <NavbarText><Link to="/login" onClick={handleLogout}>Logout</Link></NavbarText>}

      </Collapse>
    </BootstrapNavbar>
  )
}

export default Navbar;