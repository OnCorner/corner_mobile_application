'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class GroupGridCell extends Component {

  render() {
    var previousRowData = this.props.rowData

    return (
      <View style={styles.item}>
        <TouchableHighlight underlayColor='transparent'>
          <View>
            <Image
              source={previousRowData.image}
              style={styles.groupImage}
            />
            <Text>{previousRowData.style}</Text>
            <Text>${previousRowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 15,
    width: 155,
    height: 175
  },
  groupImage: {
    width: 155,
    height: 155
  }
});

export default GroupGridCell
