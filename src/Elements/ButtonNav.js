'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

class ButtonNav extends Component {
  static propTypes = {
    pageName: React.PropTypes.string,
    style: React.PropTypes.object,
    componentName: React.PropTypes.any.isRequired,
    navigator: React.PropTypes.any.isRequired
  }

  _navigate(type='Normal'){
    this.props.navigator.replace({
      component: this.props.componentName,
      type: type,
      name: this.props.pageName
    })
  }

  render(){
    var pr = this.props;
    var st = this.state;
    var styles = pr.style;

    return(
      <TouchableHighlight>
        <Text style={styles}>{pr.pageName}</Text>
      </TouchableHighlight>
    )
  }
}

export default ButtonNav
