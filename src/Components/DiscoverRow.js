'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'

import Shop from './Shop'
import Group from './Group'

var width = Dimensions.get('window').width;

const route = {
  group: {
    type: 'push',
    route: {
      key: 'group',
      title: 'Group',
      component: Group,
      passProps: {}
    },
  }
}

class DiscoverRow extends Component {

  _navigate(route, rowData){
    route.route.passProps = {rowData: rowData}
    this.props._handleNavigate(route)
  }

  _likePressed() {
    console.log('LIKE BUTTON HAS BEEN PRESSED')
  }

  _followPressed() {
    console.log('FOLLOW BUTTON HAS BEEN PRESSED')
  }

  render() {
    var rowData = this.props.rowData

    return (
      <Swiper
        style={styles.wrapper}
        height={181}
        dot={<View style={{backgroundColor:'transparent'}} />}
        activeDot={<View style={{backgroundColor: 'transparent'}} />}
        loop={false}
        index={1}
      >
        {/* Right swipe */}
        <View style={{flex: 1}}>
          <View style={styles.rowDelete}>
            <Text style={styles.deleteText}>Would you like to delete this listing from Feed?</Text>
            <View style={styles.rowDeleteBottom}>
              <Text style={styles.deleteNoButton}>No</Text>
              <Text style={styles.deleteYesButton}>Yes</Text>
            </View>
          </View>
        </View>

        {/* Main swipe */}
        <View style={{flex: 1, padding: 15}}>
          <View>
            {/*<View style={styles.rowContainer}>
              <View>
                <Image
                  source={require('../img/deleteIcon.png')}
                  style={styles.deleteButton}
                />
              </View>
              <View>
                <Text>Follow</Text>
              </View>
            </View>*/}
            <TouchableHighlight onPress={()=>{this._navigate(route.group, rowData)}}>
              <Image
                source={rowData.image}
                style={styles.groupThumb}
              />
            </TouchableHighlight>
            <View style={styles.rowGroupContainer}>
              <View>
                <Text style={styles.groupText}>{rowData.group}</Text>

                <TouchableHighlight onPress={null}>
                  <Text style={styles.admin}>{rowData.admin}</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>

        {/* Left swipe */}
        <View style={{flex:1}}>
          <View style={styles.rowInfo}>
            {/* Top section */}
            <View>
              <Text style={styles.brandText}>{rowData.group}</Text>
              <Text style={styles.followerText}>{rowData.followerNum} followers</Text>
              <Text style={styles.likeText}>{rowData.likeNum} likes</Text>
            </View>
            {/* Mid section */}
            <View>
              <Text style={styles.groupDetailText}>{rowData.groupDetail}</Text>
            </View>
            {/* Bottom section */}
            <View style={styles.rowInfoBottom}>
              <View>
                <Text style={styles.adminText}>{rowData.admin}</Text>
                <Text style={styles.moreInfoText}>{rowData.category} {rowData.timeStamp}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor='transparent'
                  onPress={this._likePressed.bind(this)}
                >
                  <Text style={styles.likeButton}>Like</Text>
                </TouchableHighlight>
                <TouchableHighlight
                underlayColor='transparent'
                 onPress={this._followPressed.bind(this)}
                >
                  <Text style={styles.followButton}>Follow</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>

      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  groupThumb: {
    width: 345,
    height: 115,
    marginBottom: 15
  },
  groupText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5
  },
  admin: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  deleteButton: {
    width: 17,
    height: 17
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteNoButton: {
    marginRight: 20
  },
  rowDelete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15
  },
  rowDeleteBottom: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  rowInfoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  followButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 3
  },
  likeText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  deleteNoButton: {
    marginRight: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  deleteYesButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  deleteText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  followerText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  groupDetailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  adminText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  moreInfoText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default DiscoverRow
