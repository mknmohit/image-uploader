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
import { PREVIEW_URL, CROP_DATA } from './constants';
import DummyImg from 'images/dummy.jpg';

export const initialState = {
  previewURL: null,
  cropData: null,
  // cropData: [
  //   {id: "755x450", width: 755, height: 450, coordinateX: 134.5, coordinateY: 287},
  //   {id: "365x450", width: 365, height: 450, coordinateX: 329.5, coordinateY: 287},
  //   {id: "365x212", width: 365, height: 212, coordinateX: 329.5, coordinateY: 406},
  //   {id: "380x380", width: 380, height: 380, coordinateX: 322, coordinateY: 322}
  // ]
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PREVIEW_URL:
        draft.previewURL = action.params;
        break;

      case CROP_DATA:
        draft.cropData = action.params;
        break;
    }
  });

export default appReducer;
