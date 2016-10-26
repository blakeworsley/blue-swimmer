import firebase, { teamRef, swimmerRef, provider } from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
const SwimmerDashboard = require('../components/SwimmerDashboard');
const Register = require('../components/Register');
const styles = require('../styles.js');

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      emailAddress: null,
      password: null,
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
  
  goToSwimmerDashboard() {
    this.props.navigator.push({
      component: SwimmerDashboard,
      title: 'SwimmerDashboard',
    });
  }

  newSwimmer() {
    swimmerRef.push({firstName: 'Blake Worsley'});
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.state.emailAddress, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="1"
          style={styles.newUserInput}
          onChangeText={(emailAddress) => this.setState({emailAddress})}
          value={this.state.emailAddress}
          placeholder="Email Address"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => this.focusNextField('2')}
          autoCapitalize="none"
        />
        <TextInput
          ref="2"
          style={styles.newUserInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password"
          returnKeyType="done"
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.login()
            this.goToSwimmerDashboard()
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
