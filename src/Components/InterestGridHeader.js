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

import Home from './Home'

var width = Dimensions.get('window').width * .50;

const route = {
  home: {
    type: 'push',
    route: {
      key: 'home',
      title: 'Home',
      component: Home
    }
  }
}

class InterestGridHeader extends Component {
  _navigate(route){
    this.props._handleNavigate(route)
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Select 3 groups from our suggestions to begin
          </Text>
          <TouchableHighlight
            onPress={()=>this._navigate(route.home)}
            underlayColor='transparent'
          >
            <Text style={styles.goButton}>LIFT OFF!</Text>
          </TouchableHighlight>
          <Text style={styles.subTitleText}>Featured</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15
  },
  title: {
    width: width
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginBottom: 15
  },
  goButton: {
    color: '#AD985E',
    fontSize: 22,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 30
  },
  subTitleText: {
    color: '#999999',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default InterestGridHeader
