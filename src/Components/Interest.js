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
import InterestCell from './InterestCell'

class Interest extends Component {
  constructor(props){
    super(props);

    this._renderRow = this._renderRow.bind(this);

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

  _renderRow(rowData){
    return (
      <InterestCell rowData={rowData} />
    )
  }

  _goPressed(type='Normal'){
    this.props.navigator.replace({
      component: Home,
      type: type,
      name: 'Feed'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Select 3 groups from our suggestions to kick off!
          </Text>
          <Text/>
            <TouchableHighlight
              onPress={()=>this._goPressed()}
              style={{width:27}}
              underlayColor='transparent'
            >
              <Text style={styles.goButton}>Go!</Text>
            </TouchableHighlight>
          <Text/>
          <Text style={styles.subTitleText}>Featured</Text>
        </View>

        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 70,
    marginLeft: 15,
    marginBottom: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 17,
    width: 200
  },
  goButton: {
    color: 'black',
    fontSize: 17
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subTitleText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  groupDetail: {
    width: 60,
    marginLeft: 15
  }
});

export default Interest
