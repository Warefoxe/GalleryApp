import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailPage from './src/pages/DetailPage';
import ImagePage from './src/pages/ImagePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Images">
        <Stack.Screen name="Detail" component={DetailPage} />
        <Stack.Screen name="Images" component={ImagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
