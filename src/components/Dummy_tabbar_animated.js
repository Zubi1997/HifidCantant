// Typescript
import * as React from 'react';
import { View, Text } from 'react-native';
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions // optional
} from 'react-native-animated-nav-tab-bar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Home from './Home'
import Transactions from './Transactions'
import Reports from './Reports'
import Profile from './Profile'


const Tabs = AnimatedTabBarNavigator();

export default () => (
  <Tabs.Navigator
  screenOptions={
      
    ({ route }) => ({
   
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home';
      } else if (route.name === 'Like_tab') {
        iconName = focused ? 'md-heart' : 'md-heart';
      }  else if (route.name === 'Chat') {
        iconName = focused ? 'message' : 'message';
      }  else if (route.name === 'Share') {
        iconName = focused ? 'location-arrow' : 'location-arrow';
      }  else if (route.name === 'Profile') {
        iconName = focused ? 'person-sharp' : 'person-sharp';
      }
      // You can return any component that you like here!
      if (route.name === 'Home') {
      return <Ionicons name={iconName} size={size} color={color} />
      }  else if (route.name === 'Like_tab') {
        return <Ionicons name={iconName} size={size} color={color} />
      }  else if (route.name === 'Chat') {
        return <MaterialIcons name={iconName} size={size} color={color} />
      }  else if (route.name === 'Share') {
        return <FontAwesome5 name={iconName} size={size} color={color} />
      }  else if (route.name === 'Profile') {
        return <Ionicons name={iconName} size={size} color={color} />
      }
      
      ;
    },
  })}
  tabBarOptions={{
    showLabel: false,
    activeTintColor: '#c92b78',
    inactiveTintColor: '#3a3a3a',
    style: {
      backgroundColor: 'white',//color you want to change
    }
  }}
    // default configuration from React Navigation
    // tabBarOptions={{
    //   // activeTintColor: "#2F7C6E",
    //   activeTintColor: "#222222",

    //   inactiveTintColor: "#222222"
    // }}
  >

    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Transactions" component={Transactions} />
    <Tabs.Screen name="Reports" component={Reports} />
    <Tabs.Screen name="Profile" component={Profile} />



  </Tabs.Navigator>
)