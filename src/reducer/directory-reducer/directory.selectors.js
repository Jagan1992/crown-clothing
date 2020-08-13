import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectdirectoryItems = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
