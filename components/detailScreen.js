import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';

const Detailscreen = props =>{
    return (
        <View>
            <Text>{props.title}</Text>
            <Image 
                style={{width:250, height:200}} 
                source={{uri: `${props.image}`}}
            />
            <Text >{props.artist}</Text>

        </View>
    );
}


export default Detailscreen;