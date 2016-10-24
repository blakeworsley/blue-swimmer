const React = require('react-native');
const {StyleSheet} = React;
const constants = {
  gradientColor: '#F6FCFF'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.gradientColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  swimmerDashboard: {
    color: 'red',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
  }
});

module.exports = styles;
module.exports.constants = constants;
