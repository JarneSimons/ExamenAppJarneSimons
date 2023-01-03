import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SongsDetail from './screens/songsDetail.js';
import Songs from './screens/songs.js';
const Stack = createNativeStackNavigator();




export default function App() {

  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Songs} />
        <Stack.Screen name ="songsDetail" component={SongsDetail} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
