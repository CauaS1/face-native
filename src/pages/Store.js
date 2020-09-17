import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TopBar from '../components/TopBar';

export default class Store extends Component {
  render() {
    const MarketBar = this.props.bar  
    return (
      <View>
        <TopBar bar={MarketBar} />
      </View>
    );
  }
}