import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import abcjs from 'abcjs';

function AbcNotationEditor({ ...props }) {
  const unique_id = useMemo(() => `_${Date.now()}_${Math.random()}`, []);
  const id_text_area = `abc_notation_editor_${unique_id}`;
  const id_view = `abc_notation_editor_warn_${unique_id}`;
  const id_warning = `abc_notation_editor_view_${unique_id}`;

  useEffect(() => {
    const abc_editor = new abcjs.Editor(id_text_area, {
      canvas_id: id_view,
      warnings_id: id_warning,
    });
  }, []);

  return (
    <div>
      <Form.Control id={id_text_area} as="textarea" rows={'1'} {...props} />
      <div id={id_view}></div>
      <div id={id_warning}></div>
    </div>
  );
}

export default AbcNotationEditor;
