/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';

import {TitleComponent} from './UIComponents/TitleComponent';
// import puppyImage from './assets/puppy.jpg';
// import {MyComponent} from './UIComponents/MyComponent';

// const {screenWidth, screenHeight} = Dimensions.get('window');

// function showWidth() {
//   return Dimensions.get('window').width;
// }

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn react', id: '1'},
    {text: 'Learn Redux', id: '2'},
    {text: 'Practice a lot', id: '3'},
  ]);

  return (
    <SafeAreaView>
      <View style={({padding: 20}, styles.page)}>
        <TitleComponent />
        <View style={styles.content}>
          {/* add todo form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => <Text>{item.text}</Text>}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
