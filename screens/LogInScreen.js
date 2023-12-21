import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthContent from "../components/AuthContent";

export default function LogInScreen() {
  return (
    <View>
      <AuthContent isLogin />
    </View>
  );
}

const styles = StyleSheet.create({});
