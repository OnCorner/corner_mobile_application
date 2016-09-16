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
  Dimensions,
  Switch
} from 'react-native';

import InputNormal from '../Elements/InputNormal'
import InputNumberPad from '../Elements/InputNumberPad'

const currentInfo = {
  group: '',
  quantity: null,
  condition: '',
  acceptingOffer: null,
  price: null,
  location: null,
  meetUp: null,
  shipping: null,
  freeShipping: null,
}

class Sell extends Component {
  constructor(props) {
    super(props)
    console.log('WHAT IS THIS')
    console.log(props)

    this.state = {
      avatarSource: "",
    }

    // this._addItem = this._addItem.bind(this)
    this._handleGroup = this._handleGroup.bind(this)
    this._handleQuantity = this._handleQuantity.bind(this)
    this._handleCondition = this._handleCondition.bind(this)
    this._handlePrice = this._handlePrice.bind(this)
    this._handleAcceptOffer = this._handleAcceptOffer.bind(this)
    this._handleLocation = this._handleLocation.bind(this)
    this._handleMeetUp = this._handleMeetUp.bind(this)
    this._handleShipping = this._handleShipping.bind(this)
    this._handleFreeShipping = this._handleFreeShipping.bind(this)
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

  _handleGroup(text) {
    currentInfo.group = text
    this.props.itemGroup(text)
  }

  _handleQuantity(value) {
    currentInfo.quantity = value
    this.props.itemQuantity(value)
  }

  _handleCondition(text) {
    currentInfo.condition = text
    this.props.itemCondition(text)
  }

  _handlePrice(value) {
    currentInfo.acceptingOffer = value
    this.props.itemPrice(value)
  }

  _handleAcceptOffer(value) {
    currentInfo.price = value
    this.props.itemAcceptingOffer(value)
  }

  _handleLocation(value) {
    currentInfo.location = value
    this.props.itemLocation(value)
  }

  _handleMeetUp(value) {
    currentInfo.meetUp = value
    this.props.itemMeetUp(value)
  }

  _handleShipping(value) {
    currentInfo.shipping = value
    this.props.itemShipping(value)
  }

  _handleFreeShipping(value) {
    currentInfo.freeShipping = value
    this.props.itemFreeShipping(value)
  }

  _addItem() {
    console.log(currentInfo)
    this.props.createItem(currentInfo)
  }

  componentWillReceiveProps(props) {
    console.log('THIS IS ONLY FOR TESTING')
    console.log(props)
  }

  render() {
    // console.log('INNER STARTING PROPS')
    // console.log(this.props)
    // console.log('INNER ENDING PROPS')
    var itemInfo = this.props.itemInfo

    console.log('THIS IS PROPS FOR IMAGE')
    console.log(this.props)

    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this._selectPhotos}>
          <Text style={styles.button}>Add Image</Text>
        </TouchableHighlight>
        <InputNormal
          placeholder='Group'
          onChangeText={this._handleGroup}
          value={itemInfo.group}
        />

        <InputNumberPad
          placeholder='Quantity'
          onChangeText={this._handleQuantity}
          value={itemInfo.quantity}
        />

        <InputNormal
          placeholder='Condition'
          onChangeText={this._handleCondition}
          value={itemInfo.condition}
        />

        <InputNumberPad
          placeholder='Price'
          onChangeText={this._handlePrice}
          value={itemInfo.price}
        />

        <Text style={{color: 'black'}}>Accepting Offers</Text>
        <Switch
          onValueChange={this._handleAcceptOffer}
          value={itemInfo.acceptOffer}
        />

        <InputNumberPad
          placeholder='My Location'
          onChangeText={this._handleLocation}
          value={itemInfo.location}
        />

        <Text style={{color: 'black'}}>Meet Up</Text>
        <Switch
          onValueChange={this._handleMeetUp}
          value={itemInfo.meetUp}
        />

        <Text style={{color: 'black'}}>Shipping</Text>
        <Switch
          onValueChange={this._handleShipping}
          value={itemInfo.shipping}
        />

        <Text style={{color: 'black'}}>Free Shipping</Text>
        <Switch
          onValueChange={this._handleFreeShipping}
          value={itemInfo.freeShipping}
        />

        <TouchableHighlight onPress={()=>this._addItem(this.props.itemInfo)}>
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
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AAAAAA'
  },
});

export default Sell
