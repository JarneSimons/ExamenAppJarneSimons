import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';
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

      </View>
    );



}

export default SongsDetail;

