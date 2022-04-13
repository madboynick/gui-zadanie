import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView, Dimensions } from 'react-native';

import styles from '../storage/styles'

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const HomeScreen = ({navigation}) => {


    const [data, setData] = useState([
        {key: '1', photo: require('../assets/gallery/1.jpg'), username: 'milujemeparno', profilephoto: require('../assets/activity/1.png'),description:'avdi od @youngbalint #garazpiko', likes: '4400',isSave: false},
        {key: '2', photo: require('../assets/gallery/2.jpg'), username: 'nlukas', profilephoto: require('../assets/activity/2.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '2',isSave: false},
        {key: '3', photo: require('../assets/gallery/3.jpg'), username: 'madboynick', profilephoto: require('../assets/activity/3.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '120',isSave: false},
        {key: '4', photo: require('../assets/gallery/4.jpg'), username: 'dvymyslicky', profilephoto: require('../assets/activity/4.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '30',isSave: false},
        {key: '5', photo: require('../assets/gallery/5.jpg'), username: 'garazpiko', profilephoto: require('../assets/activity/5.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '5200',isSave: false},
        {key: '6', photo: require('../assets/gallery/6.jpg'), username: 'cashanova_bg', profilephoto: require('../assets/activity/6.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '11546',isSave: false},
        {key: '7', photo: require('../assets/gallery/7.jpg'), username: 'Instagram', profilephoto: require('../assets/activity/3.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '2000521',isSave: false},
        {key: '8', photo: require('../assets/gallery/8.jpg'), username: 'rytmusking', profilephoto: require('../assets/activity/4.jpg'),description:'avdi od @youngbalint #garazpiko', likes: '22542',isSave: false},
        
    ]);

    const [save, setSave] = useState(data.isSave)






    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}>





        <View style = {styles.mainheader}>
                <Image source={require('../assets/Instagram_logo.png')} style={{width:120, height:40, position:"absolute", left:0 ,bottom:10, alignSelf:"center", marginLeft:10}}></Image>
            <TouchableOpacity>
                <Image source={require('../assets/icons/add.png')} style={{height:25, width:25, position:"relative", right:0, marginRight:25,marginTop:20,}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('Activity')}>
                <Image source={require('../assets/icons/like.png')} style={{height:25, width:25, position:"relative", right:0, marginRight:25,marginTop:20,}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/icons/send.png')} style={{height:25, width:25, position:"relative", right:0, marginRight:25, marginTop:20}}></Image>
            </TouchableOpacity>
        </View>







         <SafeAreaView style={styles.homeScreen}>       
         <ScrollView style={{marginTop:10}}> 
            <ScrollView horizontal={true}>
                {data.map(item =>(
                

                <View key={item.key} style={{flexDirection:"column"}}>
                    <View style={styles.stories}>
                        <Image style={styles.story} source={item.profilephoto}></Image>
                        <Text style={styles.storyUsername}>{item.username}</Text>
                    </View>
                    
                </View>

                ))
                }
               </ScrollView> 
               
            {
                data.map(item =>(
                    <View key={item.key}>

                        <View style={{ flexDirection:"row",height:45, alignItems:"center"}}>
                        <Image source={item.profilephoto} style={styles.postUserPhoto}></Image>
                        <Text style={styles.homeUsername}>{item.username}</Text>
                        </View>

                        <View style={{flexDirection:"column"}}>
                        <Image source={item.photo} style={{width:deviceWidth, height:deviceWidth+50}}></Image>
                        </View>

                        <View style={{flexDirection:"row",height:45, alignItems:"center"}}>

                        <TouchableOpacity>
                        <Image source={require('../assets/icons/like.png')} style={{width:25,height:25,marginLeft:15,position:"relative", left:0}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Image source={require('../assets/icons/comment.png')} style={{width:25,height:25,marginLeft:15,position:"relative", left:0}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Image source={require('../assets/icons/send.png')} style={{width:20,height:20,marginLeft:15,position:"relative", left:0}}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSave(!save)}>
                        <Image source={save ? require('../assets/icons/saved.png') : require('../assets/icons/save.png')} style={{width:20,height:20, position:"relative", right:0, marginLeft:210,}}></Image>
                        </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.likes}>{item.likes} Likes</Text>
                        </View>
                        <View style={{flexDirection:"row", paddingBottom:10}}>
                            <Text style={styles.likes}>{item.username} </Text>
                                <Text style={styles.description}> {item.description}</Text>
                        </View>
                    </View>
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



export default HomeScreen;