import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Config from 'react-native-config'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { navigateToTab } from "../navigation/actions";

const {
  APP_NAME,
  COLOR,
  IS_IMAGE_ENABLE
} = Config;

class App extends Component {

  renderImage = () => (
    <Image source={{uri: "https://avatars.mds.yandex.net/get-pdb/1340225/bdfa5962-ae66-493c-b41d-ee57e9e0e450/s375"}} style={styles.imageStyle} />
  )

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigateToTab}>
          <Text style={styles.welcome}>Navigate to tab screen</Text>
        </TouchableOpacity>
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

const mapStateToProps = (state) => ({
  details: []
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ navigateToTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
