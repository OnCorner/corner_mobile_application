'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class RightSwipeView extends Component {

  _contactPressed(){
    console.log('CONTACT BUTTON HAS BEEN PRESSED')
  }

  _buyPressed(){
    console.log('BUY BUTTON HAS BEEN PRESSED')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.rowData.brand}</Text>
          <Text>{this.props.rowData.style}</Text>
          <Text>{this.props.rowData.size}</Text>
          <Text>${this.props.rowData.price}</Text>
        </View>
        <View>
          <TouchableHighlight underlayColor='#dddddd'
          onPress={this._contactPressed.bind(this)}
          >
            <Text>Contact</Text>
          </TouchableHighlight>
          <TouchableHighlight
          underlayColor='#dddddd'
           onPress={this._buyPressed.bind(this)}
          >
            <Text>Buy</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

export default RightSwipeView
