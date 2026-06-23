import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Input from "../src/components/Input";
import Button from "../src/components/Button";

export default function Lock() {
  const [pin, setPin] = useState("");
  const [savedPin, setSavedPin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await AsyncStorage.getItem("user_pin");

    if (!data) {
      router.replace("/create-pin");
    } else {
      setSavedPin(data);
    }
  };

  const unlock = () => {
    if (pin === savedPin) {
      router.replace("/");
    }
  };

  return React.createElement(
    View,
    null,
    React.createElement(Text, null, "🔒 Digite o PIN"),
    React.createElement(Input, { value: pin, onChangeText: setPin }),
    React.createElement(Button, { title: "Entrar", onPress: unlock })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",   // vertical
    alignItems: "center",       // horizontal
    backgroundColor: "#f1f5f9"
  }
})