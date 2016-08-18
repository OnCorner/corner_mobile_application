'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ButtonNav from '../Elements/ButtonNav'

import Home from './Home'
import Shop from './Shop'
import Discover from './Discover'

class DrawerPanel extends Component {
  render() {
    console.log(this.props)
    var pr = this.props
    // var navigator = pr._handleNavigate()

    return (
      <View style={styles.container}>
        <ButtonNav
          componentName={Home}
          _handleNavigate={this.props._handleNavigate}
          navKey='home'
          pageName='Home'
          style={styles.button}
        />
        <ButtonNav
          componentName={Shop}
          _handleNavigate={this.props._handleNavigate}
          navKey='shop'
          pageName='Shop'
          style={styles.button}
        />
        <ButtonNav
          componentName={Discover}
          _handleNavigate={this.props._handleNavigate}
          navKey='discover'
          pageName='Discover'
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black'
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AAAAAA'
  }
});

export default DrawerPanel
