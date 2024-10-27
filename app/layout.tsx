import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/navigator';
import App from './index';
export default function layout() {
  return (
    <View>
        <App/>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  )
}