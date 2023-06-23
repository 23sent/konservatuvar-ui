import React from 'react';
import { Button, Row, Col, Container, Card, Form, Tabs, Tab, Navbar, Nav } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import NotesAnimation from '../Components/NotesAnimation/NotesAnimation';
import SignUp from '../Components/Auth/SignUp';
import SignIn from '../Components/Auth/SignIn';
import LandinBackground from '../Assets/img/landing_background.jpg';

function MainLayout() {
  return (
    <>
      <div
        className="w-100"
        style={{
          minHeight: '100%',
          backgroundImage: `url(${LandinBackground})`,
          backgroundPosition: '70% bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: 'black',
        }}
      >
        <NavigationBar />

        <Container className="d-flex flex-column position-relative text-light">
          <Row className="h-100">
            <Col className="d-flex flex-column justify-content-around">
              <Row>
                <Col xs={12} sm={6} className="d-flex flex-grow-1 align-items-center my-5">
                  <div className="display-4">
                    Özel yetenek sınavlarına hazırlanırken bir çok başlıkta pratik yapın ve kendi sorularınızı
                    hazırlayın.
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col className="d-flex flex-grow-1 align-items-center  my-2">
                  <Card style={{ minWidth: '300px', width: '500px', maxWidth: '500px' }}>
                    <Tabs defaultActiveKey="signin" id="sign-in-sign-up-card" className="mb-3" fill>
                      <Tab eventKey="signin" title="Giriş Yap">
                        <SignIn />
                      </Tab>
                      <Tab eventKey="signup" title="Kayıt Ol">
                        <SignUp />
                      </Tab>
                    </Tabs>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MainLayout;
