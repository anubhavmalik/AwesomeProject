import {View, TextInput, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

export function TodoAdditionComponent() {
  const {text, setText} = useState('');

  const textChanged = (input) => {
    setText(input);
  };

  const submitTodo = () => {
    //   add from here .... this should not be done in this component. ideally this method should be supplied from outside
    console.log('yolo');
  };

  return (
    <View>
      {/* issue : cant click on this text */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter a new todo"
        onChangeText={textChanged}
        value={text}
        textContentType="jobTitle"
      />

      <Button
        style={styles.buttonStyle}
        title="Add"
        onPress={() => submitTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
  },
  buttonStyle: {
    color: 'purple',
  },
});
