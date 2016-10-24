import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;

class Register extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
