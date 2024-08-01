import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable, TouchableOpacity, Alert, Image, ScrollView} from "react-native";



export default function Home(){
     const Hijaiyah= useState('')
     const HariIslam=useState('')
     const AngkaDasar=useState('')
     const NamaWarna=useState('')

     const navigation=useNavigation()

     function klikhijaiyah(){
          navigation.navigate("Hijaiyah",{Hijaiyah})
     }
     function klikHariIslam() {
          navigation.navigate("HariIslam",{HariIslam})
     }
     function KlikAngkaDasar(){
          navigation.navigate("AngkaDasar",{AngkaDasar})
     }
     function KlikWarna(){
          navigation.navigate("NamaWarna",{NamaWarna})
     }

    return(
        <View style={{ backgroundColor: "#f8c8c8"}}>
            <View style={styles.container}>  
                <Text 
                style={{margin: 0 ,
               fontSize: 15, 
               textAlign:"center",
               marginTop: 50,
               fontWeight:"bold",
               color:"#AF47D2",
               paddingBottom: 8
                }}> Hai Adik,Belajar bersama Yuk!</Text>
             <ScrollView style = {styles.ScrollView}>
               <View style={{flexDirection:"column", rowGap: 15, overflow:"scroll",
                     paddingBottom: 180, paddingTop : 25}}> 
                    <TouchableOpacity onPress={klikhijaiyah} >
                    <Image 
                         source={require('../assets/CoverHijaiyah.jpg' )}
                         style={{borderRadius:50 ,
                               alignItems:"center",  
                               height: 260,
                               width : 350,
                               marginLeft: 6,                
                         }}
                         /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={klikHariIslam}>
                    <Image
                         source={require('../assets/CoverNamaHari.jpg')} 
                         style={{borderRadius:50 ,
                              alignItems:"center",  
                              height: 260,
                              width : 350,
                              marginLeft: 6,
                         }}
                         /> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={KlikAngkaDasar}>
                    <Image
                         source={require('../assets/CoverAngka.jpg')}
                         style={{borderRadius:50 ,
                              alignItems:"center",  
                              height: 260,
                              width : 350,
                              marginLeft: 6,
                         }}
                         />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={KlikWarna}>
                    <Image
                         source= {require('../assets/CoverWarna.jpg')}
                         style={{borderRadius:50 ,
                              alignItems:"center",  
                              height: 260,
                              width : 350,
                              marginLeft: 6,
                         }}
                         />
                         </TouchableOpacity>
               </View>
             </ScrollView>
            </View>
        </View>
    )

}


const styles = StyleSheet.create ({
     container: {
          
     },
     ScrollView: {
          overflow:"scroll"
     }
})
