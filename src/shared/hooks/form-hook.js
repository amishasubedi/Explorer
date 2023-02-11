<<<<<<< HEAD
import React, { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  // based on different action
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      // go through all input in state.inputs
      for (const inputId in state.inputs) {
        console.log("sabi input haru", state.inputs);
        if (!state.inputs[inputId]) {
          continue;
        }
        // check if the current input is the input which is getting updated by the user
        if (inputId === action.inputId) {
          // dispatch that action, combine values to determine overall validity
          formIsValid = formIsValid && action.isValid;
        } else {
          // for input which is not being updated by the user
          formIsValid = formIsValid && state.inputs[inputId].isValid; // always true ????
        }
      }
      return {
        ...state, // first copy existing state
        input: {
          // copy input state and override input state for the input that is being updated with "INPUT_CHANGE" action
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }, // update value dynamically
        },
        isValid: formIsValid,
      
      };

      case 'SET_DATA':
        return {
          inputs: action.inputs,
          isValid: action.formIsValid
        }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,

    // overall form validity
    isValid: initialFormValidity,
  });

  // prevent infinite loop using callback
  const inputHandler = useCallback((id, value, isValid, event) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
    console.log(event.target.value);
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity
    })
  }, [])

  return [formState, inputHandler, setFormData];
};
=======
import React, { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  // based on different action
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      // go through all input in state.inputs
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        // check if the current input is the input which is getting updated by the user
        if (inputId === action.inputId) {
          // dispatch that action, combine values to determine overall validity
          formIsValid = formIsValid && action.isValid;
        } else {
          // for input which is not being updated by the user
          formIsValid = formIsValid && state.inputs[inputId].isValid; // always true ????
        }
      }
      return {
        ...state, // first copy existing state
        input: {
          // copy input state and override input state for the input that is being updated with "INPUT_CHANGE" action
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }, // update value dynamically
        },
        isValid: formIsValid,
      };

      case 'SET_DATA':
        return {
          inputs: action.inputs,
          isValid: action.formIsValid
        }
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,

    // overall form validity
    isValid: initialFormValidity,
  });

  // prevent infinite loop using callback
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
      formIsValid: formValidity
    })
  }, [])

  return [formState, inputHandler, setFormData];
};
>>>>>>> c5dace3fa3b006857c0afb436a3bdbbe128d3a35
