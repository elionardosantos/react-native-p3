import React from 'react';
import { View, Image } from 'react-native';
import { styledHeader } from './styles';
import logo from '../../../assets/cloneflix-logo.png';

export function Header() {
  return (
    <View style={styledHeader.header}>
      <Image
        source={logo}
        style={styledHeader.logo}
        resizeMode="contain"
      />
    </View>
  );
}
