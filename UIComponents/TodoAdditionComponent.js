import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {StyleSheet} from 'react-native';

export default function TodoAdditionComponent({submitTodo}) {
  const [text, setText] = useState('');

  const textChanged = (input) => {
    setText(input);
  };

  const submitATodo = () => {
    submitTodo(text);
    setText('');
    //   add from here .... this should not be done in this component. ideally this method should be supplied from outside
    //     // console.log('yolo');
  };

  return (
    <View>
      {/* issue : cant click on this text -> specific to redmi note 3 so far. Why? */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter a new todo"
        onChangeText={textChanged}
        value={text}
        color="black"
        textContentType="jobTitle"
      />

      <Button color="purple" title="Add" onPress={submitATodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
  },
});
