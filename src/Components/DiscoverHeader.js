'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper'

var width = Dimensions.get('window').width;
var imageHeight = Dimensions.get('window').height * .25;

class DiscoverHeader extends Component {
  constructor(props){
    super(props);

    this._renderRow = this._renderRow.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
      dataSource: ds.cloneWithRows([
      {groupHeader: 'All Gucci Marketplace', adminHeader: 'gucciemperor123', imageHeader: require('../img/guccimane.jpg')},
      {groupHeader: 'Streetart Group', adminHeader: 'tidalwave', imageHeader: require('../img/kawsGroup.jpg')},
      {groupHeader: 'Supreme Market', adminHeader: 'thadon', imageHeader: require('../img/supremeGroup.jpeg')},
      {groupHeader: 'Big Ring', adminHeader: 'yakyak', imageHeader: require('../img/supremeGroup.jpeg')},
      {groupHeader: 'Squatd', adminHeader: 'hohokay', imageHeader: require('../img/lamboGroup.jpg')},
      {groupHeader: 'Vinyl', adminHeader: 'w1235', imageHeader: require('../img/rolexGroup.jpg')}
      ])
    };
  }

  _renderRow(rowData){
    return (
      <View style={styles.group}>
        <TouchableHighlight underlayColor='transparent'>
          <View style={styles.groupDetailContainer}>
            <Image
              source={rowData.imageHeader}
              style={styles.groupImage}
            />
            <Text style={styles.groupText}>{rowData.groupHeader}</Text>
            <Text style={styles.adminText}>{rowData.adminHeader}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Featured</Text>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.subTitle}>Trending</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 70,
    marginLeft: 15,
    marginBottom: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  subTitle: {
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 15,
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
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
  group: {
    width: 120,
    height: 167,
    marginLeft: 15
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  groupImage: {
    width: 120,
    height: 120
  },
  adminText: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Helvetica Neue'
  },
  groupText: {
    color: '#AD985E',
    fontSize: 11,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  groupDetailContainer: {

  }
});

export default DiscoverHeader
