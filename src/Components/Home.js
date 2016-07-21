'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FeedView from './FeedView'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <FeedView navigator={this.props.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  }
});

export default Home
