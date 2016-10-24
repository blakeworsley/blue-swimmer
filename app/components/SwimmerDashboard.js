'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View }  from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;

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
