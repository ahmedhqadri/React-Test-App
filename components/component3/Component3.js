import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
} from 'react-native'

import FadeInView from '../FadeInView';


export default class component3 extends Component {

  constructor() {
    super();
    this.state = { pressStatus: false };
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  onPressCameraRoll(){
      this.props.navigator.push({
        id: 'cameraroll'
      });
  }

  render() {
    return (

      <View style={styles.container}>

          <TouchableOpacity onPress={() => {this.onPressCamera()}}
            style={ this.state.pressStatus ? styles.buttonPress : styles.CameraButton }
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}>
              <Text style={styles.buttontext}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {this.onPressCameraRoll()}}
            style={ this.state.pressStatus ? styles.buttonPress : styles.CameraRollButton }
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}>
              <Text style={styles.buttontext}>CameraRoll</Text>
          </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
  },
  buttontext: {
    textAlign: 'center',
    color: '#1E90FF',
    marginBottom: 5,
    fontWeight: 'bold',
    textShadowColor: '#000000'
  },
  CameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 50,
    position: 'absolute',
    borderColor: '#FFFFFF',
    alignSelf: 'stretch',
    left: 10,
    right: 10,
  },
  CameraRollButton: {
    flex: 2,
    position: 'absolute',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 50,
    borderColor: '#FFFFFF',
    alignSelf: 'stretch',
    left: 10,
    right: 10,
  },
});

AppRegistry.registerComponent('component3', () => component3);
