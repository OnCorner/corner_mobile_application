'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

class ShopRating extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {username: 'meganmarkel', ratingComment: 'Love shopping here. Excellent service!', image: require('../img/user1.jpg'), rating: 5.0},
      {username: 'karaguilera', ratingComment: 'A++++ all around. Best shipping.', image:require('../img/user2.jpg'), rating: 4.5},
      {username: 'phoebedarcy', ratingComment: 'Get yo swag on thru this shop', image: require('../img/user3.jpeg'), rating: 5.0},
      {username: 'ghana1994', ratingComment: 'Described as is with top notch quality', image: require('../img/lamboGroup.jpg'), rating: 4.9},
      {username: 'Berluti', ratingComment: 'always up to date with everything', image: require('../img/item3.jpg'), rating: 5.0},
      {username: 'Berluti', ratingComment: 'Striped L/S Shirt', image: require('../img/item3.jpg'), rating: 4.9}
    ])};
  }

  renderRow(rowData){
    return (
        <TouchableHighlight
          underlayColor='#dddddd'
        >
          <View>
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
                  <Text style={styles.ratingComment}>{rowData.ratingComment}</Text>
                </View>
                <View>
                  <Text style={styles.followButton}>{rowData.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  userText: {
    fontWeight: 'bold'
  },
  followButton: {
    color: 'grey'
  },
  ratingComment: {
    fontStyle: 'italic'
  }
});

export default ShopRating
