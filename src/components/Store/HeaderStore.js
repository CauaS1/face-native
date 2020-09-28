import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

// import { Container } from './styles';

const HeaderStore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.backgroundItem, styles.backgroundItemIcon]}>
          <Icon name="user" type="font-awesome" size={20} color="#050505" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.backgroundItem}>
          <Text style={styles.text}>Sell</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backgroundItem}>
          <Text style={styles.text}>Local</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc"
  },

  content: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 10
   },

  backgroundItemIcon: {
    width: "20%",
    height: 40,
  },

  backgroundItem: {
    backgroundColor: "#e5e6eb",
    width: "36%",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  }
})
export default HeaderStore;
