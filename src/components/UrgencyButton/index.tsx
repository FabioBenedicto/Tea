import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

export interface UrgencyButtonProps {
  onPress?: () => void | undefined;
  isHiding?: boolean | undefined;
}

export function UrgencyButton({ onPress, isHiding }: UrgencyButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('#FF8989');

  const handlePressIn = () => {
    setBackgroundColor('#E57A7A');
  }

  const handlePressOut = () => {
    setBackgroundColor('#FF8989');
  }

  const handlePress = () => {
    if (onPress) onPress();
  }

  return (
    <Pressable
      style={[styles.container,
      {
        backgroundColor: backgroundColor,
        elevation: isHiding ? 0 : 6
      }
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <Text
        style={styles.text}
      >
        URGÊNCIA
      </Text>
    </Pressable>
  );
}