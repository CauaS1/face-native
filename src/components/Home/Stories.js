import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Stories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.storiesContianer}>
        <View style={styles.stories}>
          <Image source={require('../../img/profile.png')} style={styles.stories} />
          <View style={styles.create}>
            <Text style={styles.text}>Create a Story </Text>
          </View>
          <View style={styles.plusButton}>
            <AntDesign name="plus" size={23} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#ccc"
  },

  storiesContianer: {
    margin: 15
  },

  stories: {
    width: 100,
    height: 180,
    borderRadius: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: '#ccc',

  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  create: {
    width: 99,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 8,
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: -1,
  },

  text: { 
    fontWeight: "bold",
    color: "#5e5f61", 
    alignItems: "center",
    justifyContent: "center",
  },

  plusButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#f5f5f5",
    backgroundColor: "#1877f3",
    bottom: 38,
    left: 33,
    position: "absolute"
  }
})

export default Stories;