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
        <View>
            <FlatList data={songs} renderItem={({item}) => (
                <View>
                    {item.yoast_head_json?.og_image !== undefined && (
                    <Image
                      style={styles.image}
                      source={{
                        uri: `${item.yoast_head_json.og_image[0].url}`,
                      }}
                    />
                  )}
                    <Text>
                        <Text style={styles.title}>{item.title.rendered}</Text>
                        
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("songsDetail", {itemTitle: item.title.rendered, itemArtist: item.yoast_head_json.og_description})}>
                        <Text>Bekijk product</Text>
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
        width: 400,
        height: 400,
        
    },
    title: {
        fontWeight: "bold",
    }
})