/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';

function onButtonPress() {
  Alert.alert(`button pressed`);
}

const {screenHeight, screenWidth} = Dimensions.get("window")

export default function App(){
  return (
    <View style = {{padding : 20}, styles.page}>
      <Text style = {styles.text}>Red</Text>
      <Text style = {styles.text}>Blue</Text>
      <Text style = {styles.text}>Green</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    marginTop: 16
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: "black",
    alignContent: "center"
  },
  selectedText: {
    marginTop: 8,
    fontSize: 16,
    color: "blue",
    alignContent: "center"
  }
})