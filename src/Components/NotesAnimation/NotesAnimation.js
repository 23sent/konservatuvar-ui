import React from 'react';
import './NotesAnimation.scss';

function NotesAnimation({ ...props }) {
  return (
    <>
      <div style={{ position: 'absolute', top: '0%', bottom: '0%', left: '0%', right: '0%' }}>
        {new Array(10).fill(0).map((_, index) => (
          <div
            {...props}
            style={{
              ...props.style,
              position: 'absolute',
              animation: 'notes 2s infinite linear',
              fontSize: '35px',
              opacity: '0',
              top: `${50}%`,
              left: `${index * 10}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            &#9835; &#9833;
          </div>
        ))}
      </div>
    </>
  );
}

export default NotesAnimation;
