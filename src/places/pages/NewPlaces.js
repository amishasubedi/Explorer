import React from "react";
import Input from "../../shared/components/CustomButtons/Input";
import "./NewPlaces.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        error="Please enter a valid Title"
      />
    </form>
  );
};

export default NewPlaces;
