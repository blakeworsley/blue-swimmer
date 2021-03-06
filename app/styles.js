const React = require('react-native');
const { StyleSheet } = React;
const constants = {
  gradientColor: '#2BA8F7'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveImage: {
    flex: 1,
    width: null,
    height: null,
  },
  welcome: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  swimmerDashboard: {
    color: 'white',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 50,
    backgroundColor: 'rgba(56, 240, 255, 0.77)',
  },
  buttonText: {
    color: 'white',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259DF6',
  },
  newUserInput: {
    height: 40,
    width: 250,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#1F87E3',
  },
  regularFont: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  h1Font: {
    padding: 5,
    fontSize: 18,
    color: '#3c2eb0',
    backgroundColor: 'transparent'
  }
});

module.exports = styles;
module.exports.constants = constants;
