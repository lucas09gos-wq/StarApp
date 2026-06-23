import { SafeAreaView, View } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/Header";
import Card from "../../src/components/Card";
import Empty from "../../src/components/Empty";
import Button from "../../src/components/Button";
import global from "../../src/styles/global";

export default function Tasks() {
  const router = useRouter();
  const data = [];

  return (
    <View style={global.container}>
      <Header title="Tarefas" />

      <View style={global.content}>
        {data.length === 0 ? (
          <Empty
            title="Nenhuma tarefa ainda"
            subtitle="Adicione sua primeira tarefa"
          />
        ) : (
          data.map((item, i) => (
            <Card key={i} title={item.title} subtitle={item.date} />
          ))
        )}
      </View>

      <Button
        title="+ Nova tarefa"
        onPress={() => router.push("/tasks/create")}
      />
    </View>
  );
}