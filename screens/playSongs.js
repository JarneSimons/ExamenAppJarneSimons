import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback, TextComponent, TouchableOpacity, ActivityIndicator} from 'react-native';


const PlaySongs = (route, data) => {
    return(
        <View style={styles.boxIndicator}>
            <ActivityIndicator style={styles.loadingStyle} size={"large"} color="#39FF13"/>

            
            <View>
                <Text style={styles.textStyling}>
                    Oops something went wrong! Please go back to the previous page.
                </Text>
            </View>



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
        marginTop: 50
    }

})