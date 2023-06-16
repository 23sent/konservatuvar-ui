import React from 'react';
import { Button } from 'react-bootstrap';
import './IconButton.scss';

function IconButton({ children, className, ...props }) {
  return (
    <Button
      variant="outline-primary"
      className={`icon_button d-inline-flex align-items-center rounded-circle p-1 ${className || ''}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default IconButton;
