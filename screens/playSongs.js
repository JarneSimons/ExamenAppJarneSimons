import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback, TextComponent, TouchableOpacity, ActivityIndicator} from 'react-native';


const PlaySongs = ({navigation, data}) => {
    return(
        <View style={styles.boxIndicator}>
            <ActivityIndicator style={styles.loadingStyle} size={"large"} color="#39FF13"/>

            
            <View>
                <Text style={styles.textStyling}>
                    Oops we couldn't load your song! Please go back to the home page and try again later.
                </Text>
            </View>

            <TouchableOpacity
                style={styles.btnGoback}
                onPress={() => navigation.navigate("Home")}
                >
                
                <Text style={styles.textBtn}>Home</Text>
            </TouchableOpacity>




        </View>

        
    )

};

export default PlaySongs;

const styles = StyleSheet.create ({
    boxIndicator:{
        backgroundColor: "#010B12",
        height: "100%",
        alignItems: 'center',
        
        
    }, 
    loadingStyle: {
        paddingTop: 150,
        
    }, textStyling: {
        color: "#f5f5f5",
        fontSize: 24,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 50,
        textAlign:'center'
    }, 
    btnGoback:{
        
        backgroundColor: "#39FF13",
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 120,
        paddingRight: 120,
        marginTop: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    textBtn:{
        color: "#010B12",
        fontSize: 18
    } 


})