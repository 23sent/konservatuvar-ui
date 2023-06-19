import React from 'react';

function SoundContent({ content }) {
  const { url } = content;
  return (
    <div className="d-flex justify-content-center">
      <audio controls src={url} />
    </div>
  );
}

export default SoundContent;
