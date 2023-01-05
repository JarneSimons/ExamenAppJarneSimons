import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, TouchableNativeFeedback,} from 'react-native';


const Songs = ({navigation}) =>{//

    const [songs, setSongs] = useState ([]);
    const [likes, setLikes] = useState (0);

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

    return(
        <View style={styles.home}>

            <TextInput placeholder='search songs' style={{marginTop: 10, fontSize: 16, backgroundColor: "#f5f5f5", marginLeft: 30, marginRight: 30, borderRadius: 5, paddingLeft: 10, paddingTop: 5,paddingBottom:5}}/>

            

            <View style={styles.boxLikes}>
                <Text style={styles.likeCounter}>{likes}</Text>
                <Image style={styles.like} source={require('../assets/images/like.png')}/>
            </View>
            
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
                    <Pressable onPress={()=> navigation.navigate("songsDetail", {itemTitle: item.title.rendered, itemArtist: item.yoast_head_json.og_description, itemImage: item.yoast_head_json.og_image[0].url})}>
                        <Text style={styles.buttons}>Bekijk nummer</Text>
                    </Pressable>

                    <Pressable style={styles.likeButton} onPress={()=> addLike()}>
                        <Text style={styles.likeClick}>like song</Text>
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
        borderRadius: 5,
        
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
        backgroundColor: "#1e1f21",
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
        backgroundColor: "#010B12",
    },
    buttons: {
        backgroundColor:"#39FF13",
        paddingLeft: 88,
        paddingRight: 88,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        borderRadius: 7,
        color: "#010B12",
        fontSize: 18,
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    like: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    likeButton: {
        padding: 20,
        
        
        
    },
    likeCounter: {
        color: "#f5f5f5",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: "72%",
        zIndex: 1,
        marginTop: 17,
        marginRight: 10,
        
        
        
        
    },
    boxLikes: {
        
        flexDirection: "row",
        marginTop: 5,
    },
    likeClick: {
        color: "#f5f5f5",
        fontSize: 16,
        fontWeight: "bold",
        
    }

});