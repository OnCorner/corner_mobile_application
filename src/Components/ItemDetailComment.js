'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class ItemDetailComment extends Component {

  render() {
    var rowData = this.props.rowData;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='#dddddd'
        >
          <View style={styles.rowContainer}>
              <Image
                source={rowData.image}
                style={styles.thumb}
              />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.userText}>{rowData.username}</Text>
                </View>
                <View>
                  <Text style={styles.commentText}>{rowData.ratingComment}</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  userText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  commentText: {
    color: '#999999',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  }
});

export default ItemDetailComment
