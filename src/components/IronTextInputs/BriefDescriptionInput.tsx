import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function DescriptInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Briefly describe your emergency'
        multiline= {true}
      />
    </View>
  );
}