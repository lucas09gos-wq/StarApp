import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/Header";
import Input from "../../src/components/Input";
import Button from "../../src/components/Button";
import global from "../../src/styles/global";

import { getData, saveData } from "../../src/services/storage";
import { notify } from "../../src/services/notifications";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const save = async () => {
    if (!title.trim()) return;

    const tasks = await getData("tasks");
    const newTask = { title };

    await saveData("tasks", [...tasks, newTask]);
    await notify("Nova tarefa", title);

    router.back();
  };

  return (
    <View style={global.container}>
      <Header title="Nova tarefa" />

      <View style={styles.content}>
        <Input
          placeholder="Digite a tarefa..."
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <Button title="Salvar" fixed onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20
  }
});