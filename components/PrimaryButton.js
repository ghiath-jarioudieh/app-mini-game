import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Button pressed");
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={pressHandler}
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
    backgroundColor: "#193060",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "#193060",
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
    backgroundColor: "#294273",
    opacity: 0.75,
  },
});
