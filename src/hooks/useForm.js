import { useReducer } from 'react';

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_VALUES: 'CLEAR_VALUES',
  CONSENT_TOGGLE: 'CONSENT_TOGGLE',
  THROW_ERROR: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.CLEAR_VALUES:
      return {
        ...action.initialValues,
      };
    case actionTypes.CONSENT_TOGGLE:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.THROW_ERROR:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.CLEAR_VALUES, initialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({
      type: actionTypes.THROW_ERROR,
      errorValue: errorMessage,
    });
  };

  const handleConsentToggle = () => {
    dispatch({ type: actionTypes.CONSENT_TOGGLE });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleConsentToggle,
  };
};
