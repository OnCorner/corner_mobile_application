'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import ShopItems from './ShopItems'
import ShopFollowing from './ShopFollowing'
import ShopRating from './ShopRating'
import ShopTabBar from './ShopTabBar'

var width = Dimensions.get('window').width;

class Shop extends Component {
  render() {
    var tabStyle = this.props.tabStyle

    return (
      <View style={styles.container}>
            <Image source={require('../img/coverPhoto.jpg')}
            style={styles.coverPhoto}/>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>PapiWaveShop</Text>
              <Text style={styles.userLocation}>Los Angeles, CA</Text>
              <Text style={styles.followButton}>Follow</Text>
              <View style={styles.separator}/>
              <Text style={styles.shopDetail}>With a tradition rooted in guaranteed authentic merchandise — a reputation that began in 3030 — PapiWaveShop established itself as the premier location for both customers and consignors alike.</Text>
          </View>
          <ScrollableTabView
            renderTabBar={() =>
              <ShopTabBar/>
            }
            scrollWithoutAnimation={true}
            tabBarTextStyle={{
              fontFamily: 'Helvetica Neue',
              fontSize: 13
            }}
          >
            <ShopItems tabLabel='Items'/>
            <ShopFollowing tabLabel='Following'/>
            <ShopRating tabLabel='Rating 4.9'/>
          </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: '#dddddd',
    marginBottom: 15
  },
  userName: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  userLocation: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  shopDetail: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  upperContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: 55
  },
  bottomContainer: {
    flex: 2
  },
  userInfo: {
    padding: 15
  },
  shopInfo: {
    flex: 2
  },
  profileImg: {
    width: 100,
    height: 100
  },
  coverPhoto: {
    width: width,
    height: 160
  },
  followButton: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  textBold: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'

  },
  text: {
    marginLeft: 80,
    color: 'red',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginTop: 5
  },
  textSecond: {
    marginLeft: 80,
    color: 'red',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null
  },
});

export default Shop
