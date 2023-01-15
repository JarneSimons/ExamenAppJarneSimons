import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable, Button, TouchableNativeFeedback, TouchableOpacity,} from 'react-native';
import Detailscreen from '../components/detailScreen';


const SongsDetail = ({navigation, route}) =>{



    return(

      <View style={styles.containerDetails}>
        
          <Detailscreen
            title={route.params.itemTitle}
            image={route.params.itemImage}
            artist={route.params.itemArtist}
            style={styles.screenStyle}
          />


          <TouchableOpacity 
          onPress={() => navigation.navigate("playSongs")}>

            <View style={styles.playIcon}>
              <Text style={styles.playSong}>Play song</Text>
              <Image 
                style={{width: 50, height: 50}}
                source={require("../assets/images/playIcon.png")}
                
              />
            </View>

          </TouchableOpacity>




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
    paddingLeft: 80,
    paddingRight: 80,
    marginTop: 50,
    marginRight: 10,
}, 
containerDetails: {
  backgroundColor: "#010B12",
  height: '100%'
}, 
buttonReactions:{
  alignItems: 'center',
  zIndex: 2,
  top: -60
},

playIcon: {
  top: -40,
  marginLeft: 110
  
}, 
playSong:{
  color:"#f5f5f5",
  fontSize: 24,
  left: 65,
  top: 40,
}







});