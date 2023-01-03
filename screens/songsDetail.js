import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, FlatList, Image, TextInput, Pressable,} from 'react-native';


const SongsDetail = ({navigation, route}) =>{

    
    return(
        <View>
          <Text>
            {route.params.itemTitle}
          </Text>

          <Text>
            {route.params.itemArtist}
          </Text>
        
        </View>
    );
}

export default SongsDetail;