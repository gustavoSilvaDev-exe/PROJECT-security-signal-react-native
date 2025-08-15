import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function AddressInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Whats your current address?'
      />
    </View>
  );
}