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
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

import puppyImage from './assets/puppy.jpg';
import {MyComponent} from './UIComponents/MyComponent';

const {screenWidth, screenHeight} = Dimensions.get('window');

function showWidth() {
  return Dimensions.get('window').width;
}

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={({padding: 20}, styles.page)}>
          <MyComponent flex={2} />
          {/* <Image
            width={Dimensions.get('window').width}
            style={styles.image}
            source={puppyImage}
          />
          <Text
          // onPress = {
          //   Alert.alert(`${showWidth()} is the width`)
          //   }
          >
            Hey this is a puppy
          </Text>
          <Image style={styles.image} source={puppyImage} />
          <Text>Hey this is another puppy image</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>

    // <View style = {{padding : 20}, styles.page}>
    //   <Text style = {styles.text}>Red</Text>
    //   <Text style = {styles.text}>Blue</Text>
    //   <Text style = {styles.text}>Green</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 16,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
    alignContent: 'center',
  },
  selectedText: {
    marginTop: 8,
    fontSize: 16,
    color: 'blue',
    alignContent: 'center',
  },
  image: {
    marginTop: 16,
    borderRadius: 16,
  },
});
