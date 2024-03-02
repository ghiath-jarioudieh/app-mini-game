import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
