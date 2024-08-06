import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable, TouchableOpacity, Alert, Image, ImageComponent} from "react-native";
import Home from "../Home";
import HariKamis from "./HariKamis";
import HariSabtu from "./HariSabtu";


export default function HariJumat() {

    const navigation=useNavigation()

    function KlikBack(){
        navigation.navigate('HariKamis');
    }
    function KlikNext(){
        navigation.navigate('HariSabtu',{HariSabtu});
    }

    return(
        <View style={{ backgroundColor: "#C7C8CC", flex: 1 }}>
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
                source={require('../../assets/Akhi.png')} style={styles.imageatas} />
            <View style={styles.rectangle}>
                <Text style={{
                    fontSize: 30,
                    textAlign:"center"
                }}>
                    Jum'at
                </Text>
                <Text style={{
                    fontSize: 50,
                    textAlign: "center",
                    marginTop: 10
                }}>
                    جُمْعَةٌ
                </Text>
                <Text style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: 30
                }}>
                    jum‘ah
                </Text>
            </View>

            <Image source={require('../../assets/Ukhti.png')} style={styles.imagebawah} />
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
        backgroundColor:'#B4B4B8',
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
        backgroundColor: '#E2DAD6',
        borderColor: '#F5EDED',
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
        backgroundColor:'#B4B4B8',
        borderRadius: 10,
    }
});

        

