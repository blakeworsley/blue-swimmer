import firebase, { rootRef, swimmerRef, provider } from '../firebase';
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
    rootRef.on('value', (snap) => {
      console.log(snap);
    });
  }

  goToRegister() {
    this.props.navigator.push({
      component: SwimmerDashboard,
      title: 'Dashboard'
    });
  }

  newSwimmer() {
    swimmerRef.push({firstName: 'Blake Worsley'});
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to {user}
          </Text>
          <SwimmerDashboard title="SwimmerDashboard" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Not Logged In
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.newSwimmer()
            this.setState({ user: 'Blake Worsley' })
            this.goToRegister()
          }}
        >
          <Text style={styles.button}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.button}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
