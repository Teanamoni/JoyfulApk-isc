import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable, TouchableOpacity, Alert, Image, ImageComponent} from "react-native";
import Home from "./Home";
import NamaWarna from "./NamaWarna";
import WarnaKuning from "./WarnaKuning";

export default function WarnaOren() {

    const navigation=useNavigation()

    function KlikBack(){
        navigation.navigate('NamaWarna');
    }
    function KlikNext(){
        navigation.navigate('WarnaKuning',{WarnaKuning});
    }

    return(
        <View style={{ backgroundColor: "#F9D689", flex: 1 }}>
        <View style={styles.topButtons}>
                <TouchableOpacity onPress={KlikBack} style={styles.buttton}>
                    <Text>Kembali</Text>
                 </TouchableOpacity>
          
            <TouchableOpacity onPress={KlikNext} style={styles.buttton}>
                <Text> Selanjutnya</Text>
            </TouchableOpacity>
        </View>
        <View styles={styles.container}>
            <Image
                source={require('../assets/Akhi.png')} style={styles.imageatas} />
            <View style={styles.rectangle}>
                <Text style={{
                    fontSize: 30,
                    textAlign:"center"
                }}>
                    Orange
                </Text>
                <Text style={{
                    fontSize: 50,
                    textAlign: "center",
                    marginTop: 10
                }}>
                    البرتقالي
                </Text>
                <Text style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: 30
                }}>
                    alburtuqaliu
                </Text>
            </View>

            <Image source={require('../assets/Ukhti.png')} style={styles.imagebawah} />
            <TouchableOpacity onPress={(KLikHome) => navigation.navigate(Home)}
                style={styles.homeButton}>
                <Text> Home</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
        flex: 1
    },
    
    topButtons: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 30,
        padding: 8,
        marginTop: 30,
        
    },
    buttton:{
        padding: 10,
        backgroundColor:'#FFA62F',
        borderRadius: 10,
    },
    imageatas: {
        width: 220,
        height: 245,
        marginTop: 10,
        marginLeft: 130
    },
    imagebawah: {
        width: 210,
        height: 210,
        marginTop:1,
        
    },
    rectangle: {
        width: 350,
        height: 200,
        backgroundColor: '#FF8225',
        borderColor: '#EB5B00',
        borderWidth: 3,
        marginLeft: 5,
        borderRadius: 20,
        
    },

    homeButton:{
        position:'absolute',
        bottom: 10,
        right: 20,
        padding: 15,
        paddingHorizontal: 40,
        backgroundColor:'#FFA62F',
        borderRadius: 10,
    }
});

        

