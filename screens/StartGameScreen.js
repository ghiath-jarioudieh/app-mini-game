import { View, StyleSheet, TextInput } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({});
