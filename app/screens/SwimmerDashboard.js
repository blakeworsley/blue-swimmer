'use strict';

import firebase from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight }  from 'react-native';
import split from 'split-object';
const Submit = require('./Submit');
const styles = require('../styles.js');
const constants = styles.constants;

class SwimmerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physical: null,
      mental: null,
      performance: null,
      date: Date.now(),
      user: null,
      submitted: false,
    };
  }

  componentDidMount() {
    firebase.database().ref('users').on('value', (snapshot) => {
      let users = snapshot.val();
      split(users).map(user => {
        if (user.value.emailAddress === this.props.user.email) {
          users = Object.assign({ key: user.key }, user.value);
        }
      });
      this.setState({user: users});
    });
  }

  sendData() {
    const { physical, mental, performance, date, user } = this.state;
    const userWorkoutRef = `workouts/${user.teamName.toLowerCase()}/${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}`;
    firebase.database().ref(userWorkoutRef).push({
      date,
      physical,
      mental,
      performance
    })
    .then(this.setState({physical: null, mental: null, performance: null, date: Date.now()}))
    .then(() => { this.toggleSubmitedComponent(); });
  }

  toggleSubmitedComponent() {
    this.state.submitted ? this.setState({submitted: false}) : this.setState({submitted: true});
  }

  focusNextField(nextField){
    this.refs[nextField].focus();
  }

  render() {
    const {physical, mental, performance} = this.state;
    if(this.state.submitted) {
      return( <Submit back={() => {this.toggleSubmitedComponent()}}/> );
    }
    return (
      ( this.state.user
        ?
        <View style={styles.container}>
          <Text style={styles.swimmerDashboard}>{this.props.title}</Text>
          <Text style={styles.h1Font}>{this.state.user ? 'Welcome ' + this.state.user.firstName : null}</Text>
          <Text style={styles.regularFont}>Physical</Text>
          <TextInput
            ref="1"
            style={styles.newUserInput}
            onChangeText={(rating) => this.setState({physical: rating})}
            value={this.state.physical}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('2')}
            autoCapitalize="none"
          />
          <Text style={styles.regularFont}>Mental</Text>
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(rating) => this.setState({mental: rating})}
            value={this.state.mental}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('3')}
            autoCapitalize="none"
          />
          <Text style={styles.regularFont}>Effort</Text>
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(rating) => this.setState({performance: rating})}
            value={this.state.performance}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={() => this.focusNextField('submit')}
            autoCapitalize="none"
          />
          <TouchableHighlight
            ref="submit"
            style={styles.button}
            onPress={() => {this.sendData()}}
            disabled={(!mental || !physical || !performance)}
          >
            <Text>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              firebase.auth().signOut();
            }}
          >
            <Text>Sign Out</Text>
          </TouchableHighlight>

        </View>
        : <Text style={styles.regularFont}>Loading Athlete</Text>
      )
    );
  }
}

module.exports = SwimmerDashboard;
