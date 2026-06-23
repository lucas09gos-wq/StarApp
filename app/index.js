import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Header from "../src/components/Header";
import Button from "../src/components/Button";
import global from "../src/styles/global";

export default function Home() {
  const router = useRouter();

  return (
    <View style={global.container}>
      <Header title="📚 Estudos" />

      <View style={styles.content}>
        <Button title="Tarefas" onPress={() => router.push("/tasks")} />
        <Button title="Provas" onPress={() => router.push("/exams")} />
        <Button title="Matérias" onPress={() => router.push("/subjects")} />
        <Button title="Cronograma" onPress={() => router.push("/schedule")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",   // centraliza vertical
    padding: 20
  }
});