import React from 'react';
import { Image } from 'react-bootstrap';

function ImageContent({ content }) {
  const { url } = content;
  return (
    <div className="d-flex justify-content-center">
      <Image src={url} alt="" height="200"></Image>
    </div>
  );
}

export default ImageContent;
