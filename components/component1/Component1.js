import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Component1 extends Component {
 
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
        id: 'component2'
      });
  }
  
  render() { 
    
    
    return (   
      <View style={styles.container}>
        
        <Text style={styles.title}>
          Welcome to React Native App!
        </Text>
        
        <Text style={styles.subtitle}>
          This app will show native components created using React-Native
        </Text>
        
        <Text style={styles.subtitle}>
          App Created By Ahmed Qadri
        </Text>
        
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
    backgroundColor: '#1E90FF',
    flexDirection:'column',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  subtitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
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

AppRegistry.registerComponent('Component1', () => Component1);