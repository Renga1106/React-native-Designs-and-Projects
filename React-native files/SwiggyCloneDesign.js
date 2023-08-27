import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar, //  <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

const App5 = () => {
  const isDarkMode = useColorScheme() === "dark";
  const windowwidth = Dimensions.windowwidth;
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Image
            source={require("/src/assets/swiggi1.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.font}>Welcome</Text>

          <TextInput style={styles.input} placeholder="Mobile number" />

          <TextInput style={styles.pass} placeholder="Password" />
          <View style={styles.button}></View>
          <Text></Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("you have pressed Signin button")}
          >
            <Text style={styles.but}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.font}>Login using:</Text>
          <View style={styles.last}>
            <Image
              style={styles.google}
              source={require("./src/assets/google.jpg")}
            />
            <Image
              style={styles.facebook}
              source={require("/src/assets/facebook.png")}
            />
            <Image
              style={styles.twitter}
              source={require("/src/assets/twitter.png")}
            />
          </View>
          <Text></Text>
          <Text></Text>

          <View style={styles.ending}>
            <Text style={styles.account}>Don't have a account?</Text>
            <TouchableOpacity>
              <Text
                style={styles.only}
                onPress={() => alert("you have pressed SignUp button")}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "80%",
    justifycontent: "center",
    alignSelf: "center",
    height: 340,
    // width: windowwidth,
  },
  txt: {
    color: "orange",
    justifycontent: "flex-down",
  },
  font: {
    alignSelf: "center",
    padding: 30,
    fontWeight: "1600",
  },
  input: {
    alignSelf: "center",
    width: "80%",
    border: "none",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.8,
    padding: 10,
  },
  pass: {
    alignSelf: "center",
    width: "80%",

    borderBottomColor: "#000000",
    borderBottomWidth: 0.8,
    padding: 9,
  },
  button: {
    //padding: 5,
    //elevation: 10,
    marginTop: 10,
    backgroundColor: "#fc8019",
    alignSelf: "center",
    width: "40%",
    borderRadius: 20,
    borderEndheight: 10,

    //paddingVertical: 10,
  },
  but: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 20,
    paddingVertical: 10,
    backgroundsize: 10,
  },
  google: {
    alignContent: "flex-start",
    width: "21%",
    height: 90,
    marginLeft: 30,
    borderRadius: 30,
  },
  facebook: {
    alignItems: "center",
    width: "21%",
    height: 90,
    marginLeft: 45,
    borderRadius: 30,
  },
  twitter: {
    alignItems: "flex-end",
    width: "19%",
    height: 80,
    marginLeft: 50,
    borderRadius: 35,
  },

  last: {
    flexDirection: "row",
  },
  end: {
    alignSelf: "center",
  },
  only: {
    marginRight: 20,
    color: "#fc8019",
    fontSize: 15,
  },
  ending: {
    flexDirection: "row",
    alignSelf: "center",
  },
  account: {
    marginLeft: 15,
  },
});

export default App5;
