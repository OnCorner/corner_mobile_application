'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Group extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/palaceGroup.jpg')}
          style={styles.groupImage}
        />
        <Text/>
        <Text style={styles.infoButton}>Info</Text>
        <Text/>
        <Text/>
        <Text style={styles.groupName}>Palace Marketplace</Text>
        <Text/>
        <Text style={styles.followButton}>Follow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75,
    alignItems: 'center'
  },
  groupImage: {
    width: 340,
    height: 190
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoButton: {
    fontSize: 15,
    color: 'grey'
  },
  followButton: {
    fontSize: 15
  }
});

export default Group
