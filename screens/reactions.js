import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback, TextComponent, TouchableOpacity} from 'react-native';


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
    const [ownReaction, setOwnReaction] = useState("");
    const [ownName, setOwnname] = useState("");


    const placeReaction = (enteredText) => {
        console.log(enteredText);
        setOwnReaction(enteredText);
    }


    const placeName = (enteredText) => {
        console.log(enteredText);
        setOwnname(enteredText);
    }
    
    const pressReaction = () => {
        let addReaction = {
            name: ownName,
            reaction: ownReaction
        };


        let addNewReaction = {
            name: addReaction.name,
            reaction: addReaction.reaction
        }



        setReactions((writtenReactions) => [...writtenReactions, addNewReaction])
        console.log(setReactions);
    }

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

        <View style={styles.boxOwnreaction}>
            <TextInput style={styles.ownName} placeholder='Your name' onChangeText={placeName}></TextInput>
            <TextInput style={styles.ownReaction} placeholder='Place your own reaction' onChangeText={placeReaction}></TextInput>
            <TouchableOpacity onPress={pressReaction} style={styles.styleButton}>
                <Text>Place reaction</Text>
            </TouchableOpacity>
        </View> 

        

        

    </View>
    )
}





export default Reactions;

const styles = StyleSheet.create ({


    reactionPage: {
        backgroundColor: "#010B12",
        alignItems: 'center',
        
    },
    reactionScreen: {
        color: "#f5f5f5",
        marginTop: 20,
        marginBottom: 20,
        
        
        fontSize: 18,
        
    },

    containerReactions: {
        backgroundColor: "#010B12",
        
        
        
    }, 
    nameReaction: {
        color: "#010B12",
        fontWeight: "bold"

    }, 
    reactionStyle: {
        color: "#010B12"
    }, 
    boxReactions:{
        backgroundColor: "#f5f5f5",

        /*borderBottomColor:"black",
        borderBottomWidth: 2,*/

        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 5,
        
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    }, 
    ownReaction:{
        width: 340,
        height: 110,
        borderRadius: 5,
        backgroundColor: "white",
        paddingLeft: 10,
        paddingBottom: 70,
        
    },
    ownName:{
        width: 340,
        height: 30,
        borderRadius: 5,
        backgroundColor: "white",
        paddingLeft: 10,
        marginBottom: 10
        
    },
    
    
    boxOwnreaction:{
        height: "60%",
        alignItems: 'center',
        marginTop: 50,
        
    }, 
    styleButton: {
        backgroundColor: "#39FF13",
        marginTop: 10,
        paddingLeft: 125,
        paddingRight: 125,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 5,
    } 
    
    
});