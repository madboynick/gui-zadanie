import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

//backgrounds
    backgroundWelcome:{
        flex:1,
        justifyContent: "flex-end",
    },
    background: {
        flex:1     
    },

//headers components
    header:{    
        height:80,
        backgroundColor: "black",
        flex: 0.11,
        justifyContent: "flex-end",
        alignItems:"center",
        paddingLeft:15
    },
    mainheader:{    
        height:80,
        backgroundColor: "black",
        flex: 0.11,
        justifyContent: "flex-end",
        alignItems:"center",
        paddingLeft:15,
        flexDirection:"row"
    },
    searchbar:{
        backgroundColor:"gray",
        width: "90%",
        height:33,
        marginBottom:10,
        borderRadius:10,
        paddingLeft:10,
        
    },

//main components
    mid:{
        flex:0.83,
        flexDirection: "row",
        alignItems:"flex-start",
        
    },
    homeScreen:{
        flex:0.83,
        flexDirection: "column",
        alignItems:"flex-start",
    },
    profile: {
        flex:0.83
    },
    activityphoto:{
        width:30,
        height:30,
        marginLeft:15,
        borderRadius:200/2,
    },
    profileimage:{
        width:77,
        height:77,
        borderRadius:200/2,
        left:0,
        marginLeft:20,
        marginTop: 15
    },
    postUserPhoto:{
        width:30,
        height:30,
        marginLeft:15,
        borderRadius:200/2,
       
    },
    stories:{
        height:119,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:10
    },
    story:{
        width:66,
        height:66,
        borderRadius:66/2,
        marginRight:5,
        borderWidth:1,
        borderColor: "red"
    },


//texts
    profiletext:{
        color: "white",
        marginTop:30,
        marginLeft: 20
    },
    activitytext:{
        color: "white",
        marginLeft:10
    },
    biotext:{
        color: "white",
        marginLeft:20,
        marginTop:0,
        fontSize:14
    },
    headertext:{
        color: "white",
        textAlign: "center",
        //marginTop: 50
    },
    homeUsername:{
        color: "white",
        marginLeft:8,
        fontWeight:"bold",
    },
    likes:{
        color:"white",
        marginLeft: 15,
        fontWeight:"bold",
        flexDirection:"row"
    },
    description:{
        color: "white",
    },
    storyUsername:{
        color: "white",
        marginTop:5,
        paddingRight:5,
        fontSize:12
    },


//footer components
    footer:{
        flex: 0.06,
        //marginTop:560,
        backgroundColor: "black",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    user:{    
        marginLeft: 55,
        height:22,
        width:22,
        borderRadius:200/2,
    },
    home:{
        marginRight:55,
        width:22,
        height:22,
    },
    search:{
        width:22,
        height:22,
        marginRight:55,

    },
    reel:{
        width:22,
        height:22,

    },
    bag:{
        width:22,
        height:22,
        marginLeft:55,
        
    },

//login screen
loginButton:{
    width:"80%",
    height:50,
    marginBottom: 10,
    position: "relative",
    backgroundColor:"#fc5c65",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius:40,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    alignSelf: "center" 
},
textButton:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    alignSelf: "center",
    color: "#222222"
},

})

export default styles