import React from 'react';
import { QuestionTypes } from '../../Constants/question';
import { MultiSelection, RhythmQuestion } from './QuestionTypes';

function Question({ question, ...props }) {
  const { content } = question;
  if (!content) return <></>;

  const { type } = content;
  return (
    <>
      <div className="w-100 p-3 m-1">
        {type === QuestionTypes.MultiSelection && <MultiSelection question={question} />}
        {type === QuestionTypes.Rhythm && <RhythmQuestion question={question} />}
      </div>
    </>
  );
}

export default Question;
