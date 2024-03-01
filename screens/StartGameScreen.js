import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

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
    <View style={styles.screen}>
      <Title style={styles.title}>Guess My Number</Title>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter a Number</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginTop: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  input: {
    height: 50,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    fontSize: 32,
    marginBottom: 16,
    marginTop: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    marginTop: 100,
  },
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
