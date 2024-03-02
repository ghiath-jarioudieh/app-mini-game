import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ roundNumber, guess }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
