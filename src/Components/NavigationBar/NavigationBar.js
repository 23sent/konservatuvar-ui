import React from 'react';
import { Button, Container, Dropdown, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/actions';

function NavigationBar() {
  const isAuth = useAuth();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Navbar bg="black" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Konservatuvar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navigation-bar" />
        <Navbar.Collapse id="responsive-navigation-bar">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/app">Alıştırmalar</Nav.Link>
            {isAuth && <Nav.Link href="/app/my/exercises">Egzersizlerim</Nav.Link>}
          </Nav>
          {isAuth && (
            <Nav className="ml-auto">
              <Nav className="d-flex d-md-none">
                <div className="border-bottom my-1" style={{ margin: '-0.75rem' }}></div>
                <Nav.Link>Hesabım</Nav.Link>
                {/* <Nav.Link onClick={() => handleLogout()}>Çıkış Yap</Nav.Link> */}
              </Nav>
              <Dropdown className="d-none d-md-flex align-items-center">
                <Dropdown.Toggle as="div" className="d-inline-block cursor-pointer">
                  <Avatar name={user.name} size={35} round={true} />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                  {/* <Dropdown.Item>Hesabım</Dropdown.Item> */}
                  <Dropdown.Item onClick={() => handleLogout()}>Çıkış Yap</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
          {!isAuth && (
            <Nav className="ml-auto">
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
