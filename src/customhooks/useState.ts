// useState(initailState): [state, setState]
// setState(newState): void

import render from '../App';

export const { useState } = (() => {
  const states: any[] = [];

  let stateIndex = 0;

  const useState = <T>(initailState: T) => {
    const state = states[stateIndex] || initailState;

    console.log('상태 보관 배열', states);
    console.log('현재 상태', state);

    states[stateIndex] = state;

    const setState = (() => {
      const targetIndex = stateIndex;

      return (newState: T) => {
        state[targetIndex] = newState;

        stateIndex = 0;
        render();
      };
    })();

    stateIndex++;

    return [state, setState];
  };

  return { useState };
})();
