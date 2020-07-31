/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  TextInputComponent,
} from 'react-native';

export class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      diceValue: -1,
      isCorrectGuess: false,
      canEquate: false,
    };
  }

  rollDice = (ev) => {
    let diceValue = Math.random() * 5 + 1;
    let num = parseInt(this.state.num);
    console.log(num);
    let isCorrectGuess = true;
    let canEquate = false;
    if (!isNaN(num) && (num > 0) & (num < 7)) {
      canEquate = true;
      if (state.diceValue == num) {
        isCorrectGuess = true;
      }
      this.setState({diceValue, isCorrectGuess, canEquate});
    } else {
      this.setState({diceValue, isCorrectGuess: false, canEquate: false});
    }
  };

  changeText = (txt) => {
    let num = parseInt(txt);
    let canEquate = false;
    if (!isNaN(num) && (num > 0) & (num < 7)) {
      canEquate = true;
      this.setState({canEquate});
    } else {
      this.setState({diceValue: -1, canEquate: false});
    }
  };

  render() {
    // const [backgroundColor, setBackgroundColor] = useState('white');

    return (
      <View style={({padding: 20}, styles.page)}>
        {/* <Text style={styles.text} onPress={() => setBackgroundColor('green')}>
          Green
        </Text>
        <Text
          style={styles.selectedText}
          onPress={() => setBackgroundColor('blue')}>
          Blue
        </Text> */}
        <TextInput
          height={60}
          style={styles.half}
          placeholder="Please enter expected dice roll number here (till 6)"
          keyboardType="number-pad"
          maxLength={1}
          flex={1}
          onChangeText={this.changeText}
        />
        <View>
          {this.state.canEquate && (
            <Button flex={1} title="Roll dice" onPress={this.rollDice} />
          )}
        </View>

        {this.state.isCorrectGuess && (
          <Text flex={1}>You guessed correct!</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    alignContent: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'black',
  },
  selectedText: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'black',
  },
  image: {
    marginTop: 16,
    borderRadius: 16,
  },
  half: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
