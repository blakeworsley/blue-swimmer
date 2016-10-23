'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;
const { StyleSheet, Text, View } = ReactNative;

class SwimmerDashboard extends Component {
  render() {
    return (
      <View style={styles.action}>
        <Text style={styles.swimmerDashboard}>{this.props.title}</Text>
      </View>
    );
  }
}

module.exports = SwimmerDashboard;
