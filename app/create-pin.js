import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import Input from "../src/components/Input";
import Button from "../src/components/Button";

export default function CreatePin() {
  const [pin, setPin] = useState("");
  const router = useRouter();

  const save = async () => {
    await AsyncStorage.setItem("user_pin", pin);
    router.replace("/");
  };

  return React.createElement(
    View,
    {style: styles.container},
    null,
    React.createElement(Input, { value: pin, onChangeText: setPin }),
    React.createElement(Button, { title: "Salvar PIN", onPress: save })
  );
}

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",   // vertical
      alignItems: "center",       // horizontal
     
    }
 });