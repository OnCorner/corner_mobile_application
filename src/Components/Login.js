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
  Dimensions
} from 'react-native';

import Home from './Home'
import Register from './Register'
import InputNormal from '../Elements/InputNormal'
import Style from '../Modules/Style'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const route = {
  home: {
    type: 'push',
    route: {
      key: 'home',
      title: 'Home',
      component: Home
    }
  },

  register: {
    type: 'push',
    route: {
      key: 'register',
      title: 'Register',
      component: Register
    }
  }
}

class Login extends Component {
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

  _connectDB() {
    var data = {
      email: "b@b",
      password: '456',
      username: 'haro',
      firstName: 'jo',
      lastName: 'mo'
    }

    var myInit = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
    };

    fetch('http://localhost:1337/user/create/', myInit)
    .then(result=>result.json())
    .then(user=>{
      console.log(user);
      Session.user = user;
    })
    .done(()=>{
      myInit = { method: 'GET',
                 mode: 'cors'};

      fetch('http://localhost:1337/user/find/', myInit)
      .then(result=>result.json())
      .then(users=>{
        console.log(users);
      });
    })
  }

  render() {
    console.log(Style)

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

            <TouchableHighlight onPress={()=>this._navigate(route.home)}>
              <Text style={Style.text1}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={()=>this._navigate(route.register)}
            >
              <Text style={{color: '#999999', fontSize: 17.2}}>Register</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>this._connectDB()}>
              <Text style={{color: '#999999', fontSize: 17.2}}>Connect</Text>
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
