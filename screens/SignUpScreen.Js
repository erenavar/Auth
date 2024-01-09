import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/Auth";
import Loading from "../components/Loading";

export default function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message={"User Account is Being Created"} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

const styles = StyleSheet.create({});
