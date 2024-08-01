import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Hijaiyah from './screens/Hijaiyah';
import HariIslam from './screens/HariIslam';
import AngkaDasar from './screens/AngkaDasar';
import NamaWarna from './screens/NamaWarna';
import HijaiyahBa from './screens/HijaiyahBa';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
    <NavigationContainer >

    <Stack.Navigator>
      <Stack.Screen 
        name ="Home" 
        component={Home}
        options={{headerShown:false }}
      />

      <Stack.Screen
        name='Hijaiyah'
        component={Hijaiyah}
        options={{headerShown:false}}
      ></Stack.Screen>

      <Stack.Screen
          name='HariIslam'
          component={HariIslam}
          options={{headerShown:false}}
      ></Stack.Screen>

      <Stack.Screen
        name='AngkaDasar' 
        component={AngkaDasar}
        options={{headerShown:false}}
        ></Stack.Screen>

      <Stack.Screen
        name='NamaWarna'
        component={NamaWarna}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
          name='HijaiyahBa'
          component={HijaiyahBa}
          options={{headerShown:false}}
          ></Stack.Screen>

     </Stack.Navigator>
    
    

    </NavigationContainer>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9D689',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
