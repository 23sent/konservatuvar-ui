import React from 'react';
import AbcNotationEditor from '../../Music/AbcNotation/AbcNotationEditor';

function AbcContentInput({ content, onChange, ...props }) {
  return (
    <AbcNotationEditor
      value={content.abc_notation}
      onChange={(e) => {
        console.log(e);
        content.abc_notation = e.target.value;
        onChange(content);
      }}
    />
  );
}

export default AbcContentInput;
