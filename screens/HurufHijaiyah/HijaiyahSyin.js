import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable, TouchableOpacity, Alert, Image, Button} from "react-native";
import Home from "../Home";
import Hijaiyah from "../Hijaiyah";
import HijaiyahShad from "./HijaiyahShad";

export default function HijaiyahSyin() {
    const navigation=useNavigation();

    function KlikBack(){
        navigation.navigate('HijaiyahSin');
    }
    function KlikNext(){
        navigation.navigate('HijaiyahShad',{HijaiyahShad});
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
        <View styles= {styles.container}>
           
            <Image 
                source={require('../../assets/Akhi.png')} style={styles.imageatas}/>
            <View style={styles.rectangle} >
                <Text style={{
                    fontSize: 90,
                    textAlign:"center"
                }}> 
                ش
                </Text>
                <Text style={{
                    fontSize: 30,
                    textAlign:"center"}}>
                    Syin
                </Text>
            </View>
            
            <Image source={require('../../assets/Ukhti.png')}style={styles.imagebawah}/>
            <TouchableOpacity onPress={() => navigation.navigate(Home)} 
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
        backgroundColor:'#f0ECD6',
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
        backgroundColor: '#F0ECD6',
        borderColor: '#B0834B',
        borderWidth: 2,
        marginLeft: 5,
        borderRadius: 20,
        
    },

    homeButton:{
        position:'absolute',
        bottom: 10,
        right: 20,
        padding: 15,
        paddingHorizontal: 40,
        backgroundColor:'white',
        borderRadius: 10,
    }
});
