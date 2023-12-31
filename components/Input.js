import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  onTypeValue,
  value,
  secure,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onTypeValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 3,
  },
  labelInvalid: {
    color: "red",
  },

  inputInvalid: {
    backgroundColor: "red",
  },
  input: {
    backgroundColor: "pink",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 16,
  },
});
