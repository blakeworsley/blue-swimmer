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
    firebase.auth().onAuthStateChanged( user => { this.setState({user}); });
    teamRef.on('value', (snap) => { console.log(snap); });
  }

  goToRegister() {
    this.props.navigator.push({
      component: Register,
      title: 'Register',
    });
  }

  goToSwimmerDashboard() {
    this.props.navigator.push({
      component: SwimmerDashboard,
      title: 'SwimmerDashboard',
    });
  }

  checkForFullFields(){
    if(this.state.emailAddress === null || this.state.password === null) { return false; }
    else { return true; }
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.state.emailAddress, this.state.password)
      .then(this.goToSwimmerDashboard());
  }

  render() {
    return (
      <View style={styles.container}>
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
            onPress={() => {
              this.goToRegister()
            }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
