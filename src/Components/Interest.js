'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

import Home from './Home'
import InterestGridCell from './InterestGridCell'
import InterestGridHeader from './InterestGridHeader'

class Interest extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
      dataSource: ds.cloneWithRows([
      {style: 'Shoes', brand: 'Jordan', image: require('../img/jordanGroup.jpeg')},
      {style: 'Artwork', brand: 'Streetart', image: require('../img/kawsGroup.jpg')},
      {style: 'Cars', brand: 'Lamborghini', image: require('../img/lamboGroup.jpg')},
      {style: 'Clothing', brand: 'Supreme', image: require('../img/supremeGroup.jpeg')},
      {style: 'Accessories', brand: 'waer', image: require('../img/rolexGroup.jpg')},
      {style: 'Accessories', brand: 'ti', image: require('../img/chainGroup.jpg')},
      {style: 'shoes', brand: 'diamonds'},
      {style: 'shoes', brand: 'dancin'},
      {style: 'shoes', brand: 'getit'}])
    };
  }

  renderRow(rowData){
    return (
      <InterestGridCell rowData={rowData} />
    )
  }

  renderHeader(){
    return(
      <InterestGridHeader _handleNavigate={this.props._handleNavigate}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
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
  }
});

export default Interest
