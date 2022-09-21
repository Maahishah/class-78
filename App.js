import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './screens/homeScreen';
import IssLocationScreen from './screens/issLocation';
import MeteorScreen from './screens/meteor';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meteor"
      screenOptions = {
        { headerShown:false}
      }>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteor" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;