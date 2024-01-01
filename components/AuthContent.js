import { StyleSheet, View, Alert, useState } from "react-native";
import React from "react";
import AuthForm from "./AuthForm";
import ButtonWhite from "./ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export default function AuthContent({ isLogin }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    let { confirmEmail, confirmPassword, email, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailAreSame = email === confirmEmail;
    const passwordsAreSame = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailAreSame || !passwordsAreSame))
    ) {
      Alert.alert("Oooops", "Please, Control Your Datas");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailAreSame,
        password: !passwordIsValid,
        confirmEmail: !passwordIsValid || !passwordsAreSame,
      });
      return;
    }
  }

  function switchScreen() {
    if (isLogin) {
      navigation.navigate("SignUp");
    } else {
      navigation.navigate("LogIn");
    }
  }

  return (
    <View style={styles.container}>
      <AuthForm
        credentialsInvalid={credentialsInvalid}
        isLogin={isLogin}
        onSubmit={submitHandler}
      />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? "Create New User" : "Log In"}
        </ButtonWhite>
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
