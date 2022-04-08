import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView, TextInput } from 'react-native';

import Images from '../storage/Images';
import styles from '../storage/styles'

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;


export default function SearchScreen ({navigation}) {
    const route = useRoute()
    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.header}>
        
        <TouchableOpacity style={styles.searchbar} onPress={() => alert('Coming soon!')}>
            <View style={{flexDirection:"row"}}>
                <Image source={require('../assets/search.png')} style={{height:15,width:15, marginTop:9, marginLeft:5}}></Image>
                <Text style={{color:"lightgray", marginTop:6.5, marginLeft:15}}>Search</Text>
            </View>
            </TouchableOpacity>   
        </View>

       <View style = {styles.mid}>
        <ScrollView>
            <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {
                Images.map((image,index) => (
                    <TouchableOpacity key={index} onPress={() => {}}>
                        <Image source={image.uri} style={{height:deviceHeight/6,width:deviceWidth/3-2,margin:1}}></Image>
                    </TouchableOpacity>
                ))
            }
        </View>
        </ScrollView>
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



