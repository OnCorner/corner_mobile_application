'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
 TouchableOpacity,
  View,
} = ReactNative;

const ShopTabBarButton = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
};

module.exports = ShopTabBarButton;
