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

export default class Sell extends Component {
  constructor(props) {
    super(props)

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

    return (
      <View style={styles.container}>
        <InputNormal
          placeholder='Group'
          onChangeText={this._handleGroup}
          value={itemInfo.group}
        />

        <InputNormal
          placeholder='Quantity'
          keyboardType="number-pad"
          onChangeText={this._handleQuantity}
          value={itemInfo.quantity}
        />

        <InputNormal
          placeholder='Condition'
          onChangeText={this._handleCondition}
          value={itemInfo.condition}
        />

        <InputNormal
          placeholder='Price'
          keyboardType="number-pad"
          onChangeText={this._handlePrice}
          value={itemInfo.price}
        />

        <Text style={{color: 'black'}}>Accepting Offers</Text>
        <Switch
          onValueChange={this._handleAcceptOffer}
          value={itemInfo.acceptOffer}
        />

        <InputNormal
          placeholder='My Location'
          keyboardType="number-pad"
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
  }
});
