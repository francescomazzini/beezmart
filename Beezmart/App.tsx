/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useUser } from './app/core/useUser';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './app/UI/LoginPage';

function App(): JSX.Element {

  const {log} = useUser();

  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      {/* <View> */}
        <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
        </Stack.Navigator> 
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;