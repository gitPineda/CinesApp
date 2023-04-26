import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { Navigation } from './src/Navigation/Navigation'



const App = () => {
  return (
   <NavigationContainer>
   <Navigation/>
   </NavigationContainer>
  )
}

export default App
