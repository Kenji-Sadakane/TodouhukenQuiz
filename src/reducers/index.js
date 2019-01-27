import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import calculator from './calculator';
import bookmarks from './bookmarks';

export default (history) => combineReducers({
  calculator: calculator,
  bookmarks: bookmarks,
  router: connectRouter(history)
});
