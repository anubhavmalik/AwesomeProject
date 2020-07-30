/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  ProgressBarAndroid,
  ProgressViewIOS,
  View,
  Text,
  Button,
  LogBox,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';

const onButtonPress = () => {
  var time = new Date().toLocaleTimeString
  Alert.alert(time + `button pressed`);
  // console.log(`${new Date().toLocaleTimeString} button `)
}

const {screenHeight, screenWidth} = Dimensions.get("window")

export default function App(){
  return (
    <View style = {{padding : 50}}>
      <ActivityIndicator color = "#000" size = "large"/>
      <Text>
          Restaurant reviews!
      </Text>
      <Text>
          Height : {screenHeight}
      </Text>
      <Text>
          Width : {screenWidth}
      </Text>
      <Text>
          Platform : {Platform.OS}
      </Text>
      <Button width = "screenWidth" color = "#f99093" title = "Click me !" onPress = {onButtonPress}/>
    </View>
  );
};