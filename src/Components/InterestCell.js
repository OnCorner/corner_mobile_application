'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


class InterestCell extends Component {
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
          onPress={ () => { this.setState({selected: !this.state.selected})}} underlayColor='transparent'>
          <View>
            <Image source={rowData.image} style={styles.groupImage}>
              {this.state.selected ?              <View style={styles.selectedView}>
                <Text style={styles.selectedText}>Selected</Text>
              </View> : null
              }
            </Image>
            <Text>{rowData.brand}</Text>
            <Text>{rowData.style}</Text>
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
    height: 175,
    opacity: 1.0
  },
  transItem: {
    margin: 15,
    width: 155,
    height: 175,
    opacity: 0.7
  },
  selectedView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  selectedText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 27
  }
});

export default InterestCell
