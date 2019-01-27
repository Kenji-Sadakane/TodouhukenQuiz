import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      inputValue: state.inputValue * 10 + action.number,
      resultValue: state.resultValue,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      inputValue: 0,
      resultValue: state.resultValue + state.inputValue,
      showingResult: true,
    };
  } else {
    return state;
  }
};

export default calculator;