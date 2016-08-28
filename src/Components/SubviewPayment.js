'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class SubviewPayment extends Component {
  constructor(props){
    super(props);

    this.state = {
      paymentText: 'Select',
      affirmText: 'Select',
      addressText: 'Select',
    };

    this._selectPayment = this._selectPayment.bind(this);
    this._selectAffirm = this._selectAffirm.bind(this);
    this._selectAddress = this._selectAddress.bind(this);
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

  render() {

    return (
      <View>
        <View style={{flexDirection: 'row',
            justifyContent: 'flex-end'}}
        >
          <TouchableHighlight
            onPress={this.props._buyPressed}
            style={{marginRight: 15, marginTop: 15}}
            underlayColor='transparent'
          >
            <Text style={{color: '#999999', fontSize: 13}}>X</Text>
          </TouchableHighlight>
        </View>
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
});

export default SubviewPayment
