import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ListItem = (data) =>{
    
    const user = data.users[1];
    const navigation = useNavigation();

    const onClick =()=>{
        console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom',{
            id:chatRoom.id,
            name:user.name,
        });
    }
    return(
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Image source={{uri:user.imageUri}} style={styles.avatar}/>
        <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
    </View>
            {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
            <Text style={styles.time}>Yesterday</Text>
        </View>
    </TouchableWithoutFeedback>
    )
};



export default ListItem;



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding:10,
    },
    midContainer:{
        justifyContent: 'space-around',
    },
    leftContainer:{

        flexDirection: 'row',
    },
    
    
    avatar:{
        width: 60,
        height:60,
        backgroundColor: 'orange',
        marginRight: 10,
        borderRadius:50,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 16

    },
    lastMessage:{
        fontSize: 15,
        color: 'grey',
        
    },
    time:{
        fontSize: 14,
        color: 'grey'
    }
    
})