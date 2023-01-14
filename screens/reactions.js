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
        reaction: "I think the songs needs more bass."
    }
]



const Reactions = ({navigation}) => {

    

    const [reactions, setReactions] = useState(writtenReactions);
    
    
    

    return(

    <View style={styles.reactionPage}>
        
        <Text style={styles.reactionScreen}>Other reactions</Text>
        <FlatList 
        data={reactions} 
        style={{height: "100%", color: "red"}} 
        renderItem={({item}) =>(
            <View style={styles.containerReactions}>
                <View style={styles.boxReactions}>
                    <Text style={styles.nameReaction}>{item.name}</Text>
                    <Text style= {styles.reactionStyle}>{item.reaction}</Text>
                </View>
                
            </View>
        )}

        />
        

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

    containerReactions: {
        
    }, 
    nameReaction: {
        color: "black",
        fontWeight: "bold"

    }, 
    reactionStyle: {
        color: "black"
    }, 
    boxReactions:{
        backgroundColor: "#f5f5f5",

        /*borderBottomColor:"black",
        borderBottomWidth: 2,*/

        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    }
    
});