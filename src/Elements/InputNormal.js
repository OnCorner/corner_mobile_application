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
    onChangeText: React.PropTypes.func,
  }

  // chooseColor() {
  //   switch (this.props.color) {
  //     case "red":
  //       return "#FF8839";
  //       break;
  //     case "black":
  //       return "#F93822";
  //       break;
  //     default:
  //       return "#439FFF";
  //   }
  // }

  // _chooseType(event){
  //   console.log(event.target.value)
  //
  //   switch(this.props.placeholder){
  //     case "Username":
  //       this.props.actions.updateUsername(event.target.value)
  //       break
  //     case "Email":
  //       this.props.actions.updateEmail(event.target.value)
  //       break
  //     case "First Name":
  //       this.props.actions.updateFirstName(event.target.value)
  //       break
  //     case "Last Name":
  //       this.props.actions.updateLastName(event.target.value)
  //       break
  //     case "Password":
  //       this.props.actions.updatePassword(event.target.value)
  //       break
  //     default:
  //       break
  //   }
  // }

  render() {
    // var color = this.chooseColor();
    // var st = this.state;
    var pr = this.props;
    var style = pr.style;
    var value = pr.value

    return (
      <TextInput
        style={{fontWeight: 'bold', height: 20.5, color: '#999999'}}
        palceholderStyle={{fontWeight: 'bold'}}
        placeholderTextColor='#999999'
        placeholder={pr.placeholder}
        onChangeText={pr.onChangeText}
        value={value}
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
