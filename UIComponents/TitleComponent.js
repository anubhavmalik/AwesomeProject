import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function TitleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'purple',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
});
