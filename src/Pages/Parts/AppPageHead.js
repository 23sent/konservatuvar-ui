import React from 'react';
import { Card } from 'react-bootstrap';
import { Breadcrumbs } from './Breadcrumbs';

function AppPageHead({ title, description, children }) {
  return (
    <Card className="my-5 px-4 shadow" style={{ width: '500px', maxWidth: '100%' }}>
      <Card.Body>
        <Breadcrumbs>
          <div className="p-3"></div>
        </Breadcrumbs>
        <div className="h2">{title}</div>
        <div className="">{description}</div>
        {children ? <div className="mt-5"> {children}</div> : <></>}
      </Card.Body>
    </Card>
  );
}

export default AppPageHead;
