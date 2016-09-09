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
      ccSelect: false,
    }

    this._selectPayPal = this._selectPayPal.bind(this);
    this._selectCC = this._selectCC.bind(this);
  }

  _selectPayPal() {
    console.log('PayPal button has been pressed')
  }

  _selectCC() {
    this.setState({
      ccSelect: !this.state.ccSelect
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props._paymentPressed}
          style={{marginLeft: 15, marginTop: 9.5, marginBottom: 3.5}}
          underlayColor='transparent'
        >
          <Text style={{color: 'white', fontSize: 13}}>X</Text>
        </TouchableHighlight>


        <View style={{paddingLeft: 15, paddingRight: 15}}>
          {/*PAYPAL PAYMENT ROW*/}
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.labelText}>PayPal</Text>
            <TouchableHighlight
              onPress={this._selectPayPal}
              style={styles.payPalButton}
              underlayColor='transparent'
            >
              <Text style={styles.payPalButtonText}>Log In</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.separator}/>
          {/*CREDIT CARD ROW*/}
          <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.labelText}>Credit Card</Text>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.ccText}>
                Visa **** 1234
              </Text>
              <TouchableHighlight
                underlayColor='transparent'
                onPress={this._selectCC}
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
                    this.state.ccSelect ?
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
        </View>
        {/*SELECTED PAYMENT*/}
        <View style={styles.paymentDisplaySection}>
        {
          this.state.ccSelect ?
            <Text style={styles.labelText}>
              Visa **** 1234
              <Text style={{fontSize: 20, color: 'green'}}>
              ✓
              </Text>
            </Text>
          : null
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomSeparator: {
    height: 0.5,
    backgroundColor: '#dddddd',
    marginTop: 6.5,
    marginBottom: 9.5,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'black',
    marginTop: 3,
    marginBottom: 3,
  },
  labelText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
  },
  ccText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
    marginRight: 15
  },
  payPalButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999999',
    height: 25,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },
  payPalButtonText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue',
  },
  paymentDisplaySection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubviewPayment
