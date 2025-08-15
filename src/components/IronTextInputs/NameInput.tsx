import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function NameInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Whats your name?'
      />
    </View>
  );
}