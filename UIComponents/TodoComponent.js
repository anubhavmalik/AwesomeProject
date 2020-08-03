import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

let yolo;

export function TodoComponent({todo}) {
  console.log('list item');
  yolo = todo;
  console.log(todo);

  return (
    <TouchableOpacity onPress={() => this.props.delete(yolo.key)}>
      <Text style={styles.item}>{}</Text>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteTodo('rishuja bj')),
  };
};

export default connect(null, mapDispatchToProps)(TodoComponent);

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
