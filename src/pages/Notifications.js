import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, YellowBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import TopBar from '../components/TopBar';
import { Icon, Avatar } from 'react-native-elements';

YellowBox.ignoreWarnings([
  'Avatar.accessory', // remove warning about avatar acessory be removed
])

const ProfileIcon = ({ item }) => { //after try to do something here
  const [requested, setrequested] = React.useState(false)
  return (
    <View>
      {!requested ?
        <TouchableOpacity style={styles.sections} onPress={() => setrequested(true)} >
          <View style={styles.content} >
            <View>
              <Avatar source={item.photo} size={styles.photos} size={80} rounded />
              <View style={styles.iconOnProfile}>
                {item.type === 'Friend' ? (
                  <Icon name="user" type="font-awesome" size={18} color="#fff" />
                ) :
                  (
                    <Icon name="users" type="font-awesome" size={18} color="#fff" />
                  )
                }
              </View>
            </View>

            <View>
              {item.type === 'Friend' ? (
                <Text style={styles.recommend}>You have a new friends suggestions:<Text style={{ fontWeight: 'bold' }}> {item.name} </Text> </Text>
              ) :
                (
                  <Text style={styles.recommend}>You have a new post to see on:<Text style={{ fontWeight: 'bold' }}> {item.name} </Text> </Text>
                )
              }
              <Text style={styles.data}> {item.data} </Text>
            </View>
            <Icon name="ellipsis-h" type="font-awesome" size={20} color="#050505" />
          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.sectionWhite}>
          <View style={styles.content} >
            <View>
              <Avatar source={item.photo} size={styles.photos} size={80} rounded />
              <View style={styles.iconOnProfile}>
                {item.type === 'Friend' ? (
                  <Icon name="user" type="font-awesome" size={18} color="#fff" />
                )
                  : (
                    <Icon name="users" type="font-awesome" size={18} color="#fff" />
                  )
                }
              </View>
            </View>

            <View>
            {item.type === 'Friend' ? (
                <Text style={styles.recommend}>You have a new friends suggestions:<Text style={{ fontWeight: 'bold' }}> {item.name} </Text> </Text>
              ) :
                (
                  <Text style={styles.recommend}>You have a new post to see on:<Text style={{ fontWeight: 'bold' }}> {item.name} </Text> </Text>
                )
              }
              <Text style={styles.data}> {item.data} </Text>
            </View>
            <Icon name="ellipsis-h" type="font-awesome" size={15} color="#050505" />
          </View>
        </TouchableOpacity>
      }
    </View>
  );
}

export default class Notifications extends Component {

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
          renderItem={({ item }) => <ProfileIcon item={item} />}
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

  sectionWhite: {
    backgroundColor: "#fff",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 8
  },
  photos: {
    position: "relative",
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
    width: 28,
    height: 28,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: '#1999f5',
    bottom: 0,
    right: 0
  }
})