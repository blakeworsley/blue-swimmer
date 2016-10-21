import * as firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDH5BclDnRrnvE1JBfUwKz00b-SocM8ksI",
  authDomain: "blue-d8d04.firebaseapp.com",
  databaseURL: "https://blue-d8d04.firebaseio.com",
  storageBucket: "blue-d8d04.appspot.com",
  messagingSenderId: "426528791210"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class blueSwimmer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Blue
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('blueSwimmer', () => blueSwimmer);
