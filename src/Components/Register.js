'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Interest from './Interest'
import InputNormal from '../Elements/InputNormal'

var width = Dimensions.get('window').width * .50;

const route = {
  interest: {
    type: 'push',
    route: {
      key: 'interest',
      title: 'Interest',
      component: Interest,
      direction: 'horizontal',
    }
  }
}

const currentInfo = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

class Register extends Component {
  constructor(){
    super();
    // this.state = {items:[]};
    this._handleCurrentUsername = this._handleCurrentUsername.bind(this);
    this._handleCurrentEmail = this._handleCurrentEmail.bind(this);
    this._handleCurrentFirstName = this._handleCurrentFirstName.bind(this);
    this._handleCurrentLastName = this._handleCurrentLastName.bind(this);
    this._handleCurrentPassword= this._handleCurrentPassword.bind(this);
  }

  // _navigate(type='Normal'){
  //   this.props.navigator.push({
  //     component: Interest,
  //     name: 'Interests',
  //     type: type
  //   })
  // }

  _handleCurrentUsername(text) {
    currentInfo.username = text
    console.log(currentInfo)
    this.props.actions.updateUsername(text)
  }

  _handleCurrentEmail(text) {
    currentInfo.email = text
    this.props.actions.updateEmail(text)
  }

  _handleCurrentFirstName(text) {
    currentInfo.firstName = text
    this.props.actions.updateFirstName(text)
  }

  _handleCurrentLastName(text) {
    currentInfo.lastName = text
    this.props.actions.updateLastName(text)
  }


  _handleCurrentPassword(text) {
    currentInfo.password = text
    this.props.actions.updatePassword(text)
  }

  _navigate(route) {
    console.log(currentInfo)
    this.props.actions.registerUser(currentInfo)
    this.props._handleNavigate(route)
  }

  render() {
    console.log('LOGGING START')
    console.log(this.props)
    console.log('LOGGING END')

    var userInfo = this.props.actions.userInfo.userInfo

    console.log('NEW VAR')
    console.log(userInfo)
    console.log('END VAR')

    return (
      <View style={styles.container}>
        <View style={styles.registerSheet}>

          <InputNormal
            placeholder='Username'
            onChangeText={this._handleCurrentUsername}
            value={userInfo.username}
          />

          <InputNormal
            placeholder='Email'
            onChangeText={this._handleCurrentEmail}
            value={userInfo.email}
          />

          <InputNormal
            placeholder='First Name'
            onChangeText={this._handleCurrentFirstName}
            value={userInfo.firstName}
          />

          <InputNormal
            placeholder='Last Name'
            onChangeText={this._handleCurrentLastName}
            value={userInfo.lastName}
          />

          <InputNormal
            placeholder='Password'
            onChangeText={this._handleCurrentPassword}
            value={userInfo.password}
          />

          <TouchableHighlight onPress={()=>this._navigate(route.interest, userInfo)}>
            <Text style={styles.continueButton}>Continue</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Terms</Text>
          <Text style={styles.termsText}>By continuing, you agree to our terms of service and private policy</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  registerSheet: {
    marginLeft: 78,
    marginTop: 83
  },
  continueButton: {
    color: '#999999',
    fontSize: 17.2
  },
  termsContainer: {
    marginBottom: 15,
    marginLeft: 15,
    width: width
  },
  termsTitle: {
    fontWeight: 'bold',
    color: '#AD985E',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  termsText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default Register
