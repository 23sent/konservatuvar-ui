import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import CategoriesTable from '../Components/Categories/CategoriesTable';

function AppLayout({ children }) {
  return (
    <>
      <NavigationBar />

      <Container className="mb-3 mt-5 py-3">{children}</Container>
    </>
  );
}

export default AppLayout;
