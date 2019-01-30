import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});
export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});
export const addBookmark = (title, url) => ({ type: actionTypes.ADD_BOOKMARK, title, url });

