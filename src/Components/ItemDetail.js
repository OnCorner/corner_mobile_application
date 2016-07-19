'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper'

var width = Dimensions.get('window').width;

var height = Dimensions.get('window').height;

var imageHeight = Dimensions.get('window').height / 1.333;

var infoHeight = Dimensions.get('window').height - imageHeight

class ItemDetail extends Component {

  _buyPressed(){
    console.log('BUY HAS BEEN PRESSED')
  }

  render() {
    var rowData = this.props.rowData
    return (
      <View>
        <Swiper
          style={styles.wrapper} loop={false}
          height={imageHeight}
        >
          <View style={styles.slideImage}>
            <Image
              source={rowData.image}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={rowData.image2}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.slideImage}>
            <Image
              source={rowData.image3}
              style={styles.itemImage}
            />
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          height={infoHeight}

          onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}

          dot={<View
          style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}

          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}

          paginationStyle={{
            bottom: 5, left: null, right: 10,
          }}
          loop={true}
        >

          <View
            style={styles.infoSection}
            title={
              <View style={{flexDirection:'row', marginBottom: 60}}>
                <Image source={require('../img/profileIcon.png')}
                style={styles.profileThumb}
                />
                <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize:13}}>shawn_kemp</Text>
              </View>
            }
          >
            <Text> </Text>
            <Text>{rowData.brand}</Text>
            <Text>{rowData.style} • Size {rowData.size}</Text>
            <Text> </Text>
            <Text>Worn very gently with extreme care</Text>
            <Text> </Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._buyPressed.bind(this)}
                style={styles.buyButton}
              >
                <Text>Buy ${rowData.price}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._buyPressed.bind(this)}
                style={styles.offerButton}
              >
                <Text>Offer</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.commentSection} title={<Text style={{marginBottom: 60, fontWeight: 'bold', fontSize: 13}} numberOfLines={4} >Comments</Text>}>
            <Text style={{fontWeight: 'bold'}}>COMMENTS RA HER</Text>
          </View>

        </Swiper>
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
    backgroundColor: 'white',
    alignItems: 'center'
  },
  commentSection: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buyButton: {
    borderWidth: 1,
    borderColor: 'black',
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
    borderColor: 'black',
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
  }
});

export default ItemDetail
