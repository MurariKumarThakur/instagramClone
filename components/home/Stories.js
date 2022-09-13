import React from 'react'
import {View,Text, ScrollView,Image,StyleSheet} from 'react-native'
import { USERS } from './data/users'
import { LinearGradient } from "expo";
const Stories = () => {
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((user,index)=>(
          <View>     
       <Image style={styles.imageStyle} source={{uri:user.image}} />
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.userName}>{user.user}</Text>  
           </View>    
            ))}
        

        </ScrollView>
 
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    imageStyle:{
        width:80,
        height:80,
        borderRadius:100,
        margin:3,
        borderColor:"red",
        borderWidth:3
        
    },
    userName:{
    width:50,
    marginLeft:23,
  
overflow: 'hidden',
textOverflow: 'ellipsis'
}
    
})