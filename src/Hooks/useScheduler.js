import * as Tone from 'tone';

// export function useRhythmScheduler(props = {}) {
//     const { scheduleFunc = 'scheduleRepeat', event = () => null } = props;

//     useEffect(() => {
//       const schedule = Tone.Transport[scheduleFunc]((time) => {
//         const rhythm_sequence = rhythmRef.current;
//         const beat = beatRef.current;
//         if (rhythm_sequence[beat]) {
//           synth.triggerAttackRelease('A4', '8n', time + 0.1);
//         }
//         beatRef.current = (beat + 1) % rhythm_sequence.length;
//       }, '8n');

//       return () => {
//         Tone.Transport.stop();
//         Tone.Transport.clear(schedule);
//       };
//     }, []);

//     function play() {
//       Tone.Transport.start();
//     }

//     function stop() {
//       Tone.Transport.stop();
//     }

//     return {
//       play,
//       stop,
//       isOn: Tone.Transport.on,
//     };
//   }
