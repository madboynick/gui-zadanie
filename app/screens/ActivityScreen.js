import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView, Touchable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'

import styles from '../storage/styles'
const ActivityScreen = ({navigation}) => {

    const [users, setUsers] = useState([
        {id: '1', photo: require('../assets/activity/1.png'), activity: 'milujemeparno started following you',username: 'milujemeparno',posts: '50',followers:'500',followed:'1000'},
        {id: '2', photo: require('../assets/activity/2.jpg'), activity: 'Johnv is now on Instagram',username: 'Johnv',posts: '50',followers:'500',followed:'1000' },
        {id: '3', photo: require('../assets/activity/2.jpg'), activity: 'nlukas like your photo',username: 'nlukas',posts: '50',followers:'500',followed:'1000'},
        {id: '4', photo: require('../assets/activity/3.jpg'), activity: 'michaltu_ started following you',username: 'michaltu_',posts: '50',followers:'500',followed:'1000'},
        {id: '5', photo: require('../assets/gallery/1.jpg'), activity: 'podmajersky.nicolas is now on Instagram',username: 'podmajersky.nicolas',posts: '50',followers:'500',followed:'1000'},
        {id: '6', photo: require('../assets/gallery/2.jpg'), activity: '_sajkaa_ liked your photo',username: '_sajkaa_',posts: '50',followers:'500',followed:'1000'},
        {id: '7', photo: require('../assets/gallery/3.jpg'), activity: 'ainan1396 started following you',username: 'ainan1396',posts: '50',followers:'500',followed:'1000'},
        {id: '8', photo: require('../assets/gallery/4.jpg'), activity: 'mskmck is now on Instagram',username: 'mskmck',posts: '50',followers:'500',followed:'1000'},
        {id: '9', photo: require('../assets/gallery/5.jpg'), activity: 'alanhesek liked your photo',username: 'alanhesek',posts: '50',followers:'500',followed:'1000'},
        {id: '10', photo: require('../assets/gallery/6.jpg'), activity: '_sariiis179_ started following you',username: '_sariiis179_',posts: '50',followers:'500',followed:'1000'},
        {id: '11', photo: require('../assets/gallery/7.jpg'), activity: 'tomy_kicks is now on Instagram',username: 'tomy_kicks',posts: '50',followers:'500',followed:'1000'},
        {id: '12', photo: require('../assets/gallery/8.jpg'), activity: 'barusiatko liked your photo',username: 'barusiatko',posts: '50',followers:'500',followed:'1000'},
        {id: '13', photo: require('../assets/gallery/9.jpg'), activity: 'kajty.p started following you',username: 'kajty.p',posts: '50',followers:'500',followed:'1000'},
        {id: '14', photo: require('../assets/gallery/10.jpg'), activity: 'martinmikulaa is now on Instagram',username: 'martinmikulaa',posts: '50',followers:'500',followed:'1000'},
        {id: '15', photo: require('../assets/gallery/9.jpg'), activity: 'kajty.p liked your photo',username: 'kajty.p',posts: '50',followers:'500',followed:'1000'},
        {id: '16', photo: require('../assets/gallery/12.jpg'), activity: 'adka.allam started following you',username: 'adka.allam',posts: '50',followers:'500',followed:'1000'},
        {id: '17', photo: require('../assets/gallery/13.jpg'), activity: 'janis is now on Instagram',username: 'janis',posts: '50',followers:'500',followed:'1000'},
        {id: '18', photo: require('../assets/gallery/14.jpg'), activity: 'davidmican_ liked your photo',username: 'davidmican_',posts: '50',followers:'500',followed:'1000'},
        {id: '19', photo: require('../assets/gallery/15.jpg'), activity: 'nxnus started following you',username: 'nxnus',posts: '50',followers:'500',followed:'1000'},
        {id: '20', photo: require('../assets/gallery/16.jpg'), activity: 'dvymyslicky is now on Instagram',username: 'dvymyslicky',posts: '50',followers:'500',followed:'1000'},
        {id: '21', photo: require('../assets/gallery/17.jpg'), activity: 'ester.mala liked your photo',username: 'ester.mala',posts: '50',followers:'500',followed:'1000'},
        {id: '22', photo: require('../assets/gallery/18.jpg'), activity: 'etel.truhlarova started following you',username: 'etel.truhlarova',posts: '50',followers:'500',followed:'1000'},
        {id: '23', photo: require('../assets/gallery/19.jpg'), activity: 'toporova_simona is now on Instagram',username: 'toporova_simona',posts: '50',followers:'500',followed:'1000'},
        {id: '24', photo: require('../assets/gallery/20.jpg'), activity: 'nellhx liked your photo',username: 'nellhx',posts: '50',followers:'500',followed:'1000'}
    ]);


    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.mainheader}>
            
            <TouchableOpacity style={{padding:20, left:0, position:"absolute", bottom:0}} onPress={() => navigation.navigate('Home')}>
            <Ionic name='arrow-back-outline' style={{color:"white", fontSize:30, position:"absolute", left:10, bottom:0,marginBottom:5,}}></Ionic>
            </TouchableOpacity>
           
            <Text style={{fontSize:20, marginRight:250, alignSelf:"center", marginBottom:10,marginLeft:10, color:"white", position:"absolute", left:50, bottom:0, fontWeight:"bold"}}>Activity </Text>
        </View>

         <SafeAreaView style={styles.mid}>
            <ScrollView style={{ marginTop:10}}>
            {
                users.map(item =>(
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                        username: item.username,
                        photo: item.photo,
                        posts: item.posts,
                        followers: item.followers,
                        followed: item.followed
                    })
                    }>
                    <View key={item.id} style={{flexDirection: "row", height:68, alignItems:"center"}}>
                        
                        <Image source={item.photo} style={styles.activityphoto}></Image>
                        <Text style={styles.activitytext}>{item.activity}</Text>
                        
                    </View>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
         </SafeAreaView >

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



export default ActivityScreen;