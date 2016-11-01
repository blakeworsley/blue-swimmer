import firebase from './firebase';
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Authentication from './screens/Authentication';
import SwimmerDashboard from './screens/SwimmerDashboard';
const styles = require('./styles.js');

export default class blueSwimmer extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  get reference() {
    const { user } = this.state;
    return firebase.database().ref('users').child(user.uid);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( (user) =>  {
      this.setState({user});
    });
  }

  render() {
    const {user} = this.state;
    return(
      <Image source={require('./img/wave_background.png')} style={styles.waveImage}>
        <View style={styles.container}>
          {user ? <SwimmerDashboard user={user} /> : <Authentication />}
        </View>
      </Image>
    );
  }
}
