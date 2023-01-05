import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback,} from 'react-native';

import SearchFilter from '../components/searchFilter';


const Songs = ({navigation}) =>{//

    const [songs, setSongs] = useState ([]);
    

    const getSongs = async () => {
        try {
            const response = await fetch ("https://jarnesimons.be/wp-json/wp/v2/posts?categories=10", {

            })
            const json = await response.json();
            setSongs(json);
            console.log(songs);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSongs();
    }, []);


    const addLike = () => {
        console.log("button pressed");
        setLikes((currentLikes) => currentLikes+1)
    };

    const [input, setInput] = useState("");
    console.log(input);

    return(
        <View style={styles.home}>

            <View style={styles.boxSearchbar}>
                <TextInput
                    value={input}
                    onChangeText={(text) => setInput(text)} 
                    placeholder='search songs' 
                    style={{fontSize: 18}}
                />

            </View>

            <SearchFilter data={songs} input={input} setInput={setInput} navigation={navigation}/>

            
            

            
        </View>
    );
}



export default Songs;


const styles = StyleSheet.create({
    home: {
        backgroundColor: "#010B12",
      },
    
    boxSearchbar: {
        marginTop: 10,
        fontSize: 16, 
        backgroundColor: "#f5f5f5", 
        marginLeft: 30, 
        marginRight: 30, 
        borderRadius: 5, 
        paddingLeft: 10, 
        paddingTop: 5,
        paddingBottom:5,
    }
    

});