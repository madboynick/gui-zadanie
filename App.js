import MainScreen from './app/screens/MainScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ActivityScreen from './app/screens/ActivityScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import SearchScreen from './app/screens/SearchScreen';
import HomeScreen from './app/screens/HomeScreen'


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
