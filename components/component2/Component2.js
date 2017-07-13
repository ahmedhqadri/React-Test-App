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

export default class component2 extends Component {

  constructor() {
    super();
    this.state = { pressStatus: false };
    this.state.pickerValue = ''
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  onPress(){
      this.props.navigator.push({
        id: 'component3'
      });
  }

  render() {
    return (

      <View style={styles.container}>
        <FadeInView>
          <Text style={styles.title}>
            The following is a native picker. Select an item and press continue
          </Text>
          <Picker
             style={{
            }}
            selectedValue={(this.state && this.state.pickerValue) || 'a'}
            onValueChange={(value) => {
              this.setState({pickerValue: value})
            }}>
            <Picker.Item label={'Pizza'} value={'a'} />
            <Picker.Item label={'Burger'} value={'b'} />
          </Picker>
        </FadeInView>

        <TouchableOpacity onPress={() => {this.onPress()}}
          style={ this.state.pressStatus ? styles.buttonPress : styles.button }
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Text style={styles.buttontext}>Continue</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#1E90FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    color: '#FFFFFF'
  },
  buttontext: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
    fontWeight: 'bold',
    textShadowColor: '#000000'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    height: 50,
    position: 'absolute',
    borderColor: '#FFFFFF',
    alignSelf: 'stretch',
    left:0,
    right:0,
    bottom:0,
  },
  buttonPress: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderWidth: 4,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'stretch',
    position: 'absolute',
    left:0,
    right:0,
    bottom:0,
  },
});

AppRegistry.registerComponent('component2', () => component2);
