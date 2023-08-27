import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleLogin = () => {
    const generatedOtp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit OTP

    Alert.alert("OTP", `Your OTP is: ${generatedOtp}`);

    setOtp(generatedOtp.toString());
  };

  const handleVerifyOtp = () => {
    if (otp === enteredOtp) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Incorrect OTP", "Please enter the correct OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./logo.png")} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        {otp ? (
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={enteredOtp}
            onChangeText={setEnteredOtp}
          />
        ) : null}
      </View>
      {!otp ? (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Get OTP</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOtp}>
          <Text style={styles.loginButtonText}>Verify OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 163,
    height: 150,
    marginBottom: 90,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 320,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "monopoly",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 500,
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: "monopoly",
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default StackNavigator;
