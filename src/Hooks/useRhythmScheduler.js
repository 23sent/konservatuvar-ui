import { useEffect, useMemo, useRef, useState } from 'react';
import * as Tone from 'tone';

export function useRhythmScheduler(props = {}) {
  const { scheduleFunc = 'scheduleRepeat' } = props;
  const rhythmRef = useRef([]);

  const [isPlaying, setPlaying] = useState(false);
  const beatRef = useRef(0);

  const synth = useMemo(() => new Tone.Synth().toDestination(), []);

  useEffect(() => {
    const schedule = Tone.Transport[scheduleFunc]((time) => {
      const rhythm_sequence = rhythmRef.current;
      const beat = beatRef.current;
      if (rhythm_sequence[beat]) {
        synth.triggerAttackRelease('A4', '8n', time + 0.1);
      }
      beatRef.current = (beat + 1) % rhythm_sequence.length;
    }, '8n');

    return () => {
      Tone.Transport.stop();
      Tone.Transport.clear(schedule);
    };
  }, []);

  function play() {
    setPlaying(true);
    Tone.Transport.start();
  }

  function stop() {
    setPlaying(false);
    Tone.Transport.stop();
  }

  function setRhythm(rhythm_sequence) {
    rhythmRef.current = rhythm_sequence;
  }

  return {
    play,
    stop,
    isPlaying,
    setRhythm,
  };
}
