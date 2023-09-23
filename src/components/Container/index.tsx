import React, { ReactNode, useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
  Keyboard
} from 'react-native'

import { styles } from './styles';

export interface ContainerProps extends InnerContainerProps {
  backgroundColor?: string | undefined;
  isKeyboardSupported?: boolean | undefined;
}

export interface InnerContainerProps {
  children?: ReactNode | undefined;
}

export function Container({ children, backgroundColor, isKeyboardSupported }: ContainerProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {
        isKeyboardSupported
          ? <ContainerWithKeyboardSupport>
            {children}
          </ContainerWithKeyboardSupport>
          : <ContainerWithoutKeyboardSupport>
            {children}
          </ContainerWithoutKeyboardSupport>
      }
    </View>
  );
}

function ContainerWithKeyboardSupport({ children }: InnerContainerProps) {
  const [pressinLocation, setPressinLocation] = useState<any>();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback
        style={styles.container}
        onPressIn={(event) => setPressinLocation(event.nativeEvent.locationY)}
        onPressOut={(event) => { if (event.nativeEvent.locationY == pressinLocation) Keyboard.dismiss; }}>
        <ContainerWithoutKeyboardSupport>
          {children}
        </ContainerWithoutKeyboardSupport>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function ContainerWithoutKeyboardSupport({ children }: InnerContainerProps) {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.innerContainer}
    >
      {children}
    </ScrollView>
  );
}