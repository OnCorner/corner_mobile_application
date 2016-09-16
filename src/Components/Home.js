'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import FeedView from './FeedView'

class Home extends Component {

  //Try calling actions in here to see if it gets rerendered

  render() {
    return (
      <View style={styles.container}>
        <FeedView _handleNavigate={this.props._handleNavigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null
  },
  textBold: {
    marginTop:331,
    marginLeft: 15,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  text: {
    marginTop:4,
    marginLeft: 15,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  }
});

export default Home
