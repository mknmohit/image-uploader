/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectPreviewURL = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.previewURL,
  );

const makeSelectCropData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.cropData,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectPreviewURL, makeSelectCropData, makeSelectLocation };
