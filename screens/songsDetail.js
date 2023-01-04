import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';


const SongsDetail = ({navigation, route}) =>{

    
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
    );
}

export default SongsDetail;

const styles = StyleSheet.create ({
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,

  },
  boxTitle: {
    alignItems: 'center',
  }

});