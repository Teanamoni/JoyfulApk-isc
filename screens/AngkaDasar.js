import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Text, View, StyleSheet, ImageBackground, TextInput, Pressable, TouchableOpacity, Alert, Image} from "react-native";

export default function AngkaDasar() {
    return(
        <View styles= {styles.container}>
            <Image 
                source={require('../assets/Akhi.png')}
            />
            <View style={{
                
            }}>
                <Text> Angka Islam</Text>
            </View>
            <Image 
                source={require('../assets/Ukhti.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#F9D689"
    }
})