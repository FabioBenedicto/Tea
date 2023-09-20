import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, TouchableWithoutFeedback, ScrollView, Platform, Keyboard, LayoutChangeEvent } from 'react-native'

import { styles } from './styles';
import { setStatusBarBackgroundColor, setStatusBarHidden } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface ContainerProps {
  children?: ReactNode | undefined;
  backgroundColorStatusBar?: string | undefined;
  backgroundColor?: string | undefined;
}

export function Container({children, backgroundColor, backgroundColorStatusBar} : ContainerProps ) {
  const [pressin, setPressin] = useState<any>();
  const [pressout, setPressout] = useState<any>();
  const padding = useSafeAreaInsets().top;

  const handleOnPressIn = () => {

  }

  const handleOnPressOut = () => {
    
  }

  useEffect(() => {
    if(backgroundColorStatusBar){
      setStatusBarBackgroundColor(backgroundColorStatusBar, true);
    }
  }, [])

  return (
    <Fragment>
    <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColorStatusBar }} />
    <SafeAreaView style={{flex: 1, backgroundColor}}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback 
        style={{flex: 1}}
        onPressIn={(event) => setPressin(event.nativeEvent.locationY)} 
        onPressOut={(event) => {if( event.nativeEvent.locationY == pressin){
          Keyboard.dismiss;
        }}}>
          <ScrollView 
          style={{flex: 1}} 
          bounces={false} 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{flexGrow: 1}}
          >
            <View style={[styles.container, {
              paddingTop: Platform.OS == 'android' ? padding : null,
            }]}>
            {children}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </Fragment>
  );
}