import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './IronSmallLogoStyle';

import ironLogo from '../../../assets/iron-man-logo.png'


export function IronSmallLogo() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={ ironLogo }></Image>
    </View>
  );
}