import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import Messenger from 'react-native-vector-icons/Fontisto'
import Search from 'react-native-vector-icons/FontAwesome5'

export default class Friends extends Component {
  render() {
    return (
      <View style={styles.header}>

        <Text style={styles.title}>Facebook</Text>
        <View style={styles.components}>
          <TouchableOpacity style={styles.background}>
            <Search name="search" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.background}>
            <Messenger name="messenger" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 10,
    backgroundColor: '#fff',

  },
  title: {
    color: "#1877f3",
    fontWeight: "bold",
    fontSize: 25,
  },
  components: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    width: 80 
  },
  background: {
    width: 35,
    height: 35,
    backgroundColor: "#f1f2f6",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  }

})