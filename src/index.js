import { store } from "./store";
import { actionDeposit, actionWithdraw } from "./actions";
console.log("Hello, Redux!");

/* To transform my counter into a banking app:
  -increment/decremtn by specific amounts
  -change actions to "withdraw" and "deposit"
  -be able to specif the amounts to withdraw or deposit
-manage multiple accounts ("savings", "checking", "cat college")
  -dividing state into "slices"
*/

// The store has three functions you care about:
// -.subscribe - you pass it a function, it calls it any time the state changes
// .getState - returns a copy of the state
// .dispatch - you pass it an action, it tells the store to run the reducer function.

// 5. Subscribe to changes to state
store.subscribe(() => {
  console.log(store.getState());
});
window.store = store;
window.actionDeposit = actionDeposit;
window.actionWithdraw = actionWithdraw;
