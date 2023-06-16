import React, { useEffect, useMemo, useRef, useState } from 'react';
import { updateEditingQuestion } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import * as Tone from 'tone';
import { Icon, IconButton } from '../../Common';
import { useRhythmScheduler } from '../../../Hooks';

function EditRhythm({ question, ...props }) {
  let { rhythm } = question.content;

  if (rhythm?.length !== 16) {
    rhythm = Array(16).fill(false);
  }
  const dispatch = useDispatch();

  const { play, stop, setRhythm, isPlaying } = useRhythmScheduler();
  useEffect(() => {
    setRhythm(rhythm);
  }, [rhythm]);

  return (
    <div>
      <div>Bir ritim girin:</div>
      <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
        <div>
          {isPlaying ? (
            <IconButton className={'p-2'} onClick={() => stop()}>
              <Icon name="Stop" size={'28'}></Icon>
            </IconButton>
          ) : (
            <IconButton className={'p-2'} onClick={() => play()}>
              <Icon name="Play" size={'28'}></Icon>
            </IconButton>
          )}
        </div>
        {rhythm.map((beat, index) => (
          <div
            key={index}
            className="p-4 border"
            style={{
              backgroundColor: `${beat ? 'blue' : 'transparent'}`,
            }}
            onClick={() => {
              rhythm[index] = !beat;
              question.content.rhythm = rhythm;
              dispatch(updateEditingQuestion(question));
            }}
          ></div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default EditRhythm;
