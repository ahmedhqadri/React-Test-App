import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
} from 'react-native'



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

  onPress(){
      this.props.navigator.push({
        id: 'component3ios'
      });
  }

  render() {
    return (

      <View style={styles.container}>




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
});

AppRegistry.registerComponent('component3', () => component3);
