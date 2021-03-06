import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Navigator,
  TouchableHighlight,
  Image,
  BackAndroid,
  NavigationExperimental
} from 'react-native'
import Drawer from 'react-native-drawer'

import Login from './Login'
import Home from './Home'
import DrawerPanel from './DrawerPanel'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental

class NavRoot extends Component {
  constructor(props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene

    console.log('REGISTER START')
    console.log(this.props)
    console.log('REGISTER END')

    return (
      <route.component _handleNavigate={this._handleNavigate.bind(this)} {...route.passProps} actions={this.props}/>
    )
  }

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }

  _handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }

  renderOverlay = (sceneProps) => {
    console.log(sceneProps)
    console.log('This is next props')
    console.log(this.props)

    if(0 < sceneProps.scene.index)
    {
      return (
        <NavigationHeader
          {...sceneProps}
          // onNavigateBack={
          //   sceneProps.scene.route.title == 'ItemDetail' ? () => this._handleBackAction() : null
          // }
          renderLeftComponent={() => {
            switch(sceneProps.scene.route.title){
              case 'ItemDetail':
                return (
                  <TouchableHighlight onPress={() => this._handleBackAction()}>
                    <Text style={styles.leftNavButtonImg}>X</Text>
                  </TouchableHighlight>
                )
              case 'Group':
                return (
                  <TouchableHighlight onPress={() => this._handleBackAction()}>
                    <Text style={styles.leftNavButtonImg}>X</Text>
                  </TouchableHighlight>
                )
              case 'Register':
                return (
                  <TouchableHighlight onPress={() => this._handleBackAction()}>
                    <Text style={styles.leftNavButtonImg}>X</Text>
                  </TouchableHighlight>
                )
              case 'Interest':
                return null
              default:
                return (
                  <TouchableHighlight onPress={() => this._drawer.open()}>
                    <Text style={styles.leftNavButtonImg}>○○○</Text>
                  </TouchableHighlight>
                )
              }
            }
          }
          renderTitleComponent={() => {
              switch(sceneProps.scene.route.title){
                case 'ItemDetail':
                  return null
                default:
                  return (
                    <NavigationHeader.Title textStyle={styles.navBarTitle}>
                      {sceneProps.scene.route.title}
                    </NavigationHeader.Title>
                  )
              }
            }
          }
          style={sceneProps.scene.route.title ==  'ItemDetail' || sceneProps.scene.route.title == 'Register' ?
            styles.transHeader :
            styles.header
          }
        />
      )
    }
  }


  render() {
    return (
      <Drawer
        content={<DrawerPanel _handleNavigate={this._handleNavigate.bind(this)}/>}
        openDrawerOffset={100}
        ref={(ref) => this._drawer = ref}
        type='static'
        tweenHandler={Drawer.tweenPresets.parallax}
        tapToClose
        acceptPan
        negotiatePan
      >
        <NavigationCardStack
          direction='horizontal'
          navigationState={this.props.navigation}
          onNavigate={this._handleNavigate.bind(this)}
          renderScene={this._renderScene}
          renderOverlay={this.renderOverlay}
          style={styles.container}
        />
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'black',
    height: 55
  },
  transHeader: {
    backgroundColor: 'transparent',
    height: 55,
    borderBottomWidth: 0
  },
  leftNavButtonImg: {
    marginLeft: 18,
    width: 16,
    height: 35,
    color: '#999999',
    fontWeight: 'bold',
    fontSize: 8
  },
  navBarTitle: {
    marginBottom: 15,
    marginRight: 211,
    fontSize: 15,
    color: '#999999',
    width: 62
  },
})

export default NavRoot
