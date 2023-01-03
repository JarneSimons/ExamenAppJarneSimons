import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';


const Songs = ({navigation}) =>{

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

    return(
        <View style={styles.home}>
            <FlatList data={songs} renderItem={({item}) => (
                <View style={styles.numbers}>
                    {item.yoast_head_json?.og_image !== undefined && (
                    <Image
                      style={styles.image}
                      source={{
                        uri: `${item.yoast_head_json.og_image[0].url}`,
                      }}
                    />
                  )}
                    <Text style={styles.boxTitle}>
                        <Text style={styles.title}>{item.title.rendered}</Text>
                        
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("songsDetail", {itemTitle: item.title.rendered, itemArtist: item.yoast_head_json.og_description})}>
                        <Text style={styles.buttons}>Bekijk nummer</Text>
                    </Pressable>
                </View>
                
                
            )}>
            </FlatList>
        </View>
    );
}



export default Songs;


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        
        
    },
    title: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#f5f5f5",
        
        
    },
    boxTitle: {
        marginTop: 20,
        marginBottom: 20,
    },  

    numbers: {
        backgroundColor: "#212226",
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 30,
        marginRight:30,
        marginLeft: 30,
        borderRadius: 5,
    },
    home: {
        backgroundColor: "#f5f5f5",
        
    },
    buttons: {
        backgroundColor:"#4EF0B6",
        paddingLeft: 88,
        paddingRight: 88,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        borderRadius: 7,
        color: "#212226",
        fontSize: 18,
    },

});