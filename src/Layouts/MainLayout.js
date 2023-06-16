import React from 'react';
import { Button, Row, Col, Container, Card, Form, Tabs, Tab, Navbar, Nav } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import NotesAnimation from '../Components/NotesAnimation/NotesAnimation';
import SignUp from '../Components/Auth/SignUp';
import SignIn from '../Components/Auth/SignIn';

function MainLayout() {
  return (
    <>
      <div className="h-100 w-100">
        <NavigationBar />

        <Container className="d-flex flex-column position-relative" style={{ height: '90vh' }}>
          <Row className="h-100">
            <Col size={6} className="d-flex flex-grow-1 align-items-center justify-content-center">
              <div className="h2" style={{ minWidth: '250px', width: '350px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </Col>
            <Col size={6} className="d-flex flex-grow-1 align-items-center justify-content-center">
              <Card style={{ minWidth: '300px', width: '400px', maxWidth: '400px' }}>
                <Tabs defaultActiveKey="signin" id="sign-in-sign-up-card" className="mb-3" fill>
                  <Tab eventKey="signin" title="Sign in">
                    <SignIn />
                  </Tab>
                  <Tab eventKey="signup" title="Sign up">
                    <SignUp />
                  </Tab>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MainLayout;
