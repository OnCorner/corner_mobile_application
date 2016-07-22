'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ButtonNav from '../Elements/ButtonNav'

import Home from './Home'
import Shop from '../Views/Shop'
import Discover from './Discover'

class DrawerPanel extends Component {
  render() {
    var pr = this.props
    var navigator = pr.navigator

    return (
      <View style={styles.container}>
        <ButtonNav
          componentName={Home}
          navigator={navigator}
          pageName='Home'
          style={{color: 'black', fontSize: 20}}
        />
        <ButtonNav
          componentName={Shop}
          navigator={navigator}
          pageName='Shop'
          style={styles.button}
        />
        <ButtonNav
          componentName={Discover}
          navigator={navigator}
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
    backgroundColor: 'pink'
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default DrawerPanel
