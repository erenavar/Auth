import { StyleSheet, View } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";

export default function AuthContent({ isLogin }) {
  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} />
      <View>
        <ButtonWhite>{isLogin ? "Create New User" : "Log In"}</ButtonWhite>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rebeccapurple",
    marginTop: 50,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
