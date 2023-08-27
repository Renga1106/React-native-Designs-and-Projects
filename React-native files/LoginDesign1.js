import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const Section = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/src/assets/sky.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.txt}>LOGIN</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: '',
  },
  txt: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    Alignself: "left",
  },
});

export default Section;
