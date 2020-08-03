import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
// import {TodoComponent} from './TodoComponent';
import {todoReducer} from '../src/reducers/TodoListReducer';
import {connect} from 'react-redux';
import {deleteTodo} from '../src/actions/Todo';

class ListComponent extends Component {
  render() {
    console.log('render called for list');
    console.log(this.props.todos.todos);

    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.todos.todos}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={(data) => (
            <ListItem
              title={data.item.data}
              onPress={() => this.props.deleteTodo(data.item.key)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

const mapStateToProps = (state) => {
  console.log('mapstateprops');
  console.log(state.todos);

  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (key) => dispatch(deleteTodo(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
