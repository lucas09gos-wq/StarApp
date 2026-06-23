import { View, Text, StyleSheet, StatusBar } from "react-native";
import theme from "../styles/theme";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <StatusBar
        backgroundColor={theme.colors.header}
        barStyle="light-content"
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: theme.colors.header
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});