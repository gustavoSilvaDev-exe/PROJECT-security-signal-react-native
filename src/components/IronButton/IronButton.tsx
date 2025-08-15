import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './IronStylesButton';

type ButtonProps = {
  toggleVisibility: () => void;
};


export function IronButton({ toggleVisibility }: ButtonProps ) {


  return (
    <View style={styles.container}>
        <Pressable
            style={styles.button}
            onPress={toggleVisibility} 
        >
            <Text style={styles.text}>⚠️ Activate Iron Signal</Text>
        </Pressable>
    </View>
  );
}