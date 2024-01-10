import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/Auth";
import { AuthContext } from "../store/auth-context";

export default function LogInScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert("Login Failed", "Please Control Your Knowledges.");
    }
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
