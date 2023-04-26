import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Screens/DetailsScreen';
import HomeScreen from '../Screens/HomeScreen';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../Interfaces/MovieInterfaces';

export type RootStackParams={
  HomeScreen:undefined;
  DetailsScreen:Movie;
  

}
const Stack = createStackNavigator<RootStackParams>();
export const Navigation=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
              backgroundColor:'white'
            
        }


    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    
    </Stack.Navigator>
  );
}