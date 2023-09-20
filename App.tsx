import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';


import { HomeScreen } from './src/screens/HomeScreen';
import { TextScreen } from './src/screens/TextScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        animated
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
        initialRouteName='LoginScreen'
      >
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen} />
        <Stack.Screen
          name='TextScreen'
          component={TextScreen} />
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen} />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen} />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}