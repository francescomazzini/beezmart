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
import { AuthContext, useUser } from './app/core/useUser';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './app/UI/LoginPage';
import { BottomBar } from './app/UI/fragments/Bars';

const InnerApp = ({route}): JSX.Element => {

  return(
        <BottomBar />
  )
}

function App(): JSX.Element {

  const auth = useUser();

  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      {/* <View> */}
        <AuthContext.Provider value={auth}>
          <Stack.Navigator>
              <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InnerApp"
                component={InnerApp}
                options={{ headerShown: false }}
              />
          </Stack.Navigator> 
        </AuthContext.Provider>
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;