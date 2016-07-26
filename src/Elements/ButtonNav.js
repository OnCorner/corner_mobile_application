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
    navigator: React.PropTypes.any,
    pageName: React.PropTypes.string,
    style: React.PropTypes.object
  }

  _navigate(type='Normal'){
    this.props.navigator.replace({
      component: this.props.componentName,
      type: type,
      name: this.props.pageName
    })
  }

  render(){
    console.log(this.props.navigator)

    var pr = this.props;
    var st = this.state;
    var styles = pr.style;

    return(
      <TouchableHighlight onPress={() => this._navigate()}>
        <Text style={styles}>{pr.pageName}</Text>
      </TouchableHighlight>
    )
  }
}

export default ButtonNav
