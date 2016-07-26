'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image,
  Dimensions
} from 'react-native';

import ItemDetail from './ItemDetail'
import RightSwipeView from './RightSwipeView'
import FeedViewRow from './FeedViewRow'

var height = Dimensions.get('window').height;

class FeedView extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {dataSource: ds.cloneWithRows([
      {brand: 'Gosha Rubchinskiy', style: 'Classic Short Sleeve', size: 'OS', price:500, image: require('../img/item3.jpg'), image2: require('../img/item2.jpg'), image3: require('../img/item5.jpg'), detail:'Super clean worn handful of times ', username: 'haru_jsb', category: 'Shirts', timeStamp:'2m'},

      {brand: 'CAV EMPT', style: 'Noizig Shirt', size: '7', price:650, image:require('../img/item5.jpg'), detail:'TAG SIZE: S. Fits Larger. Perfect for 48 size. Easily fit for 50!', username: 'julzzang', category: 'Shoes', timeStamp:'15h'},

      {brand: 'Berluti', style: 'Striped L/S Shirt', size: 'L', price:250, image: require('../img/item1.jpg'), detail:'This is a vintage beauty with a little wear but still in great shape.', username: 'suzhe012', category: 'Cars', timeStamp:'50s'},

      {brand: 'Raf Simons', style: 'Paint Splash Sidezips', size: 'M', price:400, image: require('../img/item7.jpg'), detail:'Undercover television Marquee Moon Tee in the black color way. Brand New with tags and bag from the Undercover store.', username: 'lorents_v', category: 'Accessories', timeStamp:'4h'},

      {brand: 'Undercover', style: 'Slim Dungarees', size: '29', price:500, image: require('../img/item6.jpg'), detail:'Beautiful tee, I love the Marquee Moon collection. ', username: 'pakrenw', category: 'Hats', timeStamp:'20m'},

      {brand: 'Outlier', style: 'Low Velcros', size: 'OS', price:550, image: require('../img/item2.jpg'), detail:'Only selling because its not my size, if anyone has a size 3 please hmu.', username: 'vawer', category: 'Tops', timeStamp:'5s'}
    ])};
  }

  renderRow(rowData){
    return (
      <FeedViewRow rowData={rowData} navigator={this.props.navigator}/>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
});

export default FeedView
