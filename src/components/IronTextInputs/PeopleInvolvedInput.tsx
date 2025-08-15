import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './InputStyle';

export function PeopleInvolvedInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputer}
        placeholder='How many people are involved?'
        inputMode='numeric'
      />
    </View>
  );
}