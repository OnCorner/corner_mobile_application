'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

class InputNumberPad extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    placeholder: React.PropTypes.string,
    onChangeText: React.PropTypes.func,
  }

  render() {
    var pr = this.props;
    var style = pr.style;
    var value = pr.value

    return (
      <TextInput
        keyboardType='number-pad'
        style={{fontWeight: 'bold', height: 20.5, color: '#999999'}}
        placeholderStyle={{fontWeight: 'bold'}}
        placeholderTextColor='#999999'
        placeholder={pr.placeholder}
        onChangeText={pr.onChangeText}
        value={value}
      />
    );
  }
}

export default InputNumberPad
