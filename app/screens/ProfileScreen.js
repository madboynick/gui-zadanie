import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../storage/styles'
import Ionic from 'react-native-vector-icons/Ionicons'


export default function ProfileScreen ({navigation}) {
    const route = useRoute()
    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.mainheader}>
             <TouchableOpacity style={{padding:20, left:0, position:"absolute", bottom:0}} onPress={() => navigation.navigate('Activity')}>
            <Ionic name='arrow-back-outline' style={{color:"white", fontSize:30, position:"absolute", left:10, bottom:0,marginBottom:5,}}></Ionic>
            </TouchableOpacity>
            <Text style={{fontSize:20, marginRight:250, alignSelf:"center", marginBottom:10,marginLeft:10, color:"white", position:"absolute", left:50, bottom:0, fontWeight:"bold"}}> {route.params.username} </Text>
        </View>

        <View style = {styles.profile}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:"row", paddingBottom:20}}>
                <Image source={route.params.photo} style = {styles.profileimage}></Image>

            <View style={{flexDirection:"column", marginTop:35}}>
                <Text style = {{bottom:0, color:"white", alignSelf:"center", paddingRight:10, marginLeft:40, fontWeight:"bold", fontSize:18}}>{route.params.posts}</Text>
                <Text style = {{bottom:0, color:"white", alignSelf:"center", paddingRight:10, marginLeft:40}}>Príspevky</Text>
            </View>

            <View style={{flexDirection:"column", marginTop:35}}>
                <Text style = {{bottom:0, color:"white", alignSelf:"center",paddingRight:10, fontWeight:"bold", fontSize:18}}>{route.params.followers}</Text>
                <Text style = {{bottom:0, color:"white", alignSelf:"center",paddingRight:10}}>Sledovat...</Text>
            </View>

            <View style={{flexDirection:"column", marginTop:35}}>
                <Text style = {{bottom:0, color:"white", alignSelf:"center", fontWeight:"bold", fontSize:18}}>{route.params.followed}</Text>
                <Text style = {{bottom:0, color:"white", alignSelf:"center"}}>Sledované</Text>
            </View>


            </View>
                <Text style = {styles.biotext}>My name is {route.params.username}</Text>
                <Text style = {styles.biotext}></Text>
                <Text style = {styles.biotext}> Followed by kajabahylova, karin_davidikova and 15 others</Text>

                <View style={{flexDirection:"row", paddingTop:10, alignItems:"center"}}>

                <TouchableOpacity>
                <View style={{width:295, backgroundColor:"#0095f6", height:35, marginLeft:15, alignItems:"center", justifyContent:"center", borderRadius:5}}>
                    <Text style={{color:"white", alignSelf:"center", fontWeight:"bold"}}>Follow</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{width:35, backgroundColor:"black", borderWidth:1, borderColor:"#6e6e6e", height:35, marginLeft:5, alignItems:"center", justifyContent:"center", borderRadius:5}}>       
                <Ionic name='person-add-outline' style={{color:"white", fontSize:18}}></Ionic>    
            </View>
            </TouchableOpacity>
            </View>


                <Image source={require('../assets/lock.jpg')} style={{alignSelf:"center", position:"relative", bottom:0, marginTop:95, width:95, height:95}}></Image>
                <Text style={{color:"white", fontWeight:"bold" , fontSize:20, marginTop:15, alignSelf:"center",textAlign:"center"}}>This account{"\n"}is private</Text>
                <Text style={{color:"gray" , fontSize:14, marginTop:15, alignSelf:"center",textAlign:"center"}}>Watch this account to see{"\n"}its photos and videos.</Text>
                </ScrollView>
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



