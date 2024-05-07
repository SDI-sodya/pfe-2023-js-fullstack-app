import { produce } from 'immer';
import {
  increment,
  decrement,
  changeStep,
} from '../actions/counterActionCreators';

const initialState = {
  count: 0,
  step: 1,
};

// редюсер редаксу приймай початковий стан як значення за замовчанням для першого аргументу
function counterReducer(state = initialState, action) {
  // найчастіше в редюсерах використовують switch ... case
  switch (action.type) {
    case increment.type: {
      const nextIncrement = produce((draftState, action) => {
        draftState.count = draftState.count + draftState.step;
      });

      const newState = nextIncrement(state, action);
      return newState;
    }
    case decrement.type: {
      return produce((draftState, action) => {
        draftState.count = draftState.count - draftState.step;
      })(state, action);
    }
    case changeStep.type: {
      return produce((draftState, action) => {
        draftState.step = Number(action.payload);
      })(state, action);
    }
    default:
      return state;
  }
}

// function counterReducer(state = initialState, action) {
//   // найчастіше в редюсерах використовують switch ... case
//   switch (action.type) {
//     case ACTION_TYPES.INCREMENT: {
//       // // формуємо новий стан та повертаємо його з редюсеру
//       // const newState = {
//       //   ...state,
//       //   count: state.count + state.step,
//       // };

//       // return newState;

//       state.count = state.count + state.step;

//       return state;
//     }
//     case ACTION_TYPES.DECREMENT: {
//       return { ...state, count: state.count - state.step };
//     }
//     case ACTION_TYPES.CHANGE_STEP: {
//       return { ...state, step: Number(action.payload) };
//     }
//     default:
//       return state;
//   }
// }

// function a(arg1, arg2) {
// // code
// }

// const res = a(123, 'test');

// function b (arg1) {
//   return function c (arg2) {
//     // code
//   }
// }

// const cV1 = b (123);

// const res2 = cV1('test');

// const res3 = connect(mStP)('test');

export default counterReducer;
