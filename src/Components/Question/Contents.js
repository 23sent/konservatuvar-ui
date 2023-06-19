import React from 'react';
import Content from './Content';

function Contents({ ...props }) {
  const { contents } = props;
  return (
    <div className="d-flex flex-column gap-3">
      {contents.map((content, index) => content && <Content key={index} content={content} />)}
    </div>
  );
}

export default Contents;
