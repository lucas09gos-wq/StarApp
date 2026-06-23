import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import Input from "../../src/components/Input";
import Button from "../../src/components/Button";
import { getData, saveData } from "../../src/services/storage";

export default function CreateSubject() {
  const [name, setName] = useState("");
  const router = useRouter();

  const save = async () => {
    const subjects = await getData("subjects");
    const newSubject = { name };

    await saveData("subjects", [...subjects, newSubject]);

    router.back();
  };

  return React.createElement(
    View,
    null,

    React.createElement(Input, {
      placeholder: "Nome da matéria",
      value: name,
      onChangeText: setName
    }),

    React.createElement(Button, { title: "Salvar", onPress: save })
  );
}