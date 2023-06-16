import React from 'react';
import Content from './Content';

function Contents({ ...props }) {
  const { contents } = props;
  return <>{contents.map((content, index) => content && <Content key={index} content={content} />)}</>;
}

export default Contents;
