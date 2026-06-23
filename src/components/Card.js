import { View, Text, StyleSheet } from "react-native";

export default function Card({ title, subtitle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  subtitle: {
    color: "#555",
    marginTop: 5
  }
});