import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback, TextComponent} from 'react-native';



let writtenReactions = [
    {
        name: "Jarne Simons",
        reaction: "What a fantastic song!"
    }, 
    {
        name: "Bruno Mars",
        reaction: "I wish I wrote this song! This just makes me want to make new music. Great job!"
    }, 
    {
        name: "Pop Smoke",
        reaction: "I think the songs needs more bass"
    }
]


const Reactions = ({navigation}) => {
    
    return(

    <View style={styles.reactionPage}>
        
        <Text style={styles.reactionScreen}>pagina werkt</Text>

        

    </View>
    )
}





export default Reactions;

const styles = StyleSheet.create ({


    reactionPage: {
        backgroundColor: "#010B12",
        
    },
    reactionScreen: {
        color: "#f5f5f5",
    },
    
});