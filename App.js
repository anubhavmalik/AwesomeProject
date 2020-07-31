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

import {TodoComponent} from './UIComponents/TodoComponent';
import {TitleComponent} from './UIComponents/TitleComponent';
import TodoAdditionComponent from './UIComponents/TodoAdditionComponent';
// import puppyImage from './assets/puppy.jpg';
// import {MyComponent} from './UIComponents/MyComponent';

// const {screenWidth, screenHeight} = Dimensions.get('window');

// function showWidth() {
//   return Dimensions.get('window').width;
// }
let num = 4;
export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn react', key: '1'},
    {text: 'Learn Redux', key: '2'},
    {text: 'Practice a lot', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitTodo = (input) => {
    if (input) {
      setTodos((currentList) => {
        return [{text: input, key: (num++).toString()}, ...currentList];
      });
    } else {
      Alert.alert('Cannot add empty todo');
    }
  };

  return (
    <SafeAreaView style={({padding: 20}, styles.container)}>
      <TitleComponent flex={1} />
      <View height="100%" flex={5} style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoComponent item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <TodoAdditionComponent submitTodo={submitTodo} />
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
