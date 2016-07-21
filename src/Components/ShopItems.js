'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

class ShopItems extends Component {
  constructor(props){
    super(props);

    this._renderRow = this._renderRow.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
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

  _renderRow(rowData){
    return (
      <View style={styles.item}>
        <TouchableHighlight underlayColor='transparent'>
          <View>
            <Image source={rowData.image} style={styles.groupImage}/>
            <Text>{rowData.style}</Text>
            <Text>${rowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.list} dataSource={this.state.dataSource} renderRow={this._renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    margin: 15,
    width: 155,
    height: 175
  },
  groupImage: {
    width: 155,
    height: 155
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default ShopItems
