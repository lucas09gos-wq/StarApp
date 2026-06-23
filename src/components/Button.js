import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../styles/theme";

export default function Button({ title, onPress, fixed }) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        fixed && {
          position: "absolute",
          bottom: insets.bottom + 20,
          left: 20,
          right: 20
        }
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10
  },
  text: {
    color: "#fff",
    fontWeight: "bold"
  }
});