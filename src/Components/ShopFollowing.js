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
                    <Text style={styles.userDetailText}>{rowData.userDetail}</Text>
                  </View>
                  <View>
                    <Text style={styles.followButton}>Following</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>

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
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
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
  },
  userDetailText: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  },
  followButton: {
    color: '#AD985E',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
  }
});

export default ShopFollowing
