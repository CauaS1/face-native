import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

const Notifications = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> { props.bar } </Text>
      <TouchableOpacity style={styles.backgroundSearch}>
        <Icon name="search" type="font-awesome" size={25} color="#050505" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  
  backgroundSearch: {
    width: 47,
    height: 47,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#e5e6eb",
    borderRadius: 25
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#050505'
  },
})

export default Notifications;