import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback, TouchableOpacity} from 'react-native';



//


const Detailscreen = (props) =>{


    return (
        <View style={styles.boxDetails}>
            <Image 
                style={{width:'100%', height:400, zIndex: -1}} 
                source={{uri: `${props.image}`}}
                
            />
            <View style={styles.info}>
                <Text style={styles.titleDetail}>{props.title}</Text>
                <Text style={styles.artistDetail}>{props.artist}</Text>
            </View>

           
            



            

        </View>
    );
}


export default Detailscreen;

const styles = StyleSheet.create ({

    boxDetails: {
        backgroundColor: "#010B12",
        height: '79%'
        
    
    },

    titleDetail: {
        fontSize: 24,
        color: "#f5f5f5",
        paddingTop: 0,
        paddingBottom: 20,
        fontWeight: "bold",
    },
    info: {
        marginTop: -5,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#010B12",
        borderRadius: 5,
        width: '100%',
        
        paddingBottom: 20,
        
    },
    artistDetail: {
        color: "#f5f5f5",
        fontSize: 18,
    },
    buttonReactions: {
        alignItems: 'center',
        marginTop: 50,
        
    }, 
 
   
});