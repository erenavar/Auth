import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/Auth";
import Loading from "../components/Loading";

export default function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("User isn't Created", "Please,Confirm Your Knowledges");
    }

    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message={"User Account is Being Created"} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
