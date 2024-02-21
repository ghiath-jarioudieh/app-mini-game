import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="decimal-pad"
      />

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#192475",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#8e855f",
    color: "#8e855f",
    fontSize: 32,
    marginBottom: 16,
    marginTop: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
});
