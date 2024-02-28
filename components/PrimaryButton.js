import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ffffff" }}
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
    backgroundColor: "#ddb52f",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "#000000",
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
    backgroundColor: "#ddb52f",
    opacity: 0.75,
  },
});
