'use strict';

import firebase from '../firebase';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight }  from 'react-native';
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
       title: this.props.title
     };
   }

   firebase.auth().onAuthStateChanged( user => {
     if(user){
       this.setState({user: user});
       this.goToSwimmerDashboard(user);
     }
   });

   get reference(){
     firebase.database()
      .ref(`teams/${teamPosition}/${team}/athletes/${currentUserId}/${uid}/days`);
   }

   focusNextField(nextField){
     this.refs[nextField].focus();
   }

   pushSwimmerData(){
     reference.push({
       date: this.state.date,
       feedback: {
         mental: 4,
         physical: 5,
         performance: 5
       }
     });
   }

   render() {
     return (
       <View style={styles.container}>
        <Text style={styles.swimmerDashboard}>{this.props.title}</Text>
          <Text>Physical</Text>
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
          <Text>Mental</Text>
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
          <Text>Effort</Text>
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
          >
            <Text>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => console.log(this.state.user)}
          >
            <Text>Sign Out</Text>
          </TouchableHighlight>
          <Text>{this.state.physical}</Text>
          <Text>{this.state.mental}</Text>
          <Text>{this.state.performance}</Text>
          <Text>{this.state.title}</Text>
          <Text>{this.state.date}</Text>

      </View>
    );
  }
}

module.exports = SwimmerDashboard;
