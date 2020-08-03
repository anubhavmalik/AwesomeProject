import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../src/actions/Todo';

class TodoAdditionComponent extends Component {
  state = {
    data: '',
  };

  render() {
    return (
      <View flex={1}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter a new todo"
          onChangeText={(data) => this.setState({data})}
          value={this.state.data}
          color="black"
          textContentType="jobTitle"
        />
        <Button
          color="purple"
          title="Add"
          onPress={() => this.props.addTodo(this.state.data)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todos) => dispatch(addTodo(todos)),
  };
};

export default connect(null, mapDispatchToProps)(TodoAdditionComponent);

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
  },
});
