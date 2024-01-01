import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onSubmit, credentionlsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");


  

  const submitHandler = () => {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  };

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;

      case "password":
        setEnteredPassword(enteredValue);
        break;

      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;

      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
      <Input
        label="E-Mail"
        keyboardType="email-adress"
        onTypeValue={updateInput.bind(this, "email")}
        value={enteredEmail}
      />
      {!isLogin && (
        <Input
          label="Confirm E-Mail"
          keyboardType="email-adress"
          onTypeValue={updateInput.bind(this, "confirmEmail")}
          value={enteredConfirmEmail}
        />
      )}
      <Input
        label="Password"
        secure
        onTypeValue={updateInput.bind(this, "password")}
        value={enteredPassword}
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          secure
          onTypeValue={updateInput.bind(this, "confirmPassword")}
          value={enteredConfirmPassword}
        />
      )}
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
