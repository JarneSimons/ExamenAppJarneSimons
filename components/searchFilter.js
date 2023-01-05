import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  Pressable,
  TouchableNativeFeedback,
} from "react-native";

const searchFilter = ({ data, input, setInput, navigation }) => {
  const [likes, setLikes] = useState(0);

    const addLike = () => {
        console.log("button pressed");
        setLikes((currentLikes) => currentLikes+1)
    };
    
  return (
    <View>
      <View style={styles.boxLikes}>
        <Text style={styles.likeCounter}>{likes}</Text>
        <Image
          style={styles.like}
          source={require("../assets/images/like.png")}
        />
      </View>

      <FlatList
        ListFooterComponent={<View style={{height: 250}}></View>}
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
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
                <Pressable
                  onPress={() =>
                    navigation.navigate("songsDetail", {
                      itemTitle: item.title.rendered,
                      itemArtist: item.yoast_head_json.og_description,
                      itemImage: item.yoast_head_json.og_image[0].url,
                    })
                  }
                >
                  <Text style={styles.buttons}>Bekijk nummer</Text>
                </Pressable>

                <Pressable style={styles.likeButton} onPress={() => addLike()}>
                  <Text style={styles.likeClick}>like song</Text>
                </Pressable>
              </View>
            )
          } else if (item.title.rendered.toLowerCase().includes(input.toLowerCase())){
            return(
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
                <Pressable
                  onPress={() =>
                    navigation.navigate("songsDetail", {
                      itemTitle: item.title.rendered,
                      itemArtist: item.yoast_head_json.og_description,
                      itemImage: item.yoast_head_json.og_image[0].url,
                    })
                  }
                >
                  <Text style={styles.buttons}>Bekijk nummer</Text>
                </Pressable>

                <Pressable style={styles.likeButton} onPress={() => addLike()}>
                  <Text style={styles.likeClick}>like song</Text>
                </Pressable>
              </View>
            )
          }
        }}
      ></FlatList>
    </View>
  );
};

export default searchFilter;

{
  /* <View style={styles.numbers}>
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
                
            </View> */
}

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
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 30,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 5,
  },
  
  buttons: {
    backgroundColor: "#39FF13",
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
  },
});
