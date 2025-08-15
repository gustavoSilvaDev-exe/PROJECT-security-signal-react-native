import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function EmergencyCategoryInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Police, acident, fire, animal etc'
      />
    </View>
  );
}