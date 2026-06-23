import React, { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import Input from "../../src/components/Input";
import Button from "../../src/components/Button";
import { getData, saveData } from "../../src/services/storage";
import { notify } from "../../src/services/notifications";

export default function CreateExam() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const save = async () => {
    const exams = await getData("exams");
    const newExam = { title };

    await saveData("exams", [...exams, newExam]);
    await notify("Nova prova", title);

    router.back();
  };

  return React.createElement(
    View,
    null,

    React.createElement(Input, {
      placeholder: "Nome da prova",
      value: title,
      onChangeText: setTitle
    }),

    React.createElement(Button, { title: "Salvar", onPress: save })
  );
}