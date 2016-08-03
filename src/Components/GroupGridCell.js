'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;

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
            <Text style={styles.styleText}>{previousRowData.style}</Text>
            <Text style={styles.priceText}>${previousRowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 165,
    marginLeft: 15,
    marginBottom: 15
  },
  groupImage: {
    width: 165,
    height: 155
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default GroupGridCell
