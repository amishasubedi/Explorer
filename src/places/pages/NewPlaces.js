import React from "react";
import Input from "../../shared/components/CustomButtons/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/CustomButtons/Button";
import { useForm } from "../../shared/hooks/form-hook";
import "./NewPlaces.css";

const NewPlaces = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // prevent page reload
  const placeSubmitHandler = (event) => {
    event.preventDefault();

    // send data to server later (backend)
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
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
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} // pass all info to the input element
        error="Please enter a valid Description"
        onInput={inputHandler}
      />

      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]} // pass all info to the input element
        error="Please enter a valid address"
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
