import React from "react";
import Input from "../../shared/components/CustomButtons/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlaces.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]} // pass all info to the input element
        error="Please enter a valid Title"
      />
    </form>
  );
};

export default NewPlaces;
