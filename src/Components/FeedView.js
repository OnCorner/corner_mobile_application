'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} from 'react-native';

import Swipeout from 'react-native-swipeout'

import ItemDetail from './ItemDetail'
import RightSwipeView from './RightSwipeView'

class FeedView extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {brand: 'Supreme', style: 'Classic Short Sleeve', size: 'OS', price:75, image: require('../img/item1.jpg'), image2: require('../img/item2.jpg'), image3: require('../img/item3.jpg')},
      {brand: 'CAV EMPT', style: 'Noizig Shirt', size: '7', price:50, image:require('../img/item2.jpg')},
      {brand: 'Berluti', style: 'Striped L/S Shirt', size: 'XXL', price:25, image: require('../img/item3.jpg')}
    ])};
  }

  _rowPressed(rowData, type='Normal'){
    this.props.navigator.push({
      component: ItemDetail,
      name: 'Detail',
      type: type,
      passProps:{rowData: rowData}
    })
  }

  renderRow(rowData){
    let rightRowView = [{
      component: <RightSwipeView navigator={navigator} rowData={rowData}/>,
      disabled: true,
      styleButton: { width: 100 }
    }];

    let leftRowView = [{
      text: 'Delete',
      backgroundColor: 'red'
    }]

    return (
      <Swipeout
        left={leftRowView}
        right={rightRowView}
        backgroundColor= 'transparent'
      >
        <TouchableHighlight
          onPress={this._rowPressed.bind(this, rowData, 'Modal')}
          underlayColor='#dddddd'
        >
          <View>
            <View style={styles.rowContainer}>
              <Image
                source={rowData.image}
                style={styles.thumb}
              />
              <View style={styles.textContainer}>
                <View>
                  <Text>{rowData.brand}</Text>
                  <Text>{rowData.style}</Text>
                  <Text>{rowData.size}</Text>
                  <Text>${rowData.price}</Text>
                </View>
                <View>
                  <Text>Info</Text>
                  <Text>Delete</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
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
    flexDirection: 'row',
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  thumb: {
    width: 175,
    height: 175,
    marginRight: 10
  }
});

export default FeedView
