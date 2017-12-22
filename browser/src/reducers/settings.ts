import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: NotebookResultSettings = {
  appendResults: true,
  scrollToBottom: true
};

export default handleActions<NotebookResultSettings, any>({
  [Actions.SET_APPEND_RESULTS]: (state, action) => {
    return { ...state, appendResults: action.payload };
  },
  [Actions.SET_SCROLL_TO_BOTTOM]: (state, action) => {
    return { ...state, scrollToBottom: action.payload };
  }
}, initialState);
