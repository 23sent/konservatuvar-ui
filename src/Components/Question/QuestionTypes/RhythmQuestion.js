import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRhythmScheduler } from '../../../Hooks';
import * as Tone from 'tone';
import { updateQuestionAccuracyRequest } from '../../../store/actions';
import { useDispatch } from 'react-redux';

const STATES = {
  NOT_STARTED: 4,
  WAIT: 0,
  LISTEN_EXAMPLE: 1,
  GET_ANSWER: 2,
  END: 3,
};

function* ClockStateMachine(states) {
  for (const state of states) {
    for (let beat = 0; beat < state.until; beat++) {
      yield [beat, state.state];
    }
  }
}

function RhythmQuestion({ question, ...props }) {
  let { rhythm } = question.content;
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState(rhythm.map((_) => false));
  const [state, _setState] = useState(STATES.NOT_STARTED);
  const stateRef = useRef();
  function setState(state) {
    stateRef.current = state;
    _setState(state);
  }

  const [on_beat, setOnBeat] = useState(0);

  function calculateAnswer() {
    let score = 0;
    let answerCount = 0;
    for (let i = 0; i < rhythm.length; i++) {
      if (answer[i] && rhythm[i]) {
        score++;
        answerCount++;
      } else if (answer[i] && !rhythm[i]) {
        answerCount++;
      } else if (!answer[i] && rhythm[i]) {
        answerCount++;
      }
    }

    return (score * 100) / answerCount;
  }

  useEffect(() => {
    if (state === STATES.END) {
      dispatch(updateQuestionAccuracyRequest(question.id, calculateAnswer(answer, rhythm)));
    }
  }, [state]);

  function handleClick() {
    if (state === STATES.NOT_STARTED) {
      setState(STATES.WAIT);

      const stateMachineGenerator = ClockStateMachine([
        { until: 16, state: STATES.WAIT },
        { until: rhythm.length, state: STATES.LISTEN_EXAMPLE },
        { until: 16, state: STATES.WAIT },
        { until: rhythm.length, state: STATES.GET_ANSWER },
        { until: 1, state: STATES.END },
      ]);

      const synth = new Tone.Synth().toDestination();
      const schedule = Tone.Transport.scheduleRepeat((time) => {
        const { value, done } = stateMachineGenerator.next();
        if (done) {
          Tone.Transport.stop();
          Tone.Transport.clear(schedule);
        } else {
          const [beat, state] = value;
          setOnBeat(beat);
          setState(state);

          if (state === STATES.LISTEN_EXAMPLE) {
            if (rhythm[beat]) synth.triggerAttackRelease('A4', '16n', time + 0.1);
          } else {
            synth.triggerAttackRelease('C4', '16n', time + 0.1);
          }
        }
      }, '4n');

      Tone.Transport.start();
    } else if (stateRef.current === STATES.GET_ANSWER) {
      answer[on_beat] = true;
      setAnswer([...answer]);
    }
  }

  function answerStatus(beat, index) {
    if (answer[index] && beat) {
      return 'green';
    } else if (answer[index] && !beat) {
      return 'red';
    }

    return beat ? 'blue' : 'transparent';
  }

  return (
    <div>
      <div>Bir ritim girin:</div>
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        {rhythm.map((beat, index) => (
          <div
            key={index}
            className="p-4 border"
            style={{
              backgroundColor: `${answerStatus(beat, index)}`,
            }}
          ></div>
        ))}
      </div>
      <div>
        <div
          className="bg-light border rounded-3 mx-auto"
          style={{ width: '250px', height: '150px' }}
          onClick={() => handleClick()}
        >
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            {state === STATES.NOT_STARTED && <>Başlamak için tıklayın</>}
            {state === STATES.WAIT && <>{4 - Math.round(on_beat / 4)}</>}
            {state === STATES.LISTEN_EXAMPLE && <>Ritmi Dinleyin</>}
            {state === STATES.GET_ANSWER && <>Ritmi Tekrar Edin</>}
            {state === STATES.END && <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RhythmQuestion;
