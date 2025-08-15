import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function AddRemarksInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Relevant information not covered in previous fields'
        multiline= {true}
      />
    </View>
  );
}