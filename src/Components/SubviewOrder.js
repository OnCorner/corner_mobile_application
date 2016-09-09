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
      paymentSelect: false,
      addressSelect: false,
      affirmSelect: false,
    };

    this._selectPayment = this._selectPayment.bind(this);
    this._selectAffirm = this._selectAffirm.bind(this);
    this._selectAddress = this._selectAddress.bind(this);
  }

  _selectPayment() {
    this.props._paymentPressed()

    this.setState({
      paymentSelect: !this.state.paymentSelect
    })
  }

  _selectAffirm() {
    this.setState({
      affirmSelect: !this.state.affirmSelect
    })
  }

  _selectAddress() {
    this.setState({
      addressSelect: !this.state.addressSelect
    })
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
              <Text style={styles.ccText}>
              Visa **** 1234
              </Text>
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
                <View style={{
                    height: 23,
                    width: 23,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#999999',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {
                    this.state.paymentSelect ?
                      <View style={{
                          height: 15,
                          width: 15,
                          borderRadius: 8,
                          backgroundColor: '#999999',
                        }}
                      />
                    : null
                  }
                </View>
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
              <Text style={styles.affirmText}>
                <Text style={{fontWeight: 'bold'}}>
                  Monthly Payment •
                </Text> $12.60/mo
              </Text>
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
                <View style={{
                    height: 23,
                    width: 23,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#999999',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {
                    this.state.affirmSelect ?
                      <View style={{
                          height: 15,
                          width: 15,
                          borderRadius: 8,
                          backgroundColor: '#999999',
                        }}
                      />
                    : null
                  }
                </View>
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
              <Text style={styles.addressText}>
              1 Ugleman, 90007
              </Text>
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
                <View style={{
                    height: 23,
                    width: 23,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#999999',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {
                    this.state.addressSelect ?
                      <View style={{
                          height: 15,
                          width: 15,
                          borderRadius: 8,
                          backgroundColor: '#999999',
                        }}
                      />
                    : null
                  }
                </View>
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
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'pink',
    height: 167,
    flex: 1,
  },
  addressText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  affirmText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  ccText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
});

export default SubviewOrder
