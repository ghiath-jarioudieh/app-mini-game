import { View, StyleSheet, Image, Text } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.text}>
        Your phone needed<Text style={styles.heighligt}> {roundNumber} </Text>
        rounds to guess the number
        <Text style={styles.heighligt}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderColor: Colors.primary800,
    marginVertical: 36,
    borderWidth: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
  },
  heighligt: {
    fontFamily: "open-sans-bold",
  },
});
