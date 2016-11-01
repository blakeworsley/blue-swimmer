import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import firebase, { usersRef } from '../firebase';
import SwimmerDashboard from './SwimmerDashboard';
const styles = require('../styles.js');
const constants = styles.constants;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      emailAddress: this.props.emailAddress,
      password: null,
      teamName: null
    };
  }

  goToSwimmerDashboard() {
    return(
      <SwimmerDashboard></SwimmerDashboard>
    );
  }

  handleNewUser() {
    const { firstName, lastName, emailAddress, password, teamName } = this.state
    const currentUser = firebase.auth().currentUser

    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
    .catch(() => {
      alert('All fields required. Make sure password is at least 6 characters.');
    })
    .then(() => {
      firebase.database().ref('users').push({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
        type: 'athlete'
      })
    })
    .then(() => {
      firebase.database().ref(`teams/${teamName.toLowerCase()}/athletes/`).push({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
      });
    })
    .then(() => {
      this.goToSwimmerDashboard();
    });
  }

  focusNextField(nextField){
    this.refs[nextField].focus();
  }

  checkForFullFields(){
    if(this.state.firstName === null ||
      this.state.lastName === null ||
      this.state.emailAddress === null ||
      this.state.password.length >= 6 ||
      this.state.teamName === null
    ) { return false; }
    else { return true; }
  }

  render() {
    return (
        <ScrollView style={{marginTop: 100}}>
          <TextInput
            ref="1"
            style={styles.newUserInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
            placeholder="First Name"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('2')}
            blurOnSubmit={false}
          />
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
            placeholder="Last Name"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('3')}
            blurOnSubmit={false}
          />
          <TextInput
            ref="3"
            style={styles.newUserInput}
            onChangeText={(emailAddress) => this.setState({emailAddress})}
            value={this.state.emailAddress}
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('4')}
            blurOnSubmit={false}
            autoCapitalize="none"
          />
          <TextInput
            ref="4"
            style={styles.newUserInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('5')}
            blurOnSubmit={false}
            secureTextEntry={true}
          />
          <TextInput
            ref="5"
            style={styles.newUserInput}
            onChangeText={(teamName) => this.setState({teamName})}
            value={this.state.teamName}
            placeholder="Team Name"
            returnKeyType="done"
            onSubmitEditing={() => this.focusNextField('6')}

          />
          <TouchableHighlight
            ref="6"
            style={styles.button}
            onPress={() => this.handleNewUser() }
          >
            <Text>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.props.back}
          >
            <Text>Back</Text>
          </TouchableHighlight>
        </ScrollView>
    )
  }
}

module.exports = Register;
