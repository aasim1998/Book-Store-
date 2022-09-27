import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Async = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [value, setValue] = useState([]);

  const saveValue = () => {
    if (textInputValue) {
      AsyncStorage.setItem("any_key_here", textInputValue);
      setTextInputValue("");
      alert("Data Saved");
    } else {
      alert("Please fill data");
    }
  };

  const getValue = () => {
    AsyncStorage.getItem("any_key_here").then((value) => {
      setValue((ele) => [...ele, value]);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Async Storage in React Native</Text>
        <TextInput
          placeholder="Enter some value here"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity onPress={saveValue} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Save Value</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getValue} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Get Value</Text>
        </TouchableOpacity>
        {value.map((ele) => (
          <Text style={styles.textStyle}>{ele}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  textInputStyle: {
    textAlign: "center",
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "blue",
    fontSize: 22,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "blue",
    padding: 5,
    marginTop: 10,
    minWidth: 250,
    height: 60,
    justifyContent: "center",
  },
  buttonTextStyle: {
    padding: 5,
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  textStyle: {
    padding: 10,
    textAlign: "center",
  },
});
export default Async;
