import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import firebase, { usersRef } from '../firebase';
import SwimmerDashboard from './SwimmerDashboard';
const styles = require('../styles.js');
const constants = styles.constants;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      emailAddress: null,
      password: null,
      teamName: null
    };
  }

  goToSwimmerDashboard() {
    this.props.navigator.push({
      component: SwimmerDashboard,
      title: 'SwimmerDashboard'
    });
  }

  handleNewUser() {
    firebase.auth().createUserWithEmailAndPassword(this.state.emailAddress, this.state.password)
      .then(() => { firebase.database().ref('users').push({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAddress: this.state.emailAddress,
          teamName: this.state.teamName,
        });
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    );
  }

  render() {
    return (
      <View style={styles.containerCenter}>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.newUserInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
            placeholder="First Name"
            returnKeyType="next"
            required="true"
            
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
            placeholder="Last Name"
            returnKeyType="next"
            required="true"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(emailAddress) => this.setState({emailAddress})}
            value={this.state.emailAddress}
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            required="true"
            autoCapitalize='none'
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            returnKeyType="next"
            required="true"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(teamName) => this.setState({teamName})}
            value={this.state.teamName}
            placeholder="Team Name"
            returnKeyType="done"
            required="true"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              if (this.state)
              this.handleNewUser();
              this.goToSwimmerDashboard();
            }}
          >
            <Text style={styles.button}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

module.exports = Register;
