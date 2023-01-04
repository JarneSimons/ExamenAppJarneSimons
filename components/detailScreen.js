import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';

const Detailscreen = props =>{
    return (
        <View style={styles.boxDetails}>
            <Image 
                style={{width:'100%', height:400}} 
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
        paddingBottom: 310,
    },

    titleDetail: {
        alignItems: 'center',
        fontSize: 24,
        color: "#f5f5f5"
    },
    info: {
        
        marginTop: -10,
        borderRadius: 5,
        paddingTop: 30,
    },
    artistDetail: {
        color: "#f5f5f5"
    }
});