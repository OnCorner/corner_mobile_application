'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import DiscoverHeader from './DiscoverHeader'
import DiscoverRow from './DiscoverRow'

class Discover extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {group: 'Palace Marketplace', admin: 'shawn_kemp', image: require('../img/palaceGroup.jpg'), followerNum: '50k', likeNum: '24k', timeStamp: '30d', admin: 'jaowveh', category: 'Fashion', groupDetail: 'Place all Supreme clothing for sale in this group, including accessories as well.'},

      {group: 'Chain Swanging', admin: 'nigo', image: require('../img/chainGroup.jpg'), followerNum: '20k', likeNum: '10k', timeStamp: '5mo', admin: 'berstbserv', category: 'Cars', groupDetail: 'A place dedicated to all streetart collectors worldwide.'},

      {group: 'Rollie Boyz', admin: 'wavyboy1234', image: require('../img/rolexGroup.jpg'), followerNum: '5k', likeNum: '2k', timeStamp: '5d', admin: 'jkioj4983', category: 'Electronics', groupDetail: 'Place all moving items for sale in this group.'}
    ])};
  }

  renderRow(rowData){
    return(
      <DiscoverRow navigator={this.props.navigator} rowData={rowData}/>
    )
  }

  renderHeader(rowData){
    return(
      <DiscoverHeader/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flex: 1
  },
  textBold: {
    marginTop: 71,
    marginLeft: 95,
    color: 'red',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  text: {
    marginTop:5,
    marginLeft: 72,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  },
  textSecond: {
    marginTop:3,
    marginLeft: 72,
    color: 'red',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  }
});

export default Discover
