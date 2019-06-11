import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Settings extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
