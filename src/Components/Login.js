'use strict';

import React, { Component } from 'react';
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

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Login extends Component {
  _navigate(type='Normal'){
    console.log(this.props)
    this.props.navigator.replace({
      component: Home,
      type: type,
      name: 'Feed'
    })
  }

  _navigateRegister(type='Modal'){
    this.props.navigator.push({
      component: Register,
      type: type,
      name: 'Register'
    })
  }

  render() {
    return (
        <Image
          source={require('../img/elements/v2loginlogoonly.png')}
          style={styles.itemImage}
        >
          <View style={styles.container}>
            <InputNormal
              placeholder='Username'
            />

            <InputNormal
              placeholder='Password'
            />

            <TouchableHighlight onPress={()=>this._navigate()}>
              <Text style={{color: '#AAAAAA', fontSize: 17.2}}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={()=>this._navigateRegister()}
            >
              <Text style={{color: '#AAAAAA', fontSize: 17.2}}>Register</Text>
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

export default Login
