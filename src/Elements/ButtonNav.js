'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class ButtonNav extends Component {
  static propTypes = {
    componentName: React.PropTypes.any,
    _handleNavigate: React.PropTypes.any,
    navKey: React.PropTypes.string,
    pageName: React.PropTypes.string,
    style: React.PropTypes.any
  }

  _navigate(route){
    this.props._handleNavigate(route)
  }

  render(){
    const route = {
      type: 'push',
      route: {
        key: this.props.navKey,
        title: this.props.pageName,
        component: this.props.componentName
      }
    }

    var pr = this.props;
    var st = this.state;
    var styles = pr.style;

    return(
      <TouchableHighlight onPress={() => this._navigate(route)}>
        <Text style={styles}>{pr.pageName}</Text>
      </TouchableHighlight>
    )
  }
}

export default ButtonNav
