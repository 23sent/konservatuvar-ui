import React, { useEffect, useMemo, useRef } from 'react';
import abcjs from 'abcjs';

function AbcNotationView({ value, ...props }) {
  const unique_id = useMemo(() => `notation_${Date.now()}_${Math.random()}`, []);
  const refCanvas = useRef();

  useEffect(() => {
    abcjs.renderAbc(refCanvas.current.id, value, { scale: 1 });
  }, [value]);

  return <div id={unique_id} ref={refCanvas}></div>;
}

export default AbcNotationView;
