import React from "react";
import {View,Dimensions, Text, TouchableOpacity,Image, ScrollView, ImageBackground, ViewComponent} from 'react-native';
import styles from '../storage/styles';
import Feather from 'react-native-vector-icons/Feather';
import Reels from '../storage/Reels'

const ReelsScreen = ({navigation}) => {
    
    const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height
    
    return(
        
        <ImageBackground
        style = {styles.background}
        source={require("../assets/background.jpg")}>
            <View style={{flex:0.03, backgroundColor:"white"}}></View>
            <View style={{flex:0.91, position:"relative"}}>

                <View style={{position:"absolute",top:0,left:0,right:0, flexDirection:"row",justifyContent:"space-between",zIndex:1,padding:10}}>
                    <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>Reels</Text>
                    <Feather name="camera" style={{fontSize:25, color:"white"}}/>
                </View>
                <Reels/>
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
    )
}
export default ReelsScreen