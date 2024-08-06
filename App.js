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
import WarnaOren from './screens/WarnaOren';
import WarnaKuning from './screens/WarnaKuning';
import WarnaHijau from './screens/WarnaHijau';
import WarnaBiru from './screens/WarnaBiru';
import WarnaHitam from './screens/WarnaHitam';
import WarnaPutih from './screens/WarnaPutih';
import WarnaUngu from './screens/WarnaUngu';
import WarnaCoklat from './screens/WarnaCoklat';
import WarnaPink from './screens/WarnaPink';
import HariSelasa from './screens/NamaHari/HariSelasa';
import HariRabu from './screens/NamaHari/HariRabu';
import HariKamis from './screens/NamaHari/HariKamis';
import HariJumat from './screens/NamaHari/HariJumat';
import HariSabtu from './screens/NamaHari/HariSabtu';
import HariMinggu from './screens/NamaHari/HariMinggu';
import Angka2 from './screens/AngkaAngka/Angka2';
import Angka3 from './screens/AngkaAngka/Angka3';
import Angka4 from './screens/AngkaAngka/Angka4';
import Angka5 from './screens/AngkaAngka/Angka5';
import Angka6 from './screens/AngkaAngka/Angka6';
import Angka7 from './screens/AngkaAngka/Angka7';
import Angka8 from './screens/AngkaAngka/Angka8';
import Angka9 from './screens/AngkaAngka/Angka9';
import Angka10 from './screens/AngkaAngka/Angka10';
import HijaiyahTsa from './screens/HurufHijaiyah/HijaiyahTsa';
import HijaiyahTa from './screens/HurufHijaiyah/HijaiyahTa';
import HijaiyahJim from './screens/HurufHijaiyah/HijaiyahJim';
import HijaiyahHa from './screens/HurufHijaiyah/HiijaiyahHa';
import HijaiyahKha from './screens/HurufHijaiyah/HijaiyahKha';
import HijaiyahDal from './screens/HurufHijaiyah/HijaiyahDal';
import HijaiyahDzal from './screens/HurufHijaiyah/HijaiyahDzal';
import HijaiyahRa from './screens/HurufHijaiyah/HijaiyahRa';
import HijaiyahZa from './screens/HurufHijaiyah/HijaiyahZa';
import HijaiyahSin from './screens/HurufHijaiyah/HijaiyahSin';
import HijaiyahSyin from './screens/HurufHijaiyah/HijaiyahSyin';
import HijaiyahShad from './screens/HurufHijaiyah/HijaiyahShad';
import HijaiyahDhad from './screens/HurufHijaiyah/HijaiyahDhad';
import HijaiyahTha from './screens/HurufHijaiyah/HijaiyahTha';
import HijaiyahZha from './screens/HurufHijaiyah/HijaiyahZha';
import HijaiyahAin from './screens/HurufHijaiyah/HijaiyahAin';
import HijaiyahGhain from './screens/HurufHijaiyah/HijaiyahGhain';
import HijaiyahFa from './screens/HurufHijaiyah/HijaiyahFa';
import HijaiyahQaf from './screens/HurufHijaiyah/HijaiyahQaf';
import HijaiyahKaf from './screens/HurufHijaiyah/HijaiyahKaf';
import HijaiyahLam from './screens/HurufHijaiyah/HijaiyahLam';
import HijaiyahMim from './screens/HurufHijaiyah/HIjaiyahMim';
import HijaiyahNun from './screens/HurufHijaiyah/HijaiyahNun';
import HijaiyahWaw from './screens/HurufHijaiyah/HijaiyahWaw';
import HijaiyahHak from './screens/HurufHijaiyah/HijaiyahHak';
import HijaiyahHamzah from './screens/HurufHijaiyah/HijaiyahHamzah';
import HijaiyahLamAlif from './screens/HurufHijaiyah/HijaiyahLamAlif';
import HijaiyahYa from './screens/HurufHijaiyah/HijaiyahYa';

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
       <Stack.Screen
          name='HijaiyahTsa'
          component={HijaiyahTsa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahTa'
          component={HijaiyahTa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahJim'
          component={HijaiyahJim}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahHa'
          component={HijaiyahHa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahKha'
          component={HijaiyahKha}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahDal'
          component={HijaiyahDal}
          options={{headerShown:false}}
          ></Stack.Screen>
         <Stack.Screen
          name='HijaiyahDzal'
          component={HijaiyahDzal}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahRa'
          component={HijaiyahRa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahZa'
          component={HijaiyahZa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahSin'
          component={HijaiyahSin}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahSyin'
          component={HijaiyahSyin}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahShad'
          component={HijaiyahShad}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahDhad'
          component={HijaiyahDhad}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahTha'
          component={HijaiyahTha}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahZha'
          component={HijaiyahZha}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahAin'
          component={HijaiyahAin}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahGhain'
          component={HijaiyahGhain}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahFa'
          component={HijaiyahFa}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahQaf'
          component={HijaiyahQaf}
          options={{headerShown:false}}
          ></Stack.Screen>
         <Stack.Screen
          name='HijaiyahKaf'
          component={HijaiyahKaf}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahLam'
          component={HijaiyahLam}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahMim'
          component={HijaiyahMim}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahNun'
          component={HijaiyahNun}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahWaw'
          component={HijaiyahWaw}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahHak'
          component={HijaiyahHak}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahHamzah'
          component={HijaiyahHamzah}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahLamAlif'
          component={HijaiyahLamAlif}
          options={{headerShown:false}}
          ></Stack.Screen>
        <Stack.Screen
          name='HijaiyahYa'
          component={HijaiyahYa}
          options={{headerShown:false}}
          ></Stack.Screen>

      <Stack.Screen
          name='WarnaOren'
          component={WarnaOren}
          options={{headerShown:false}}
            ></Stack.Screen>
       <Stack.Screen
          name='WarnaKuning'
          component={WarnaKuning}
          options={{headerShown:false}}
            ></Stack.Screen>
      <Stack.Screen
          name='WarnaHijau'
          component={WarnaHijau}
          options={{headerShown:false}}
            ></Stack.Screen>
      <Stack.Screen
          name='WarnaBiru'
          component={WarnaBiru}
          options={{headerShown:false}}
            ></Stack.Screen>
      <Stack.Screen
          name='WarnaHitam'
          component={WarnaHitam}
          options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
          name='WarnaPutih'
          component={WarnaPutih}
          options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
          name='WarnaUngu'
          component={WarnaUngu}
          options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
          name='WarnaCoklat'
          component={WarnaCoklat}
          options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
          name='WarnaPink'
          component={WarnaPink}
          options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariSelasa'
        component={HariSelasa}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariRabu'
        component={HariRabu}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariKamis'
        component={HariKamis}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariJumat'
        component={HariJumat}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariSabtu'
        component={HariSabtu}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='HariMinggu'
        component={HariMinggu}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka2'
        component={Angka2}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka3'
        component={Angka3}
        options={{headerShown:false}}
      ></Stack.Screen>
       <Stack.Screen
        name='Angka4'
        component={Angka4}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka5'
        component={Angka5}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka6'
        component={Angka6}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka7'
        component={Angka7}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka8'
        component={Angka8}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka9'
        component={Angka9}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='Angka10'
        component={Angka10}
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
