import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function AgeInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Whats your age?'
      />
    </View>
  );
}