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

class ShopFollowing extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {username: 'meganmarkel', userDetail: 'Selling supreme only', image: require('../img/user1.jpg')},
      {username: 'karaguilera', userDetail: 'Located in LA', image:require('../img/user2.jpg')},
      {username: 'phoebedarcy', userDetail: 'Collecting primarily jays', image: require('../img/user3.jpeg')},
      {username: 'ghana1994', userDetail: 'Striped L/S Shirt', image: require('../img/lamboGroup.jpg')},
      {username: 'Berluti', userDetail: 'Striped L/S Shirt', image: require('../img/item3.jpg')},
      {username: 'Berluti', userDetail: 'Striped L/S Shirt', image: require('../img/item3.jpg')}
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
                  <Text>{rowData.userDetail}</Text>
                </View>
                <View>
                  <Text style={styles.followButton}>Following</Text>
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
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}
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
  }
});

export default ShopFollowing
