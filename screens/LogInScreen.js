import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/Auth";

export default function LogInScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <Loading message={"Please Wait..."} />;
  }

  return (
    <View>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
