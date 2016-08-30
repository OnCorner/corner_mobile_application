'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
var Platform = require('react-native').Platform;

import ImagePicker from 'react-native-image-picker';

import ButtonNav from '../Elements/ButtonNav'
import Home from './Home'
import Shop from './Shop'
import Discover from './Discover'
import Sell from './Sell'

var options = {
  title: 'Select Avatar',
  customButtons: {
    'Choose Photo from Facebook': 'fb',
  },
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class DrawerPanel extends Component {
  constructor() {
    super();
    this.state = {
      avatarSource: ""
    }

    this._selectPhotos = this._selectPhotos.bind(this);
  }

  _selectPhotos() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.props.storeImage(source);
      }
    });
  }

  render() {
    console.log(this.props)
    var pr = this.props

    console.log("no prev this.props", pr)
    console.log(pr.image.image)

    return (
      <View style={styles.container}>
        <ButtonNav
          componentName={Home}
          _handleNavigate={pr._handleNavigate}
          navKey='home'
          pageName='Home'
          style={styles.button}
        />
        <ButtonNav
          componentName={Shop}
          _handleNavigate={pr._handleNavigate}
          navKey='shop'
          pageName='Shop'
          style={styles.button}
        />
        <ButtonNav
          componentName={Discover}
          _handleNavigate={pr._handleNavigate}
          navKey='discover'
          pageName='Discover'
          style={styles.button}
        />
        <ButtonNav
          componentName={Sell}
          _handleNavigate={pr._handleNavigate}
          navKey='sell'
          pageName='Sell'
          style={styles.button}
        />
        <TouchableHighlight onPress={this._selectPhotos}>
          <Text style={styles.button}>Sell</Text>
        </TouchableHighlight>
        <Image source={pr.image.image} style={styles.uploadAvatar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black'
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AAAAAA'
  },
  uploadAvatar: {
    height: 100,
    width: 100,
  }
});

export default DrawerPanel
