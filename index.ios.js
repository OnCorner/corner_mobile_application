'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

import Drawer from 'react-native-drawer'

import Login from './src/Components/Login'
import Discover from './src/Components/Discover'
import DrawerPanel from './src/Components/DrawerPanel'

class corner_mobile extends Component {
  constructor(){
    super()

    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer(){
    this._drawer.open()
  }

  renderScene(route, navigator){
    this._navigator = navigator

    return (
        <route.component navigator={navigator} {...route.passProps}/>
    )
  }

  configureScene(route, routeStack) {
    if(route.type === 'Modal'){
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }

  getNav = () => {
    return this._navigator
  }

  render() {

    return (
      <Drawer
        content={<DrawerPanel getNav={this.getNav}/>}
        openDrawerOffset={100}
        ref={(ref) => this._drawer = ref}
        type='static'
        tweenHandler={Drawer.tweenPresets.parallax}
        tapToClose
        acceptPan
        negotiatePan
      >
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{name: 'Login', component: Login}}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          style={styles.container}
          navigationBar={
            <Navigator.NavigationBar
              style={styles.navBar}
              routeMapper={NavigationBarRouteMapper(this.openDrawer)}
            />
          }
        />
      </Drawer>
    );
  }
}

var NavigationBarRouteMapper = openDrawer => ({
  LeftButton(route, navigator, index, navState){
    if(route.name == 'Login' || route.name == 'Interests'){
      return null
    }
    else if(route.name == 'Detail' || route.name == 'Register'){
      return(
        <TouchableHighlight
          onPress={()=>{
              if(index > 0){
                navigator.pop()
              }
            }
          }
        >
          <Text  style={styles.leftNavButtonImg}>X</Text>
        </TouchableHighlight>
      )
    }else{
      return(
        <TouchableHighlight
          onPress={()=>{openDrawer()}}
        >
          <Text style={styles.leftNavButtonImg}>○○○</Text>
        </TouchableHighlight>
      )
    }
  },

  RightButton(route, navigator, index, navState){
    if(route.name == 'Login' || route.name == 'Register'){
      return null
    }
    else if(route.name == 'Detail'){
      return(
        <TouchableHighlight>
          <Image source={require('./src/img/shareIcon.png')} style={styles.RightNavButtonImg}/>
        </TouchableHighlight>
      )
    }else if(route.name == 'Interests'){
      return(
        <TouchableHighlight onPress={()=>{
            route.name = 'Search'
          }
        }>
          <Image source={require('./src/img/searchIcon.png')} style={styles.RightNavButtonImg}/>
        </TouchableHighlight>
      )
    }else{
      return(
        <TouchableHighlight onPress={()=>
          navigator.push({
            component: Discover,
            type: 'Normal',
            name: 'Discover'
          })
        }>
          <Text style={styles.RightNavButtonImg}> Sell </Text>
        </TouchableHighlight>
      )
    }
  },

  Title(route, navigator, index, navState){
    if(route.name == 'Login' || route.name == 'Detail'){
      return null
    }else if(route.name == 'Search'){
      return (<Text style={styles.navBarTitle}> SEARCH BAR
      </Text>)
    }else{
      return (<Text style={styles.navBarTitle}> {route.name}
      </Text>)
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  navBar: {
    height: 55,
    backgroundColor: 'black'
  },
  transNavBar: {
    height: 55,
    backgroundColor: 'transparent'
  },
  navBarTitle: {
    marginTop: 1,
    marginRight: 211,
    fontSize: 15,
    color: '#999999'
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 2,
    color: 'white'
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight: 13,
    marginTop: 2,
    color: 'white'
  },
  leftNavButtonImg: {
    marginLeft: 18,
    width: 16,
    height: 35,
    color: '#999999',
    fontWeight: 'bold',
    fontSize: 8
  },
  RightNavButtonImg: {
    marginRight: 13,
    width: 27,
    color: 'black'
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 3
  }
});

AppRegistry.registerComponent('corner_mobile', () => corner_mobile);
