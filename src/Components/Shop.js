'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import ShopItems from './ShopItems'
import ShopFollowing from './ShopFollowing'
import ShopRating from './ShopRating'

class Shop extends Component {
  render() {
    var tabStyle = this.props.tabStyle

    return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.userInfo}>
          <Image source={require('../img/guccimane.jpg')}
          style={styles.profileImg}/>
          <Text>shawn_kemp</Text>
          <Text>Los Angeles</Text>
          <Text/>
          <Text style={styles.followButton}>Follow</Text>
        </View>
        <View style={styles.shopInfo}>
          <Text>Selling nothing but the besties. Waves erday. Selling nothing but the besties. Waves erday.</Text>
          <Text/>
          <Image source={require('../img/coverPhoto.jpg')}
          style={styles.coverPhoto}/>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollableTabView
          tabBarUnderlineColor='white'
          tabBarActiveTextColor='black'
          tabBarInactiveTextColor='grey'
          tabStyle={{borderBottomColor: 'white'}}
        >
          <ShopItems tabLabel='Items'/>
          <ShopFollowing tabLabel='Following'/>
          <ShopRating tabLabel='Rating 4.9'/>
        </ScrollableTabView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    marginTop: 75
  },
  bottomContainer: {
    flex: 2
  },
  userInfo: {
    flex: 1,
    alignItems: 'center'
  },
  shopInfo: {
    flex: 2
  },
  profileImg: {
    width: 100,
    height: 100
  },
  coverPhoto: {
    width: 250,
    height: 100
  },
  followButton: {
    fontWeight: 'bold'
  }
});

export default Shop
