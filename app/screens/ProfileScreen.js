import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../storage/styles'

export default function ProfileScreen ({navigation}) {
    const route = useRoute()
    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.header}>
            <Text style = {styles.headertext}> {route.params.username} </Text>
        </View>

        <View style = {styles.profile}>
        <Text style = {styles.profiletext}>{route.params.username}</Text>
        <Image source={route.params.photo} style = {styles.profileimage}></Image>
        <Text style = {styles.biotext}>My name is {route.params.username}</Text>
        </View>


        <View style = {styles.footer}>

            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                <Image source={require("../assets/icons/home.png")} style = {styles.home}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Search')}>
                <Image source={require("../assets/search.png")} style = {styles.search}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Reels')}>
                <Image source={require("../assets/icons/reel.png")} style = {styles.reel}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require("../assets/icons/bag.png")} style = {styles.bag}></Image>
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {() => navigation.navigate('Main')}>
                <Image source={require("../assets/profilepic.jpg")} style = {styles.user}></Image>
            </TouchableOpacity>
            

        </View>



        </ImageBackground>
        
    );
}



