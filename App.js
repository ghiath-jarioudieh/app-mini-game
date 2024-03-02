import { useState } from "react";
import { useFonts } from "expo-font";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setEnterNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState([]);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "madimi-one": require("./assets/fonts/MadimiOne.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(enteredNumber) {
    setEnterNumber(enteredNumber);
    setGameIsOver(false);
  }

  function gameOverHadler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setGameIsOver(true);
    setEnterNumber(null);
    setRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHadler} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={rounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.root}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.background}
        imageStyle={{ opacity: 0.3 }}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
