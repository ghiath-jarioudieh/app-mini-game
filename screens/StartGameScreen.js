import { View, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnterNumber] = useState("");

  function enterNumberHandler(enteredNumber) {
    setEnterNumber(enteredNumber);
  }
  function confimInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  function resetInputHandler() {
    setEnterNumber("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="decimal-pad"
        value={enteredNumber}
        onChangeText={enterNumberHandler}
      />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confimInputHandler}>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
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
