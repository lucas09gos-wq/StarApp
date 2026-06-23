import { View, Text, StyleSheet } from "react-native";

export default function Empty({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 120
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: 10,
    color: "#666",
    textAlign: "center"
  }
});