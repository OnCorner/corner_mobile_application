'use strict';

import React, { Component } from 'react';
import Session from '../Modules/Session.js';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

import InputNormal from '../Elements/InputNormal'

class Sell extends Component {
  _navigate(route) {
    this.props._handleNavigate(route)
  }

  _addItem() {

  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>This is a sell page</Text>
        <InputNormal
          placeholder='Item name'
        />
        <InputNormal
          placeholder='Price'
        />
        <InputNormal
          placeholder='Description'
        />
        <InputNormal
          placeholder='Choose category'
        />
        <InputNormal
          placeholder='Choose tags'
        />
        <TouchableHighlight onPress={()=>this._addItem()}>
          <Text style={{color: 'black', fontSize: 17.2}}>Add Item</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    marginTop: 55
  }
});

export default Sell
