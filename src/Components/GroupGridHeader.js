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
        <Text/>
        <Text style={styles.infoButton}>Info</Text>
        <Text/>
        <Text/>
        <Text style={styles.groupName}>{previousRowData.group}</Text>
        <Text/>
        <Text style={styles.followButton}>Follow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
    width: width
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

export default GroupGridHeader
