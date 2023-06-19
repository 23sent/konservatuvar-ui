import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import LeftPanel from '../Components/Panel/LeftPanel';
import AppBackground from '../Assets/img/app_background.png';

function AppLayout({ children }) {
  return (
    <>
      <div
        className="w-100 d-flex flex-column"
        style={{
          minHeight: '100%',
          maxHeight: '100%',
          // backgroundImage: `url(${AppBackground})`,
          // backgroundPosition: '70% bottom',
          // backgroundRepeat: 'repeat',
          // backgroundSize: '50%',
        }}
      >
        <NavigationBar />

        <div className="d-flex flex-grow-1 align-items-stretch overflow-hidden">
          <LeftPanel />
          <Container className="px-sm-4 min-h-100 mh-100 flex-grow-1 overflow-auto">{children}</Container>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
