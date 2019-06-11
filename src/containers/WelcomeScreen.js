import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Config from 'react-native-config'

const {
  APP_NAME,
  COLOR,
  IS_IMAGE_ENABLE
} = Config;

type Props = {};
export default class App extends Component<Props> {

  renderImage = () => (
    <Image source={{uri: "https://avatars.mds.yandex.net/get-pdb/1340225/bdfa5962-ae66-493c-b41d-ee57e9e0e450/s375"}} style={styles.imageStyle} />
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! {APP_NAME}</Text>
        {IS_IMAGE_ENABLE && this.renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR,
  },
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  }
});
