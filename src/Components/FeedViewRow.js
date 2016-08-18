'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'

import ItemDetail from './ItemDetail'

const route = {
  item: {
    type: 'push',
    route: {
      key: 'itemDetail',
      title: 'ItemDetail',
      component: ItemDetail,
      passProps: {}
    },
  }
}

class FeedViewRow extends Component {
  // _rowPressed(rowData, type='Normal'){
  //   this.props.navigator.push({
  //     component: ItemDetail,
  //     name: 'Detail',
  //     type: type,
  //     passProps:{rowData: rowData}
  //   })
  // }

  _navigate(route, rowData){
    route.route.passProps = {rowData: rowData}
    this.props._handleNavigate(route)
  }

  _contactPressed(){
    console.log('CONTACT BUTTON HAS BEEN PRESSED')
  }

  _buyPressed(){
    console.log('BUY BUTTON HAS BEEN PRESSED')
  }

  render() {
    var rowData = this.props.rowData

    return (
      <Swiper
        style={styles.wrapper}
        height={159}
        dot={<View style={{backgroundColor:'transparent'}} />}
        activeDot={<View style={{backgroundColor: 'transparent'}} />}
        loop={false}
        index={1}
      >
        {/* Right swipe */}
        <View style={styles.rowContainer}>
          <View style={styles.rowDelete}>
            <Text style={styles.deleteText}>Would you like to delete this listing from Feed?</Text>
            <View style={styles.rowDeleteBottom}>
              <Text style={styles.deleteNoButton}>No</Text>
              <Text style={styles.deleteYesButton}>Yes</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>

        {/* Main swipe */}
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this._navigate.bind(this, route.item, rowData)}
            underlayColor='transparent'
          >
            <View style={styles.rowMain}>
              <Image
                source={rowData.image}
                style={styles.thumb}
              />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.brandText}>{rowData.brand}</Text>
                  <Text style={styles.styleText}>{rowData.style}</Text>
                  <Text style={styles.sizeText}>{rowData.size}</Text>
                  <Text style={styles.priceText}>${rowData.price}</Text>
                </View>
                {/*<View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../img/swipeLeftIcon.png')}
                    style={styles.swipeIcon}
                    />
                    <Text>Info</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require('../img/swipeRightIcon.png')}
                    style={styles.swipeIcon}
                    />
                    <Text>Delete</Text>
                  </View>
                </View>*/}
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.separator}/>
        </View>

        {/* Left swipe */}
        <View style={styles.rowContainer}>
          <View style={styles.rowInfo}>
            {/* Top section */}
            <View>
              <Text style={styles.brandText}>{rowData.brand}</Text>
              <Text style={styles.styleText}>{rowData.style}</Text>
              <Text style={styles.sizeText}>{rowData.size}</Text>
              <Text style={styles.priceText}>${rowData.price}</Text>
            </View>
            {/* Mid section */}
            <View>
            <Text style={styles.detailText}>{rowData.detail}</Text>
            </View>
            {/* Bottom section */}
            <View style={styles.rowInfoBottom}>
              <View>
                <Text style={styles.usernameText}>{rowData.username}</Text>
                <Text style={styles.categoryText}>{rowData.category} {rowData.timeStamp}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableHighlight
                  underlayColor='transparent'
                  onPress={this._contactPressed.bind(this)}
                >
                  <Text style={styles.contactButton}>Contact</Text>
                </TouchableHighlight>
                <TouchableHighlight
                underlayColor='transparent'
                 onPress={this._buyPressed.bind(this)}
                >
                  <Text style={styles.buyButton}>Buy</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>

      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    flex: 1,
    backgroundColor:'black'
  },
  rowMain: {
    flexDirection: 'row',
    padding: 15,
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
  separator: {
    height: 0.7,
    backgroundColor: 'black'
  },
  thumb: {
    width: 175,
    height: 127,
    marginRight: 15
  },
  wrapper: {

  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 3
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  sizeText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  detailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  usernameText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  categoryText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
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
  contactButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  buyButton: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  },
  deleteText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
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
  swipeIcon: {
    width: 18,
    height: 18
  }
});

export default FeedViewRow
