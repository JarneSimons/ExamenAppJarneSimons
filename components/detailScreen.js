import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';

const Detailscreen = props =>{
    return (
        <View style={styles.boxDetails}>
            <Image 
                style={{width:415, height:415}} 
                source={{uri: `${props.image}`}}
            />
            <View>
                <Text style={styles.titleDetail}>{props.title}</Text>
                <Text >{props.artist}</Text>
            </View>
            

        </View>
    );
}


export default Detailscreen;

const styles = StyleSheet.create ({

    boxDetails: {
        
    },

    titleDetail: {
        alignItems: 'center',
        fontSize: 24,
    }
});