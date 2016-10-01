'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Session from '../Modules/Session.js';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

import Home from './Home'
import Register from './Register'
import InputNormal from '../Elements/InputNormal'
import Style from '../Modules/Style'

class Login extends Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;

    this.route = {
      home: {
        type: 'push',
        route: {
          key: 'home',
          title: 'Home',
          component: Home,
          direction: 'horizontal',
        }
      },

      register: {
        type: 'push',
        route: {
          key: 'register',
          title: 'Register',
          component: Register,
          direction: 'vertical',
        }
      }
    }
  }

  componentWillMount() {
    console.log("this.props", this.props);
  }

  componentDidMount() {
    console.log("this.props", this.props);
  }

  componentWillReceiveProps(newProps) {
    console.log("newProps>>>>>>>", newProps);
  }

  _navigate(route) {
    this.props._handleNavigate(route)
  }

  // _navigateRegister(type='Modal') {
  //   this.props.navigator.push({
  //     component: Register,
  //     type: type,
  //     name: 'Register'
  //   })
  // }

  _handleCurrentUsername(text) {
    console.log("here", this.props);
    this.props.dispatch(this.props.setUsername(text));
  }

  _handleCurrentPassword(text) {
    this.props.setPassword(text)
  }

  render() {
    console.log("this.props", this.props);
    var user = this.props.user

    return (
      <Image
        source={require('../img/elements/v2loginlogoonly.png')}
        style={styles.itemImage}
      >
        <View style={styles.container}>
          <InputNormal
            placeholder='Username'
            onChangeText={this._handleCurrentUsername.bind(this)}
            value={user.username}
          />

          <InputNormal
            placeholder='Password'
            onChangeText={this._handleCurrentPassword.bind(this)}
            value={user.password}
            secureTextEntry
          />

          <TouchableHighlight onPress={()=>this._navigate(this.route.home)}>
            <Text style={Style.text1}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={()=>this._navigate(this.route.register)}
          >
            <Text style={{color: '#999999', fontSize: 17.2}}>Register</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 78,
    marginTop: 83
  },
  itemImage: {
    flex: 1,
    width: null,
    height: null
  },
  logo: {
    padding: 30
  }
});

export default connect()(Login)
