import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/CustomButtons/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/CustomButtons/Button";
import "./NewPlaces.css";

const formReducer = (state, action) => {
  // based on different action
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      // go through all input in state.inputs
      for (const inputId in state.inputs) {
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
    default:
      return state;
  }
};

const NewPlaces = () => {
  // initial state of inputs
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },

    // overall form validity
    isValid: false,
  });

  // prevent infinite loop using callback
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value: isValid, inputId: id });
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]} // pass all info to the input element
        error="Please enter a valid Title"
        onInput={inputHandler}
      />

      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} // pass all info to the input element
        error="Please enter a valid Description"
        onInput={inputHandler}
      />

      {/* // disable until the form is not valid */}
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlaces;
