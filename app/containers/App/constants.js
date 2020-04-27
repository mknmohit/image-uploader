/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const PREVIEW_URL = 'app/App/PREVIEW_URL';

export const OriginalImgSize = {
  width: 1024,
  height: 1024,
};

export const CroppedImgSize = [
  { width: 755, height: 450 },
  { width: 365, height: 450 },
  { width: 365, height: 212 },
  { width: 380, height: 380 },
];
