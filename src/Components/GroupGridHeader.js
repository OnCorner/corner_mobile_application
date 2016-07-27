'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

class GroupGridHeader extends Component {
  render() {
    var previousRowData = this.props.previousRowData

    return (
      <View style={styles.container}>
        <Image
          source={previousRowData.image}
          style={styles.groupImage}
        />
        <Text style={styles.infoButton}>Info</Text>
        <Text style={styles.groupName}>{previousRowData.group}</Text>
        <Text style={styles.followButton}>Follow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 15,
    alignItems: 'center'
  },
  groupImage: {
    width: 345,
    height: 230,
    marginBottom: 70
  },
  groupName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#AD985E',
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  infoButton: {
    fontSize: 11,
    color: 'grey',
    fontFamily: 'Helvetica Neue'
  },
  followButton: {
    fontSize: 13,
    color: 'white',
    marginBottom: 55
  }
});

export default GroupGridHeader
