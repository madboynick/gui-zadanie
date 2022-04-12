import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../storage/styles'
const MainScreen = ({navigation}) => {
    return (
        <ImageBackground d
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.mainheader}>
            <Text style={{fontSize:25, marginRight:250, alignSelf:"center", marginBottom:10,marginLeft:15, color:"white", position:"absolute", left:0, bottom:0, fontWeight:"bold", fontSize:22}}>madboynick</Text>
            <TouchableOpacity>
                <Image source={require('../assets/icons/add.png')} style={{height:25, width:25, position:"relative", right:0, marginRight:25,marginTop:30,alignSelf:"center",}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('Activity')}>
                <Image source={require('../assets/icons/menu.png')} style={{height:25, width:25, position:"relative", right:0, marginRight:25,marginTop:30,alignSelf:"center",}}></Image>
            </TouchableOpacity>
        </View>

        <View style = {styles.profile}>
            <View style={{flexDirection:"row", paddingBottom:20}}>
                <Image source={require("../assets/profilepic.jpg")} style = {styles.profileimage}></Image>

            <View style={{flexDirection:"column", marginTop:35}}>
                <Text style = {{bottom:0, color:"white", alignSelf:"center", paddingRight:10, marginLeft:40, fontWeight:"bold", fontSize:18}}>37</Text>
                <Text style = {{bottom:0, color:"white", alignSelf:"center", paddingRight:10, marginLeft:40}}>Príspevky</Text>
            </View>
            <View style={{flexDirection:"column", marginTop:35}}>
            <Text style = {{bottom:0, color:"white", alignSelf:"center",paddingRight:10, fontWeight:"bold", fontSize:18}}>876</Text>
            <Text style = {{bottom:0, color:"white", alignSelf:"center",paddingRight:10}}>Sledovat...</Text>
            </View>

            <View style={{flexDirection:"column", marginTop:35}}>
            <Text style = {{bottom:0, color:"white", alignSelf:"center", fontWeight:"bold", fontSize:18}}>999</Text>
            <Text style = {{bottom:0, color:"white", alignSelf:"center"}}>Sledované</Text>
            </View>


            </View>
            <Text style = {styles.biotext}>©MadBoy</Text>
            <Text style = {styles.biotext}>US11👟</Text>
            <Text style = {styles.biotext}>𝖓𝖊𝖛𝖊𝖗 𝖘𝖔𝖇𝖊𝖗</Text>
            <Text style = {styles.biotext}>youtu.be/AbLmYhAybd0</Text>
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
                <Image source={require("../assets/profilepic.jpg")} style = {{marginLeft: 55,height:22,width:22,borderRadius:200/2,borderColor:"white",borderWidth: 1.5}}></Image>
            </TouchableOpacity>
            

        </View>



        </ImageBackground>
        
    );
}



export default MainScreen;