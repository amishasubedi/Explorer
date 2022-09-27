import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  // dispatch action having type properties
  switch (action.type) {
    case "CHANGE":
      return {
        ...state, // spread operator to copy old state to new object
        value: action.val, // store in the val property of an action object
        isValid: true, // replace with logic later
      };
    default:
      return state;
  }
};
const Input = (props) => {
  // second argument is the initial state
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const inputChangeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} value={inputState.val} />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control__invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.error}</p>}
    </div>
  );
};

export default Input;
