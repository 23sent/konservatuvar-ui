import React from 'react';
import AbcNotationView from '../../Music/AbcNotation/AbcNotationView';

function AbcContent({ content, ...props }) {
  return (
    <div className="d-flex align-items-center justify-content-center w-100" style={{}}>
      <AbcNotationView value={content.abc_notation} />
    </div>
  );
}

export default AbcContent;
