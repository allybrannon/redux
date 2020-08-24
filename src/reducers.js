import { DEPOSIT, WITHDRAW } from "./actions";

// 3. Write a function that expects the state and an action. It must return
// a copy of state.

export function counter(state, action) {
  // should I increment or decrement?
  // and how do I know?
  switch (action.type) {
    case DEPOSIT:
      // do the increment
      // and return
      // return state[action.payload.account] + action.payload.ammount;
      return {
        ...state,
        [action.payload.account]:
          state[action.payload.account] + action.payload.amount,
      };

    case WITHDRAW:
      // do the decrement
      // and return
      return {
        ...state,
        [action.payload.account]:
          state[action.payload.account] - action.payload.amount,
      };
    default:
      return state;
  }
}
