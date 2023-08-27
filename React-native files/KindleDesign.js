import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

const App1 = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    // <SafeAreaView>

    <View style={styles.header}>
      <ImageBackground
        style={styles.bgimgsize}
        source={require("/src/assets/BG.jpeg")}
      >
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.sectionTitle}>Kindle</Text>
            <Image
              style={styles.imgsize}
              source={require("/src/assets/K3.png")}
            />
            <Text style={styles.sectionTitle2}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="123@gmail.com"
            ></TextInput>
            <TextInput style={styles.input} placeholder="Password"></TextInput>
            <Button
              style={styles.Button}
              title="Signin"
              color={"white"}
              onPress={() => alert("Thank you for signing in")}
            >
              {" "}
            </Button>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgimgsize: { height: "100%", width: "100%" },
  imgsize: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    justifyContent: "space-evenly",
  },

  header: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFF",
    paddingBottom: 50,
    alignSelf: "center",
  },
  sectionTitle2: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFF",
    padding: 30,
    paddingBottom: 20,
    alignSelf: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  input: {
    alignSelf: "center",
    height: 29,
    width: "90%",
    borderwidth: 1,
    paddding: 10,
    margin: 20,
    backgroundColor: "#E8E8E8",
  },
  button: {
    fontWeight: 30,
  },
});

export default App1;
