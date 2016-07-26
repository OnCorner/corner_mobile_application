'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

class InputNormal extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    placeholder: React.PropTypes.string,
  }

  chooseColor() {
    switch (this.props.color) {
      case "red":
        return "#FF8839";
        break;
      case "black":
        return "#F93822";
        break;
      default:
        return "#439FFF";
    }
  }

  render() {
    var color = this.chooseColor();
    var pr = this.props;
    var st = this.state;
    var style = pr.style;

    return (
      <TextInput
        style={{fontWeight: 'bold', height: 20.5}}
        palceholderStyle={{fontWeight: 'bold'}}
        placeholderTextColor='#AAAAAA'
        placeholder={pr.placeholder}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
  }
});

export default InputNormal
