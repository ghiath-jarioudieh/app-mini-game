import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.primary600,
    opacity: 0.75,
  },
});
