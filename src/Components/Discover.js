'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ListView
} from 'react-native';

import Swiper from 'react-native-swiper'

var width = Dimensions.get('window').width;

var height = Dimensions.get('window').height;

var imageHeight = Dimensions.get('window').height * .25;

class Discover extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {group: 'Palace Marketplace', admin: 'shawn_kemp', size: 'OS', price:75, image: require('../img/palaceGroup.jpg')},
      {group: 'Chain Swanging', admin: 'nigo', size: '7', price:50, image:require('../img/chainGroup.jpg')},
      {group: 'Rollie Boyz', admin: 'wavyboy1234', size: 'XXL', price:25, image: require('../img/rolexGroup.jpg')}
    ])};
  }

  renderRow(rowData){
    return(
      <View>
        <View style={{padding: 15}}>
          <View style={styles.rowContainer}>
            <View>
              <Image source={require('../img/deleteIcon.png')}
              style={styles.deleteButton}/>
            </View>
            <View>
              <Text>Follow</Text>
            </View>
          </View>

          <Image
            source={rowData.image}
            style={styles.groupThumb}
          />

          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.groupText}>{rowData.group}</Text>
              <Text>{rowData.admin}</Text>
            </View>
            <View>
              <Text>Info</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    )
  }

  renderHeader(rowData){
    return(
      <View>
        <Text style={styles.title}> Featured </Text>

        <Swiper
          style={styles.wrapper}
          height={imageHeight}
          autoplay={true}

          dot={<View
          style={{backgroundColor:'transparent'}} />}

          activeDot={<View style={{backgroundColor: 'transparent'}} />}
        >
          <View
            style={styles.slideImage}
            title={
              <Text>Supreme Marketplace</Text>
            }
          >
            <Image
              source={require('../img/supremeGroup.jpeg')}
              style={styles.itemImage}
            />
          </View>
          <View
            style={styles.slideImage}
            title={
              <Text>Streetart Group</Text>
            }
          >
            <Image
              source={require('../img/kawsGroup.jpg')}
              style={styles.itemImage}
            />
          </View>
          <View
            style={styles.slideImage}
            title={
              <Text>Jordan Marketplace</Text>
            }
          >
            <Image
              source={require('../img/jordanGroup.jpeg')}
              style={styles.itemImage}
            />
          </View>
        </Swiper>

        <Text style={styles.subTitle}> Trending </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}
        renderHeader={this.renderHeader.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    flex: 1
  },
  title: {
    marginTop: 70,
    marginLeft: 15,
    marginBottom: 15,
    color: 'black',
    fontSize: 20
  },
  subTitle: {
    marginTop: 40,
    marginLeft: 15,
    marginBottom: 15,
    color: 'black',
    fontSize: 20
  },
  wrapper: {

  },
  slideImage: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  itemImage: {
    width: width,
    height: imageHeight
  },
  groupThumb: {
    width: 345,
    height: 175
  },
  groupText: {
    color: 'black',
    fontWeight: 'bold'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteButton: {
    width: 17,
    height: 17
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

export default Discover
