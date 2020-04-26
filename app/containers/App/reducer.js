/*
 *
 * App reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';
import { PREVIEW_URL } from './constants';

export const initialState = {
  previewURL: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PREVIEW_URL:
        draft.previewURL = action.params;
        break;
    }
  });

export default appReducer;
