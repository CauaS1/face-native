import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

import TopBar from '../TopBar.js';

const Config = (props) => {
  return (
    <View style={styles.container}>
      <TopBar bar={props.bar} />

      <View style={styles.config}>
        <View style={styles.twoConfig}>
          <TouchableOpacity style={styles.backgroundConfig} >
            <Text style={styles.btn}>Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backgroundConfig}>
            <Text style={styles.btn}>All Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    backgroundColor: '#fff'
  },

  //config
  config: {
    flexDirection: "row",
    margin: 14,
    marginTop: 0
  },
  twoConfig: {
    flexDirection: "row",
    width: 210,
    justifyContent: "space-between" ,
    alignItems: "center"
  },
  backgroundConfig: {
    width: 100,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#e5e6eb",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 5
  },
  btn: {
    fontSize: 16,
    color: "#050505",
    fontWeight: "bold"
  }
})

export default Config;