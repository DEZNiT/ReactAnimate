/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

declare const global: {HermesInternal: null | {}};
//  Screen

import LoginScreen from './src/screens/Auth/Login';
import CardListScreen from './src/screens/CardList/CardList';
import CardDetailsScreen from './src/screens/CardList/CardDetails';

// Stack navigator
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={CardListScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="details"
        component={CardDetailsScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {cardStyle: {opacity: progress}};
          },
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {item} = route.params;

          return [
            {id: item.id},

            {id: `item.${item.id}.overlay`},
            {id: `item.${item.id}.button`},
            {id: `item.${item.id}.add`},
          ];
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackNav></StackNav>
      {/* <LoginScreen></LoginScreen> */}
      {/* <CardListScreen></CardListScreen> */}
      {/* <CardDetailsScreen></CardDetailsScreen> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
