import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function ConditionInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='Injured, unconscious, trapped, dead, etc'
      />
    </View>
  );
}