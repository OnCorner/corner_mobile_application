'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from 'react-native';

var isHidden = true;

class SubviewOrder extends Component {
  constructor(props){
    super(props);

    this.state = {
      paymentText: 'Select',
      affirmText: 'Select',
      addressText: 'Select',
      //Where low it should initially start off with (Higher the lower the subview starts)
      bounceValue: new Animated.Value(179),
    };

    this._selectPayment = this._selectPayment.bind(this);
    this._selectAffirm = this._selectAffirm.bind(this);
    this._selectAddress = this._selectAddress.bind(this);
    this._showSubView = this._showSubView.bind(this);
  }

  _selectPayment() {
    if(this.state.paymentText == 'Select') {
      this.setState({
        paymentText: 'Selected'
      })
    } else {
      this.setState({
        paymentText: 'Select'
      })
    }

    this._showSubView()
  }

  _selectAffirm() {
    if(this.state.affirmText == 'Select') {
      this.setState({
        affirmText: 'Selected'
      })
    } else {
      this.setState({
        affirmText: 'Select'
      })
    }
  }

  _selectAddress() {
    if(this.state.addressText == 'Select') {
      this.setState({
        addressText: 'Selected'
      })
    } else {
      this.setState({
        addressText: 'Select'
      })
    }
  }

  _showSubView() {
    //Speed of animation (To what point it goes down to)
    var toValue = 179;

    if(isHidden) {
      toValue = 0;
    }

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 50,
        friction: 10,
      }
    ).start();

    isHidden = !isHidden;
  }

  render() {

    return (
      <View>
        <TouchableHighlight
          onPress={this.props._buyPressed}
          style={{marginLeft: 15, marginTop: 9.5, marginBottom: 3.5}}
          underlayColor='transparent'
        >
          <Text style={{color: '#dddddd', fontSize: 13}}>X</Text>
        </TouchableHighlight>

        <View style={{paddingLeft: 15, paddingRight: 15}}>
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.paymentText}>Payment</Text>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                style={{marginRight: 15}}
              >
                <Text style={styles.editButton}>+</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._selectPayment}
              >
                <Text style={styles.paymentSelectButton}>{this.state.paymentText}</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.separator}/>
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.paymentText}>Affirm</Text>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                style={{marginRight: 15}}
              >
                <Text style={styles.editButton}>+</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._selectAffirm}
              >
                <Text style={styles.paymentSelectButton}>{this.state.affirmText}</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.separator}/>
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.paymentText}>Address</Text>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor='transparent'
                style={{marginRight: 15}}
              >
                <Text style={styles.editButton}>+</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._selectAddress}
              >
                <Text style={styles.paymentSelectButton}>{this.state.addressText}</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.bottomSeparator}/>
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.paymentText}>Total <Text style={{ color: '#AD985E', fontSize: 13, fontFamily: 'Helvetica Neue' }}>$275 USD (with shipping)</Text></Text>
            <TouchableHighlight
              style={styles.completeButton}
              underlayColor='transparent'
            >
              <Text style={styles.completeButtonText}>Complete</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Animated.View
          style={[styles.subView,
            {transform: [{translateY: this.state.bounceValue}]}]}
        >
          <View>
            <TouchableHighlight
              onPress={this._showSubView}
              style={{marginLeft: 15, marginTop: 9.5, marginBottom: 3.5}}
              underlayColor='transparent'
            >
              <Text style={{color: 'black', fontSize: 13}}>X</Text>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    backgroundColor: 'black',
    marginTop: 3,
    marginBottom: 3,
  },
  bottomSeparator: {
    height: 0.5,
    backgroundColor: '#dddddd',
    marginTop: 6.5,
    marginBottom: 9.5,
  },
  paymentText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
  },
  completeButton: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  completeButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  paymentSelectButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  affirmSelectButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  addressSelectButton: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  editButton: {
    color: '#999999',
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'pink',
    height: 167,
    flex: 1,
  },
});

export default SubviewOrder
