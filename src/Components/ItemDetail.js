'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  ListView,
  Navigator,
  Alert,
  Animated,
} from 'react-native';

import Swiper from 'react-native-swiper'

import ItemDetailComment from './ItemDetailComment'
import SubviewOrder from './SubviewOrder'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var imageHeight = Dimensions.get('window').height / 1.333;
var infoHeight = Dimensions.get('window').height - imageHeight
var isHidden = true;

class ItemDetail extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      //Where low it should initially start off with (Higher the lower the subview starts)
      bounceValue: new Animated.Value(167),
      paymentText: 'Select',
      affirmText: 'Select',
      addressText: 'Select',
      dataSource: ds.cloneWithRows([
        {username: 'meganmarkel', ratingComment: 'Can you ship to Europe?', image: require('../img/user1.jpg'), rating: 5.0},
        {username: 'karaguilera', ratingComment: 'Where was it purchased?', image:require('../img/user2.jpg'), rating: 4.5},
        {username: 'phoebedarcy', ratingComment: 'check this out @lilugleman', image: require('../img/user3.jpeg'), rating: 5.0},
        {username: 'ghana1994', ratingComment: 'Described as is with top notch quality', image: require('../img/lamboGroup.jpg'), rating: 4.9},
        {username: 'Berluti', ratingComment: 'always up to date with everything', image: require('../img/item3.jpg'), rating: 5.0},
        {username: 'Berluti', ratingComment: 'Striped L/S Shirt', image: require('../img/item3.jpg'), rating: 4.9},
      ])
    };

    this._buyPressed = this._buyPressed.bind(this);
  }

  renderRow(rowData) {
    return (
      <ItemDetailComment rowData={rowData}/>
    );
  }

  _selectPayment() {
    if(this.state.paymentText == 'Select') {
      this.setState({
        paymentText: 'Selected'
      })
    } else {
      this.setState({
        paymentText: 'Select'
      })
    }
  }

  _selectAffirm() {
    if(this.state.affirmText == 'Select') {
      this.setState({
        affirmText: 'Selected'
      })
    } else {
      this.setState({
        affirmText: 'Select'
      })
    }
  }

  _selectAddress() {
    if(this.state.addressText == 'Select') {
      this.setState({
        addressText: 'Selected'
      })
    } else {
      this.setState({
        addressText: 'Select'
      })
    }
  }

  _buyPressed() {
    console.log('BUY HAS BEEN PRESSED')

    //Speed of animation (To what point it goes down to)
    var toValue = 167;

    if(isHidden) {
      toValue = 0;
    }

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 50,
        friction: 10,
      }
    ).start();

    isHidden = !isHidden;
  }

  render() {
    var previousRowData = this.props.rowData

    return (
      <View>
        <Swiper
          style={styles.wrapper}
          loop={false}
          height={imageHeight}

          dot={<View style={{backgroundColor:'#999999', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3}}/>}

          activeDot={<View style={{backgroundColor: 'white', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3}} />}

          loop={false}
        >
          <View style={styles.slideImage}>
            <Image
              source={previousRowData.image}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={previousRowData.image2}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={previousRowData.image3}
              style={styles.itemImage}
            />
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          height={infoHeight}
          onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}

          dot={<View style={{backgroundColor:'#999999', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>}

          activeDot={<View style={{backgroundColor: 'white', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}

          paginationStyle={{bottom: 15, left: null, right: 15}}
          loop={false}
        >
          <View
            style={styles.infoSection}
            title={
              <View style={{flexDirection: 'row', marginBottom: 75, marginLeft: 15}}>
                <Text
                  numberOfLines={1}
                  style={styles.usernameText}
                >
                  shawn_kemp
                </Text>
              </View>
            }
          >
            <Text style={styles.brandText}>{previousRowData.brand}</Text>
            <Text style={styles.styleText}>{previousRowData.style} • Size {previousRowData.size}</Text>
            <Text style={styles.detailText}>Worn very gently with extreme care</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._buyPressed.bind(this)}
                style={styles.buyButton}
              >
                <Text style={styles.buyButtonText}>Buy ${previousRowData.price}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={this._buyPressed}
                style={styles.offerButton}
                underlayColor='transparent'
              >
                <Text style={styles.offerButtonText}>Offer</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View
            style={styles.commentSection}
          >
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
            />
          </View>
        </Swiper>
        <Animated.View
          style={[styles.subView,
            {transform: [{translateY: this.state.bounceValue}]}]}
        >
          <SubviewOrder _buyPressed={this._buyPressed}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImage: {
    width: width,
    height: imageHeight
  },
  wrapper: {

  },
  slideImage: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  infoSection: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 15
  },
  commentSection: {
    flex: 1,
    backgroundColor: 'black'
  },
  buyButton: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10
  },
  offerButton: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },
  profileThumb:{
    width: 17,
    height: 17,
    marginRight: 5
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 3
  },
  detailText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  buyButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  offerButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  usernameText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  commentSectionHeader: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 75,
    marginLeft: 15
  },
  commentSectionText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    height: 167,
    flex: 1,
  },
});

export default ItemDetail
