import firebase, { teamRef, swimmerRef, provider } from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
const SwimmerDashboard = require('../components/SwimmerDashboard');
const Register = require('../components/Register');
const styles = require('../styles.js');

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    teamRef.on('value', (snap) => {
      console.log(snap);
    });
  }

  goToRegister() {
    this.props.navigator.push({
      component: Register,
      title: 'Register'
    });
  }

  newSwimmer() {
    swimmerRef.push({firstName: 'Blake Worsley'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Not Logged In
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({ user: 'Blake Worsley' })
          }}
        >
          <Text style={styles.button}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.goToRegister()
          }}
        >
          <Text style={styles.button}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
