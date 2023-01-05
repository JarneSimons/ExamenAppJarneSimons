import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, Button, TouchableNativeFeedback, TouchableOpacity,} from 'react-native';
import Detailscreen from '../components/detailScreen';


const SongsDetail = ({navigation, route}) =>{

   /* scherm zonder component
    return(
        
      <View style={styles.boxTitle}>
          <Text style={styles.detailTitle}>
            {route.params.itemTitle}
          </Text>

          <Text>
            {route.params.itemArtist}
          </Text>

          <Image style={{width:300, height:200}} source={{uri: `${route.params.itemImage}`}}/>
            
        
        </View>
    );*/

    return(
      <View>
        <Detailscreen
          title={route.params.itemTitle}
          image={route.params.itemImage}
          artist={route.params.itemArtist}
        />

        
          <TouchableOpacity 
            style={styles.buttonReactions} 
            onPress={() => navigation.navigate("reactions")}
            >
            <Text style={styles.textButton}>Leave a reaction</Text>
          </TouchableOpacity>
        
      

      </View>

        
    );



}

export default SongsDetail;

const styles = StyleSheet.create ({
  textButton: {
    borderRadius: 5,
    color: "#010B12",
    fontSize: 18,
    backgroundColor:"#39FF13",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 88,
    paddingRight: 88
}
});