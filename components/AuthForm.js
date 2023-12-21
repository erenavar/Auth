import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;

      case "password":
        setenteredPassword(enteredValue);

      default:
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
      <Input
        label="Password"
        secure
        onTypeValue={updateInput.bind(this, "password")}
        value={enteredEmail}
      />
      <View style={styles.buttons}>
        <Button>{isLogin ? "Log In" : "Sign Up"}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
