import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  // styles,
  SafeAreaView,
  TextInput,
} from "react-native";
const LotsOfStyles = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{ width: 500, height: 70, backgroundColor: "#FFD700" }}
        ></View>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("./src/assets/1.jpg")}
          ></Image>
          <Text style={styles.black}>Login</Text>

          <TextInput style={styles.input} placeholder="Username" />

          <TextInput style={styles.input} placeholder="Password" />
          <Button title="sign in" color="black"></Button>
          <Text style={styles.view}>Don't have a account?SIGN IN </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  black: {
    color: "black",
    fontsize: 30,
    fontweight: "bold",
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    height: 100,
    width: 50,
  },
  input: {
    alignSelf: "center",
    width: "90%",
    borderWidth: 1,
    padding: 10,
  },
  view: {
    alignSelf: "center",
  },
});

export default LotsOfStyles;
