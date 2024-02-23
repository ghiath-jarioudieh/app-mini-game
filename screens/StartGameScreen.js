import { View, StyleSheet, TextInput } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="decimal-pad"
      />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
