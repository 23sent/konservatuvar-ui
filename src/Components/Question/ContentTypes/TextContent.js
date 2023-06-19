import React from 'react';

function TextContent({ content }) {
  const { text } = content;
  return <div className="d-flex justify-content-center">{text}</div>;
}

export default TextContent;
