import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions';

function NavigationBar() {
  const isAuth = useAuth();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Konservatuvar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/app">Alıştırmalar</Nav.Link>
          {isAuth && <Nav.Link href="/app/my/exercises">Egzersizlerim</Nav.Link>}
          {/* <Nav.Link href="/about">Hakkında</Nav.Link> */}
        </Nav>
        {isAuth && (
          <Nav className="ml-auto">
            <Nav.Link href="/app/account">
              <Avatar name="Foo Bar" size={35} round={true} />
            </Nav.Link>
            <Button variant="link" className="p-0" onClick={() => handleLogout()}>
              Logout
            </Button>
            {/* <Dropdown className="d-flex align-items-center">
              <Dropdown.Toggle as="div" className="d-inline-block"></Dropdown.Toggle>
              <Dropdown.Menu align={'end'}>
                <Dropdown.Item>Details</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        )}
        {!isAuth && (
          <Nav className="ml-auto">
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
