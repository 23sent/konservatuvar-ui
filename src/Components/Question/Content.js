import React from 'react';
import { ContentTypes } from '../../Constants/question';
import { TextContent } from './ContentTypes';
import AbcContent from './ContentTypes/AbcContent';

function Content({ ...props }) {
  const { content } = props;
  const { type } = content;
  return (
    <>
      {type === ContentTypes.Text && <TextContent {...props} />}
      {type === ContentTypes.AbcNotation && <AbcContent {...props} />}
    </>
  );
}
export default Content;
