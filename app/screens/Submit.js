import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import firebase, { usersRef } from '../firebase';
import SwimmerDashboard from './SwimmerDashboard';
const styles = require('../styles.js');
const constants = styles.constants;

class Submit extends Component {
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.back() }
          >
            <Text style={styles.buttonText}>Add Another Practice</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

module.exports = Submit;





















// import firebase, { teamRef, swimmerRef, provider } from '../firebase';
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
// // const SwimmerDashboard = require('./SwimmerDashboard');
// const styles = require('../styles.js');
//
// export default class Submitted extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight
//           style={styles.button}
//           onPress={() => this.props.back() }
//         >
//           <Text style={styles.buttonText}>Add Another Practice</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
