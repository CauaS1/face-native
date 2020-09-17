import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width

import YourPost from '../components/Home/YourPost';
import Room from '../components/Home/Room';
import Stories from '../components/Home/Stories';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <YourPost />
        <Room />
        <Stories />

        <View style={styles.post}>

          <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require('../img/toby.jpg')} style={styles.profileImg} />
              <View style={styles.nameEhour}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Toby Christopher</Text>
                <Text style={{ color: "#666" }}>1h · <Fontisto name="earth" size={14} color="#666" /> </Text>
              </View>
            </View>
            <MaterialCommunity name="dots-horizontal" size={26} color="#6a6a6c" />
          </View>

          <View style={styles.about}>
            <Text style={{ fontSize: 16 }}>Thanks Warren Wong for the Picture</Text>
          </View>

          <View style={styles.postImageContainer}>
            <Image source={require('../img/warren.jpg')} style={styles.postImage} />
          </View>

          <View style={styles.reactions}>
            <TouchableOpacity style={styles.icons}>
              <Icon name='heart' type='font-awesome' color="#eb3146" size={20} />
              <Icon name='thumbs-up' type='font-awesome' color="#135cee" size={20} />
              <Icon name='grin-stars' type='font-awesome-5' color="#ffd449" size={20} solid={true} />
              <Text style={styles.text}>1.5k</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activite}>
              <Text style={styles.text}>
                859 Comments · 158 Shares
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    width: "100%",
    height: 550,
  },
  header: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameEhour: {
    flexDirection: "column"
  },

  // about
  about: {
    margin: 10,
    marginLeft: 15
  },

  //post image container
  postImageContainer: {
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  postImage: {
    width: "100%",
    height: 400,
    justifyContent: 'center',
    alignItems: "center",
    resizeMode: "contain",
    backgroundColor: "#000"
  },

  //reactions
  reactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: 'center',
  },
  icons: {
    flexDirection: "row",
    alignItems: "center"
  },
  activite: {
    alignItems: "center",
    flexDirection: 'row'
  },
  text: {
    color: "#6a696e"
  }
})