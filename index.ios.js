import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const SwimmerDashboard = require('./components/SwimmerDashboard');
const styles = require('./styles.js');

// FIREBASE
  const firebaseConfig = {
    apiKey: "AIzaSyDH5BclDnRrnvE1JBfUwKz00b-SocM8ksI",
    authDomain: "blue-d8d04.firebaseapp.com",
    databaseURL: "https://blue-d8d04.firebaseio.com",
    storageBucket: "blue-d8d04.appspot.com",
    messagingSenderId: "426528791210"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const rootRef = firebase.database().ref(`teams`);
  const swimmerRef = rootRef.child('0/team/athletes');

  const provider = new firebase.auth.GoogleAuthProvider();

// END FIREBASE

export default class blueSwimmer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      data: null
    };
  }




  componentDidMount() {
    rootRef.on('value', (snap) => {
      console.log(snap);
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
          onPress={() => {this.newSwimmer()}}
        >
          <Text style={styles.button}>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('blueSwimmer', () => blueSwimmer);
