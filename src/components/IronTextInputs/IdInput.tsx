import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function IdInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='CPF, RG, CNH or passport'
      />
    </View>
  );
}