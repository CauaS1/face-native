import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, YellowBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import TopBar from '../components/TopBar';
import { Icon, Avatar } from 'react-native-elements';

YellowBox.ignoreWarnings([
  'Avatar.accessory', // remove warning about avatar acessory be removed
])

export default class Notifications extends Component {

  profileIcon() { //after try to do something here
    const types = this.props.notific;
    const onlyType = types.map((tp) => {
      if (tp.type === "Friend") {
        return (
          <View style={styles.iconOnProfile}>
            <Icon name="user-alt" type="font-awesome-5" size={16} color="#fff" />
          </View>
        )
      } else {
        return (
          <View style={styles.iconOnProfile}>
            <Icon name="users" type="font-awesome-5" size={16} color="#fff" />
          </View>
        )
      }
    })
    return onlyType
  }

  render() {
    const NotificBar = this.props.bar
    const AllNotific = this.props.notific

    return (
      <View style={styles.container}>
        <FlatList
          style={{ marginTop: 10 }}
          data={AllNotific}
          ListHeaderComponent={<TopBar bar={NotificBar} />}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.sections}>
              <View style={styles.content} >
                <View>
                  <Avatar source={item.photo} size={styles.photos} size={80} rounded />
                  {this.profileIcon()}
                </View>

                <View>
                  <Text style={styles.recommend}>You habe a new friends suggestions:<Text style={{ fontWeight: 'bold' }}> {item.name} </Text> </Text>
                  <Text style={styles.data}> {item.data} </Text>
                </View>
                <Icon name="ellipsis-h" type="font-awesome" size={20} color="#050505" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: -10,
    flexDirection: "column",
  },
  sections: {
    backgroundColor: "#e7f3ff"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8
  },
  photos: {
    position: "relative"
  },


  data: {
    color: "#626971",
    marginTop: 2
  },
  recommend: {
    width: 190,
    fontSize: 16
  },

  iconOnProfile: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: '#1999f5',
    bottom: 0,
    right: 0
  }
})