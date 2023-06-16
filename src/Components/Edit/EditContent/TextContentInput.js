import React from 'react';
import { Form } from 'react-bootstrap';

function TextContentInput({ content, onChange, ...props }) {
  return (
    <div>
      <Form.Control
        as="textarea"
        rows={1}
        value={content.text}
        onChange={(e) => {
          content.text = e.target.value;
          onChange(content);
        }}
        {...props}
      />
    </div>
  );
}

export default TextContentInput;
