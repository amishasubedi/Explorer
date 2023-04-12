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
    const[isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: "",
            isValid: true,
          },
          password: {
            value: "",
            isValid: true,
          },
        },
        false
      );

    const switchModeHandler =() => {
      if (!isLogin) {
        setFormData(
          {
            name : undefined
          },
          formState.inputs.email.isValid && formState.inputs.password.isValid)
      } else {
        setFormData({
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        }, false)
      }
      setIsLogin(prevMode => !prevMode);
    }  

      // prevent page reload
    const loginSubmitHandler = (event) => {
        event.preventDefault();

        // send data to server later (backend)
        console.log(formState.inputs);
        console.log("validity check" + formState.isValid)
    };
    
    return (
      <Card className = "authentication">
        <h2 >Login Required! </h2>
        <hr />
        <form onSubmit = {loginSubmitHandler}>
        {!isLogin && (
          <Input 
            element = "input"
            id = "name"
            type = "text"
            label = "Your Name"
            validators = {[VALIDATOR_REQUIRE()]}
            errorText = "Please enter your name"
            onInput = {inputHandler}
          />
        )}
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

     
      <Button type="submit" disabled={!formState.isValid} >
        {isLogin ? 'LOGIN' : 'SIGNUP'}
      </Button>
    </form>
    <Button inverse onClick = {switchModeHandler}>SWITCH TO {isLogin ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>
    )
}

export default Login;