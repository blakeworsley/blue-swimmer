import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Authentication from './screens/Authentication';
const styles = require('./styles.js');

export default class blueSwimmer extends Component {

  render() {
    return(
      <NavigatorIOS
        ref="navigator"
        initialRoute={{
          component: Authentication,
          title: 'SignIn',
        }}
        style={{flex: 1}}
      />
    )
  }
}
