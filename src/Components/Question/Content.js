import React from 'react';
import { ContentTypes } from '../../Constants/question';
import { AbcContent, ImageContent, SoundContent, TextContent } from './ContentTypes';

function Content({ ...props }) {
  const { content } = props;
  const { type } = content;
  return (
    <>
      {type === ContentTypes.Text && <TextContent {...props} />}
      {type === ContentTypes.AbcNotation && <AbcContent {...props} />}
      {type === ContentTypes.Image && <ImageContent {...props} />}
      {type === ContentTypes.Sound && <SoundContent {...props} />}
    </>
  );
}
export default Content;
