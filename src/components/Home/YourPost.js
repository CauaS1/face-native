import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class YourPost extends Component {
  render() {
    return (
      <View style={{borderBottomWidth: 5,  borderBottomColor: "#ccc"}} >
        <View style={styles.mind}>

          <Image source={require('../../img/profile.png')} style={styles.photo} />
          <TextInput placeholder="What's on your mind?"
            style={styles.input}
            placeholderTextColor="#000"
          />
        </View>

        <View style={styles.components}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcon name="video-account" size={24} color="#f13b38" />
            <Text style={styles.text} >Live</Text>
          </TouchableOpacity>


          <TouchableOpacity style={[styles.button, styles.middleButton]}>
            <MaterialIcon name="photo-album" size={17} color="#84bb4d" />
            <Text style={styles.text} >Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcon name="video-plus" size={24} color="#8258ea" />
            <Text style={styles.text} >Room</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mind: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    padding: 15,
    borderBottomWidth: 0.5, 
    borderBottomColor: "#ccc"    
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    width: 265,
    height: 40,
    padding: 5,
    paddingLeft: 15,
    fontSize: 17
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  components: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 120,
    flexDirection: "row",
    alignItems: 'center' ,
    justifyContent: "center",
    padding: 5,
  },  
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc" 
  },
  text: {
    marginLeft: 5,
    fontSize: 15,
    color: "#5e5f61",
    fontWeight: "bold"
  }
})