import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/Auth";
import Loading from "../components/Loading";
import { AuthContext } from "../store/auth-context";

export default function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
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
