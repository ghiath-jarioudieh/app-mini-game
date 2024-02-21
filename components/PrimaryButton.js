import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
