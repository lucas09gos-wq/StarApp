import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/Header";
import Button from "../../src/components/Button";
import Card from "../../src/components/Card";
import Empty from "../../src/components/Empty";
import useStorage from "../../src/hooks/useStorage";

export default function Subjects() {
  const { data } = useStorage("subjects");
  const router = useRouter();

  return React.createElement(
    View,
    { style: styles.container },

    React.createElement(Header, { title: "Matérias" }),

    data.length === 0
      ? React.createElement(Empty, {
          title: "Nenhuma matéria cadastrada",
          subtitle: "Adicione suas matérias"
        })
      : data.map((item, i) =>
          React.createElement(Card, {
            key: i,
            title: item.name
          })
        ),

    React.createElement(Button, {
      title: "+ Nova matéria",
      onPress: () => router.push("/subjects/create")
    })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 15
  }
});