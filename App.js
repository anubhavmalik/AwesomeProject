/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  View,
  Text,
  Button,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';

function onButtonPress() {
  Alert.alert(`button pressed`);
}

const {screenHeight, screenWidth} = Dimensions.get("window")

export default function App(){
  return (
    <View style = {{padding : 20}}>
      {Platform.OS === "android" && 
      <ProgressBarAndroid 
      styleAttr = "Horizontal"
      indeterminate = {true}
      color ="blue"/>
      }
      {Platform.OS === "ios" && <ProgressViewIOS progress = {0.4}/>}
      <Text>
          Restaurant reviews!
      </Text>
      <Text color >
          Height : {screenHeight}
      </Text>
      <Text>
          Width : {screenWidth}
      </Text>
      <Text>
          Platform : {Platform.OS}
      </Text>
      <Button color = "#f99093" title = "Click me !" onPress = {onButtonPress}/>
    </View>
  );
};