import React from 'react';
import { View, Switch, Text } from 'react-native';

import { styles } from './styles';

export interface MySwitchProps {
  value?: boolean | undefined;
  onValueChange?: (value: boolean) => void | undefined;
}

export function MySwitch({ value, onValueChange }: MySwitchProps) {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#E9E9E9', true: '#A3B1F1' }}
        thumbColor='#FFFFFF'
        ios_backgroundColor="#E9E9E9"
        onValueChange={onValueChange}
        value={value}
      />
      <Text style={styles.text}>
        {
          value
            ? 'Ocultar senha'
            : 'Mostrar senha'
        }
      </Text>
    </View>
  )
}