'use strict';

import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
import { StyleSheet, Text, View }  from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;

class SwimmerDashboard extends Component {
  constructor(props) {
     super(props);
     this.state = {
       starCount: 3.5
     };
   }

   onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }

  render() {
    return (
      <View>
        <Text style={styles.swimmerDashboard}>{this.props.title}</Text>
        <StarRating
               disabled={false}
               maxStars={5}
               rating={this.state.starCount}
               selectedStar={(rating) => this.onStarRatingPress(rating)}
             />
      </View>
    );
  }
}

module.exports = SwimmerDashboard;
