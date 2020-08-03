import React from 'react';
import {StyleSheet, View, SafeAreaView, Alert} from 'react-native';

import ListComponent from './UIComponents/ListComponent';
import {TitleComponent} from './UIComponents/TitleComponent';
import TodoAdditionComponent from './UIComponents/TodoAdditionComponent';

export default function App() {
  return (
    <SafeAreaView style={({padding: 20}, styles.container)}>
      <TitleComponent flex={1} />
      <View height="100%" flex={5} style={styles.content}>
        <ListComponent />
      </View>
      <TodoAdditionComponent />
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
