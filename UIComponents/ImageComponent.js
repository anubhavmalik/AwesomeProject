import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

// mount -> updation -> unmount

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'initial call',
    };
  }

  componentDidCatch() {
    this.setState({
      message: 'did catch',
    });
    console.log('did catch');
  }

  componentDidMount() {
    //called as soon as component is added to dom
    this.setState({
      message: 'did mount',
    });
    console.log('did mount');
  }

  componentDidUpdate() {
    this.setState({
      message: 'did update',
    });
    console.log('did update');
  }

  componentWillMount() {
    this.setState({
      message: 'will mount',
    });
    console.log('will mount');
  }

  componentWillUnmount() {
    this.setState({
      message: 'will unmount',
    });
    console.log('will unmount');
  }

  static getDerivedStateFromProps(props, state) {
    //called before component is rendered on dom

    //now this does not look like it should have a lot of responsibility, similar to onCreate
    return {
      someData: 'yolo', // update state with this
    };
    // return null ------> this will make no changes
  }

  //todo : anubhav remember these comments :
  // constructor is called even before this component is added in the dom
  //
}
