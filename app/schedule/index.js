import { View } from "react-native";

import Header from "../../src/components/Header";
import Card from "../../src/components/Card";
import global from "../../src/styles/global";

export default function Schedule() {
  return (
    <View style={global.container}>
      <Header title="Cronograma" />

      <View style={global.content}>
        <Card title="Segunda-feira" subtitle="Matemática - 09:00" />
        <Card title="Terça-feira" subtitle="Português - 10:00" />
      </View>
    </View>
  );
}