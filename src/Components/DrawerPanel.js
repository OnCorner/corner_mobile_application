'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class DrawerPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is tha drawer </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default DrawerPanel
