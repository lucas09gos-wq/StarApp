import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return React.createElement(TextInput, {
    ...props,
    style: styles.input
  });
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  }
});