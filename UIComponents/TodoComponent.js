import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export function TodoComponent({pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    borderColor: '#bbb',
    borderWidth: 1,
    marginTop: 16,
    padding: 16,
    color: '#000',
  },
});
