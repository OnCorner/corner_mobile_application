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
      {style: 'Heavy weight Blue Oxford', price: 250, image: require('../img/item4.jpg')},
      {style: 'Tiran tee', price: 400, image: require('../img/item5.jpg')},
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
            <Image
              source={rowData.image}
              style={styles.groupImage}
            />
            <Text style={styles.styleText}>{rowData.style}</Text>
            <Text style={styles.priceText}>${rowData.price}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: 165,
    height: 175,
    marginBottom: 40,
    marginLeft: 15,
    marginTop: 15
  },
  groupImage: {
    width: 165,
    height: 155
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  priceText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default ShopItems
