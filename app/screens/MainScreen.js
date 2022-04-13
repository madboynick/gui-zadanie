import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'

import styles from '../storage/styles'

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;


const MainScreen = ({navigation}) => {


    const [data, setData] = useState([
        {key: '1', photo: require('../assets/gallery/vyber2.jpg'), description: 'DRIP'},
        {key: '2', photo: require('../assets/gallery/vyber1.jpg'), description: 'live shows'},        
    ]);

    const [data2, setData2] = useState([
        {key: '1', photo: require('../assets/gallery/1.jpg')},
        {key: '2', photo: require('../assets/gallery/2.jpg')},
        {key: '3', photo: require('../assets/gallery/3.jpg')},
        {key: '4', photo: require('../assets/gallery/4.jpg')},
        {key: '5', photo: require('../assets/gallery/5.jpg')},
        {key: '6', photo: require('../assets/gallery/6.jpg')},
        {key: '7', photo: require('../assets/gallery/7.jpg')},
        {key: '8', photo: require('../assets/gallery/8.jpg')},  
        {key: '9', photo: require('../assets/gallery/9.jpg')},
        {key: '10', photo: require('../assets/gallery/10.jpg')},
        {key: '11', photo: require('../assets/gallery/11.jpg')},
        {key: '12', photo: require('../assets/gallery/12.jpg')},
        {key: '13', photo: require('../assets/gallery/13.jpg')},
        {key: '14', photo: require('../assets/gallery/14.jpg')},
        {key: '15', photo: require('../assets/gallery/15.jpg')},
        {key: '16', photo: require('../assets/gallery/16.jpg')},      
    ]);








    return (
        <ImageBackground
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
            
            <View style={{flexDirection:"row", paddingTop:10, alignItems:"center"}}>
            <TouchableOpacity>
                <View style={{width:295, backgroundColor:"black", borderWidth:1, borderColor:"#6e6e6e", height:35, marginLeft:15, alignItems:"center", justifyContent:"center", borderRadius:5}}>
                    <Text style={{color:"white", alignSelf:"center", fontWeight:"bold"}}>Edit profile</Text>
                </View>


            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{width:35, backgroundColor:"black", borderWidth:1, borderColor:"#6e6e6e", height:35, marginLeft:5, alignItems:"center", justifyContent:"center", borderRadius:5}}>       
                <Ionic name='person-add-outline' style={{color:"white", fontSize:18}}></Ionic>    
            </View>
            </TouchableOpacity>
            </View>


            <View style={{height:98, backgroundColor:"black", marginTop:20}}>
             <ScrollView horizontal={true}>
             {data.map(item =>(
                

                <View key={item.key} style={{flexDirection:"row"}}>
                    <View style={{marginTop:5, marginLeft:15, alignItems:"center"}}>
                        <TouchableOpacity>
                        <Image style={styles.profilestory} source={item.photo}></Image>
                        </TouchableOpacity>
                        <Text style={styles.storyUsername}>{item.description}</Text>
                    </View>                  
                </View>
                ))
                }
             </ScrollView>
            </View>

            <View style={{height:45, marginTop:13, flexDirection:"row"}}>
                
                <View style={{width:deviceWidth/3,borderBottomWidth:1.5,borderBottomColor:"white", justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity>
                    <Ionic name='grid-outline' style={{fontSize:25, color:"white"}}/>
                </TouchableOpacity>
                </View>

                <View style={{width:deviceWidth/3, justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity>
                    <Ionic name='play-outline' style={{fontSize:25, color:"white"}}/>
                    </TouchableOpacity>
                </View>

                <View style={{width:deviceWidth/3, justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity>
                    <Ionic name='bookmark-outline' style={{fontSize:25, color:"white"}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
            <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            {
                data2.map((image,index) => (
                    <TouchableOpacity key={index}>
                        <Image source={image.photo} style={{height:deviceHeight/6,width:deviceWidth/3-2,margin:1}}></Image>
                    </TouchableOpacity>
                ))
            }
        </View>
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

            <TouchableOpacity onPress = {() => navigation.navigate('Reels')}>
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