'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions
} from 'react-native';

import GroupGridHeader from './GroupGridHeader'
import GroupGridCell from './GroupGridCell'

var width = Dimensions.get('window').width;

class Group extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
      {style: 'Heavy weight Blue Oxford', price: 15, image: require('../img/item4.jpg')},
      {style: 'Tiran tee', price: 45, image: require('../img/item5.jpg')},
      {style: 'Archive Denim Jacket', price: 150, image: require('../img/item6.jpg')},
      {style: 'Classic Short Sleeve', price: 300, image: require('../img/item7.jpg')},
      {style: 'Accessories', price: 500, image: require('../img/item1.jpg')},
      {style: 'Accessories', price: 400, image: require('../img/item2.jpg')},
      {style: 'shoes', brand: 'diamonds'},
      {style: 'shoes', brand: 'dancin'},
      {style: 'shoes', brand: 'getit'}])
    };
  }


  renderRow(rowData){
    return(
      <GroupGridCell rowData={rowData}/>
    )
  }

  renderHeader(previousRowData){
    return(
      <GroupGridHeader previousRowData={previousRowData}/>
    )
  }

  render() {
    var previousRowData = this.props.rowData

    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this, previousRowData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: 'black'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textBold: {
    marginTop: 0,
    marginLeft: 128,
    color: 'red',
    fontSize: 22,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  text: {
    marginTop:511,
    marginLeft: 133,
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
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 70
  },
  groupImage: {
    width: 345,
    height: 231,
    marginLeft: 15,
    marginTop: 104
  },
});

export default Group
