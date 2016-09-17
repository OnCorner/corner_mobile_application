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

import Session from '../Modules/Session'
import Interest from './Interest'
import InputNormal from '../Elements/InputNormal'

var width = Dimensions.get('window').width * .50;

export default class Register extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    // this.state = {items:[]};
    this._signUp = this._signUp.bind(this);
    this._handleCurrentUsername = this._handleCurrentUsername.bind(this);
    this._handleCurrentEmail = this._handleCurrentEmail.bind(this);
    this._handleCurrentFirstName = this._handleCurrentFirstName.bind(this);
    this._handleCurrentLastName = this._handleCurrentLastName.bind(this);
    this._handleCurrentPassword = this._handleCurrentPassword.bind(this);

    this.route = {
      interest: {
        type: 'push',
        route: {
          key: 'interest',
          title: 'Interest',
          component: Interest,
          direction: 'horizontal'
        }
      }
    }
  }

  // _navigate(type='Normal'){
  //   this.props.navigator.push({
  //     component: Interest,
  //     name: 'Interests',
  //     type: type
  //   })
  // }

  componentDidMount() {
  }

  _signUp(user) {
    console.log("this.props.actions", this.props.actions);
    this.props.signUp(user)
    .then((newUser) => {
      Session.user = newUser;
      this._navigate(this.route.interest, newUser)
    });
  }

  _handleCurrentUsername(text) {
    console.log("this.props", this.props);
    this.props.setUsername(text)
  }

  _handleCurrentPassword(text) {
    this.props.setPassword(text)
  }

  _handleCurrentEmail(text) {
    this.props.setEmail(text)
  }

  _handleCurrentFirstName(text) {
    this.props.setFirstName(text)
  }

  _handleCurrentLastName(text) {
    this.props.setLastName(text)
  }

  _navigate(route) {
    this.props.registerUser(this.props.user)
    this.props._handleNavigate(route)
  }

  render() {
    console.log('this.props.actions.user', this.props.user)

    var user = this.props.user;
    console.log("register user", user);

    return (
      <View style={styles.container}>
        <View style={styles.registerSheet}>

          <InputNormal
            placeholder='Username'
            onChangeText={this._handleCurrentUsername}
            value={user.username}
          />

          <InputNormal
            placeholder='Password'
            onChangeText={this._handleCurrentPassword}
            value={user.password}
            secureTextEntry
          />

          <InputNormal
            placeholder='Email'
            onChangeText={this._handleCurrentEmail}
            value={user.email}
          />

          <InputNormal
            placeholder='First Name'
            onChangeText={this._handleCurrentFirstName}
            value={user.firstName}
          />

          <InputNormal
            placeholder='Last Name'
            onChangeText={this._handleCurrentLastName}
            value={user.lastName}
          />

          <TouchableHighlight onPress={this._signUp(user)}>
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
