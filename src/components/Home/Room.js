import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Room = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rooms}>
      <TouchableOpacity style={styles.createRoom}>
        <MaterialCommunityIcon name="video-plus" size={32} color="#8258ea" />
        <Text style={styles.text} >Create Room</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
    borderBottomWidth: 5, 
    borderBottomColor: "#ccc",
    backgroundColor:"#fff"

  },

  createRoom: {
    width: 140,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    borderColor: "#d4e3f8",
    alignItems: "center",
    justifyContent: 'center'
  },

  text: {
    color: "#2d70d1", 
    marginLeft: 5, 
    fontWeight: 'bold'
  },
  rooms: {
    flexDirection: "row",
    margin: 10
  }
})

export default Room;