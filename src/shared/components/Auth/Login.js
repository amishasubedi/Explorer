import React, { useState, useEffect } from 'react';

import Input from "../CustomButtons/Input";
import Button from "../CustomButtons/Button";
import { VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE } from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import Card from '../UI/Card';
import './Login.css';


const Login = () => {

    const [formState, inputHandler] = useForm(
        {
          email: {
            value: "",
            isValid: false,
          },
          password: {
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
      <Card className = "authentication">
        <h2 >Login Required! </h2>
        <hr />
        <form >
        <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        validators={[VALIDATOR_EMAIL()]} // pass all info to the input element
        errorText="Please enter a valid email"
        onInput={inputHandler}
      />

      <Input
        id="Password"
        element="input"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(5)]} // pass all info to the input element
        errorText="Please enter a valid password"
        onInput={inputHandler}
      />

     

      
      <Button type="submit" disabled={!formState.isValid}>
        LOGIN
      </Button>
    </form>
    </Card>
    )
}

export default Login;