/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Component1 from './components/component1/Component1';
import Component2 from './components/component2/Component2';
import Component3 from './components/component3/Component3';
import Cameraroll from './components/component3/Cameraroll';
export default class Project extends Component {
     renderScene(route, navigator){
      switch(route.id){
        case 'component1':
          return (<Component1 navigator={navigator} />)
        case 'component2':
          return (<Component2 navigator={navigator} />)
        case 'component3':
          return (<Component3 navigator={navigator} />)
        case 'cameraroll':
          return (<Cameraroll navigator={navigator} />)
      }
    }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'component1'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}
