import firebase, { teamRef, swimmerRef, provider } from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';
const SwimmerDashboard = require('./SwimmerDashboard');
const Register = require('./Register');
const styles = require('../styles.js');

export default class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      emailAddress: null,
      password: null,
      register: false
    };
  }

  toggleRegisterComponent() {
    this.state.register ? this.setState({register: false}) : this.setState({register: true});
  }

  checkForFullFields(){
    const {emailAddress, password} = this.state;
    if(emailAddress === null || password === null) { return false; }
    else { return true; }
  }

  login() {
    const {emailAddress, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .catch(() => {
        alert('Invalid credentials. Please check that you are using a valid email and password.');
      });
  }

  render() {
    if(this.state.register) {
      return( <Register emailAddress={this.state.emailAddress} back={this.toggleRegisterComponent}/> );
      };
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
            if(this.checkForFullFields()){ this.login(); }
            else { alert('Please complete all fields before submitting'); }
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => { this.toggleRegisterComponent() }}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>

    );
  }
}
