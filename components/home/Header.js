import React from 'react'
import {View,Text,SafeAreaView,Image,StyleSheet, TouchableOpacity} from 'react-native'
const Header = () => {
    return(
  <View style={styles.headerContainer}>
    <TouchableOpacity>
    <Image style={styles.logo} source={require("../../assets/logo.png")}/>
  </TouchableOpacity>
  
   <View style={styles.logoContainer}>
   <TouchableOpacity>
    <Image style={styles.logoImage} source={require("../../assets/pluss.gif")}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={styles.logoImage} source={require("../../assets/heart.gif")}/>
    </TouchableOpacity>
  
    <TouchableOpacity>
    <View style={styles.unreadbedge}>
        <Text style={styles.unreadbedgeImage} >11</Text>
    </View>
    <Image  style={styles.logoImage} source={require("../../assets/messenger.gif")}/>
    </TouchableOpacity>
  

   </View>
   
  </View>
    )
}

export default Header

const styles = StyleSheet.create({

    headerContainer:{
      
       
      
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       alignContent:'center',
       height:60,
       borderBottomColor:'blue',
       borderBottomWidth:2,
       borderBottomEndRadius:2
       
       
      
    },

    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-evenly",
        alignContent:'center'
        
    },
    

    logo:{
        
        width:100,
        height: 50,
    },
    logoImage:{
     width:40,
     marginRight:15,
     
     height:40
    },
    unreadbedge:{
        backgroundColor:'red',
        position:'absolute',
        left:20,
        bottom:28,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        zIndex:100
        
       
    },
    unreadbedgeImage:{
     color:'white',
     fontWeight:'bold'
    }
})