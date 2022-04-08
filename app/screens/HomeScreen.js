import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';

import styles from '../storage/styles'
const MainScreen = ({navigation}) => {

    const [users, setUsers] = useState([
        {key: '1', photo: require('../assets/activity/1.png'), username: 'milujemeparno', activity:'milujemeparno started following you'},
        {key: '2', photo: require('../assets/activity/2.jpg'), username: 'Johnv', activity: 'Johnv started following you'},
        {key: '3', photo: require('../assets/activity/2.jpg'), username: 'nlukas', activity: 'Your facebook friend Lukas Novak is on instagram'},
        {key: '4', photo: require('../assets/activity/3.jpg'), username: 'milujemeparno', activity: 'milujemeparno like your photo'},
        {key: '5', photo: require('../assets/activity/4.jpg'), username: 'madboynick'},
        {key: '6', photo: require('../assets/activity/5.jpg'), username: 'nlukas'},
        {key: '7', photo: require('../assets/activity/6.jpg'), username: 'milujemeparno'},
        {key: '8', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '9', photo: require('../assets/profilepic.jpg'), username: 'nlukas'},
        {key: '10', photo: require('../assets/profilepic.jpg'), username: 'milujemeparno'},
        {key: '11', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '12', photo: require('../assets/profilepic.jpg'), username: 'nlukas'},
        {key: '13', photo: require('../assets/profilepic.jpg'), username: 'milujemeparno'},
        {key: '14', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '15', photo: require('../assets/profilepic.jpg'), username: 'nlukas'},
        {key: '16', photo: require('../assets/profilepic.jpg'), username: 'milujemeparno'},
        {key: '17', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '18', photo: require('../assets/profilepic.jpg'), username: 'nlukas'},
        {key: '19', photo: require('../assets/profilepic.jpg'), username: 'milujemeparno'},
        {key: '20', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '21', photo: require('../assets/profilepic.jpg'), username: 'nlukas'},
        {key: '22', photo: require('../assets/profilepic.jpg'), username: 'milujemeparno'},
        {key: '23', photo: require('../assets/profilepic.jpg'), username: 'madboynick'},
        {key: '24', photo: require('../assets/profilepic.jpg'), username: 'nlukas'}
    ]);


    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.mainheader}>
                <Image source={require('../assets/Instagram_logo.png')} style={{width:120, height:40, marginRight:90, alignSelf:"center", marginTop:20}}></Image>
            <TouchableOpacity>
                <Image source={require('../assets/icons/add.png')} style={{width:25,height:25, marginRight:25, marginTop:20}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('Activity')}>
                <Image source={require('../assets/icons/like.png')} style={{width:25,height:25, marginTop:20, marginRight:25}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/icons/send.png')} style={{width:25,height:25,marginTop:20, marginRight:15}}></Image>
            </TouchableOpacity>
        </View>

         <SafeAreaView style={styles.mid}>
            
         </SafeAreaView >

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