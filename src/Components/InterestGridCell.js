'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


class InterestGridCell extends Component {
  constructor(props){
    super(props);
    this.state={
      selected: false
    }
  }

  render() {
    const { rowData } = this.props;
    return (
      <View style={this.state.selected ? styles.transItem : styles.opacItem}>
        <TouchableHighlight
          onPress={() => { this.setState({selected: !this.state.selected})}}
          underlayColor='transparent'
        >
          <View>
            <Image source={rowData.image} style={styles.groupImage}>
              {this.state.selected ?
                <View style={styles.selectedView}>
                  <Text style={styles.selectedText}>Selected</Text>
                </View>
                :
                null
              }
            </Image>
            <Text  style={styles.brandText}>{rowData.brand}</Text>
            <Text style={styles.styleText}>{rowData.style}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupImage: {
    width: 155,
    height: 155
  },
  opacItem: {
    margin: 15,
    width: 155,
    opacity: 1.0
  },
  transItem: {
    margin: 15,
    width: 155,
    opacity: 0.7
  },
  selectedView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  selectedText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#999999'
  },
  brandText: {
    color: '#AD985E',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15
  },
  styleText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default InterestGridCell
