'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
import { Provider } from 'react-redux'

import NavigationRootContainer from './src/Containers/navRootContainer'

import configureStore from './src/Store/configureStore'
const store = configureStore()

const corner_mobile = () => (
  <Provider store={store}>
    <NavigationRootContainer/>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  navBar: {
    height: 55,
    backgroundColor: 'black'
  },
  transNavBar: {
    height: 55,
    backgroundColor: 'transparent'
  },
  navBarTitle: {
    marginTop: 1,
    marginRight: 211,
    fontSize: 15,
    color: '#999999'
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 2,
    color: 'white'
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight: 13,
    marginTop: 2,
    color: 'white'
  },
  leftNavButtonImg: {
    marginLeft: 18,
    width: 16,
    height: 35,
    color: '#999999',
    fontWeight: 'bold',
    fontSize: 8
  },
  RightNavButtonImg: {
    marginRight: 13,
    width: 27
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 3
  }
});

AppRegistry.registerComponent('corner_mobile', () => corner_mobile);
