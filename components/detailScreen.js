import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback} from 'react-native';

const Detailscreen = props =>{
    return (
        <View style={styles.boxDetails}>
            <Image 
                style={{width:'100%', height:400, zIndex: -1}} 
                source={{uri: `${props.image}`}}
                
            />
            <View style={styles.info}>
                <Text style={styles.titleDetail}>{props.title}</Text>
                <Text style={styles.artistDetail}>{props.artist}</Text>

                    <View style={styles.buttonReactions}>
                
                        <TouchableNativeFeedback onPress={console.log("button")}>
                            <Text style={styles.textButton}>Leave a reaction</Text>
                            </TouchableNativeFeedback>
                    </View>
            </View>
            
            

        </View>
    );
}


export default Detailscreen;

const styles = StyleSheet.create ({

    boxDetails: {
        backgroundColor: "#f5f5f5",
        alignItems: 'center',
    
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
        paddingBottom: 250,
    },
    artistDetail: {
        color: "#f5f5f5",
        fontSize: 18,
    },
    buttonReactions: {
        alignItems: 'center',
        marginTop: 50,
        
    }, 
    textButton: {
        borderRadius: 5,
        color: "#010B12",
        fontSize: 18,
        backgroundColor:"#39FF13",
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 88,
        paddingRight: 88
    }
   
});