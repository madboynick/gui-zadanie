import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import styles from '../storage/styles'
const WelcomeScreen = ({navigation}) => {
    return (
        <ImageBackground 
        style = {styles.backgroundWelcome}
        source={require("../assets/background.jpg")}>
            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
            <View style = {styles.loginButton}>   
            <Text style = {styles.textButton}>Login</Text>
            </View>
            </TouchableOpacity>
            
            
        </ImageBackground>
        
    );
}



export default WelcomeScreen;