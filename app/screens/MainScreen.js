import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../storage/styles'
const MainScreen = ({navigation}) => {
    return (
        <ImageBackground d
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.header}>
            <Text style = {styles.headertext}> madboynick </Text>
        </View>

        <View style = {styles.profile}>
        <Text style = {styles.profiletext}>madboynick</Text>
        <Image source={require("../assets/profilepic.jpg")} style = {styles.profileimage}></Image>
        <Text style = {styles.biotext}>My name is madboynick</Text>
        </View>


        <View style = {styles.footer}>

            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                <Image source={require("../assets/icons/home.png")} style = {styles.home}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Search')}>
                <Image source={require("../assets/search.png")} style = {styles.search}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
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



export default MainScreen;