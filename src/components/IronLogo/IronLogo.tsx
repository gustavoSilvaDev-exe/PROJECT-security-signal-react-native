import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './IronLogoStyles';

import ironLogo from '../../../assets/iron-man-logo.png';

export function IronLogo() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={ ironLogo }></Image>
        <Text style={styles.title}>Iron Security Signal</Text>
    </View>
  );
}