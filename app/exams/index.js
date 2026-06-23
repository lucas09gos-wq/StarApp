import React from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/Header";
import Button from "../../src/components/Button";
import Card from "../../src/components/Card";
import Empty from "../../src/components/Empty";
import useStorage from "../../src/hooks/useStorage";

export default function Exams() {
  const { data } = useStorage("exams");
  const router = useRouter();

  return React.createElement(
    View,
    { style: styles.container },

    React.createElement(Header, { title: "Provas" }),

    data.length === 0
      ? React.createElement(Empty, {
          title: "Nenhuma prova cadastrada",
          subtitle: "Adicione sua primeira prova"
        })
      : data.map((item, i) =>
          React.createElement(Card, {
            key: i,
            title: item.title,
            subtitle: item.date
          })
        ),

    React.createElement(Button, {
      title: "+ Nova prova",
      onPress: () => router.push("/exams/create")
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