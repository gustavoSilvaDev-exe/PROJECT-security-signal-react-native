import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './IronSentButtonStyles';

export function IronSentButton() {

  return (
    <View style={styles.container}>
        <Pressable
            style={styles.button}
            onPress={ () => console.log('alarm sent!') }
        >
            <Text style={styles.text}>🚀 Sent Signal</Text>
        </Pressable>
    </View>
  );
}