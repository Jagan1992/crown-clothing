//reselect is a Library which is used changes will be occured when ever the state.
//user-selector.
import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const userSelector = createSelector(
  [selectUser],
  (user) => user.currentUser
);
