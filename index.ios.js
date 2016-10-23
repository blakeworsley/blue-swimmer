import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
  const rootRef = firebase.database().ref();
  const itemsRef = rootRef.child('items');
// END FIREBASE

export default class blueSwimmer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to BlueSwimmer
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('blueSwimmer', () => blueSwimmer);
