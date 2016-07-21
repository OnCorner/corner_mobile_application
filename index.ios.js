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

  openDrawer(){
    this._drawer.open()
  }

  renderScene(route, navigator){
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

  render() {
    return (
      <Drawer
        content={<DrawerPanel/>}
        openDrawerOffset={100}
        ref={(ref) => this._drawer = ref}
        type='static'
        tweenHandler={Drawer.tweenPresets.parallax}
      >
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{name: 'Login', component: Login}}
          renderScene={this.renderScene}
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
          <Image source={require('./src/img/deleteIcon.png')} style={styles.leftNavButtonImg}/>
        </TouchableHighlight>
      )
    }else{
      console.log(openDrawer)

      return(
        <TouchableHighlight
          onPress={()=>{openDrawer}}
        >
          <Image source={require('./src/img/listIcon.png')} style={styles.leftNavButtonImg}/>
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
          <Image source={require('./src/img/sellIcon.png')} style={styles.RightNavButtonImg}/>
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
    backgroundColor: 'white'
  },
  navBar: {
    height: 60,
    backgroundColor: 'white'
  },
  navBarTitle: {
    marginTop: 4,
    marginRight: 190,
    fontSize: 20,
    color: 'black'

  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft: 13,
    marginTop: 2,
    color: 'black'
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight: 13,
    marginTop: 2,
    color: 'black'
  },
  leftNavButtonImg: {
    marginLeft: 13,
    marginTop: 2,
    width: 27,
    height: 27
  },
  RightNavButtonImg: {
    marginRight: 13,
    marginTop: 2,
    width: 27,
    height: 27
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
