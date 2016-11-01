'use strict';

import firebase from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight }  from 'react-native';
import split from 'split-object';
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
      user: null
    };
  }

  componentDidMount() {
    firebase.database().ref('users').on('value', (snapshot) => {
      let users = snapshot.val();
      split(users).map(user => {
        if (user.value.emailAddress === this.props.user.email) {
          users = Object.assign({ id: user.key }, user.value);
        }
      });
      this.setState({user: users});
    });
  }

  sendData() {
    const { physical, mental, performance, date, user } = this.state;
    firebase.database().ref(`workouts/${user.teamName}/${user.id}/${date}`).push({
      physical,
      mental,
      performance
    });
    // .then(() => { this.goToComplete(); });
  }

  focusNextField(nextField){
    this.refs[nextField].focus();
  }

  render() {
    return (
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

        <Text style={styles.regularFont}>Physical: {this.state.physical || 'N/A'}</Text>
        <Text style={styles.regularFont}>Mental: {this.state.mental || 'N/A'}</Text>
        <Text style={styles.regularFont}>Performance: {this.state.performance || 'N/A'}</Text>
        <Text style={styles.regularFont}>Date: {this.state.date}</Text>
        <Text style={styles.regularFont}>Current User: {this.props.user.email}</Text>
        {this.state.user ? <Text style={styles.regularFont}>Team: {this.state.user.teamName}</Text> : null}


      </View>
    );
  }
}

module.exports = SwimmerDashboard;
