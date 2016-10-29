'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput }  from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;

class SwimmerDashboard extends Component {
  constructor(props) {
     super(props);
     this.state = {
       physical: null,
       mental: null,
       effort: null,
       date: Date.now()
     };
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.swimmerDashboard}>{this.props.title}</Text>
          <Text>Physical</Text>
          <TextInput
            ref="1"
            style={styles.newUserInput}
            onChangeText={(raiting) => this.setState({raiting})}
            value={this.state.physical}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('2')}
            autoCapitalize="none"
          />
          <Text>Mental</Text>
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(raiting) => this.setState({raiting})}
            value={this.state.mental}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('3')}
            autoCapitalize="none"
          />
          <Text>Effort</Text>
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(raiting) => this.setState({raiting})}
            value={this.state.effort}
            placeholder="Rating between 1 and 5"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={() => this.focusNextField('submit')}
            autoCapitalize="none"
          />
          <TouchableHighlight
            ref="submit"
            style={styles.button}
          >
          <Text>Submit</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

module.exports = SwimmerDashboard;
