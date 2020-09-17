import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

// import { Container } from './styles';

export default class Start extends Component {
  button() {
    return( //error here
      <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Initial')  }}> 
        <Text style={{ fontWeight: "bold", color: "#fff" }} >Log In</Text>
      </TouchableOpacity>
    );
  }

  createAccount() {
    return(
      <TouchableOpacity style={styles.createAcc}>
        <Text style={styles.account}>Create New Facebook Account</Text>
      </TouchableOpacity>
    );
  }
  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <Image  style={styles.img} source={require('../img/face-logo.png')} />
          <TextInput placeholder="Email" style={styles.inputs} />
        <TextInput placeholder="Password" style={styles.inputs} />

        { this.button() }
        </View>
        { this.createAccount() }
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      marginTop: 40,
      marginBottom: 40, 
      alignItems: "center" 
    },
    img: {
      width: 70,
      height: 70,
      margin: 10  
    },
    inputs: {
      width: 280,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      padding: 10,
      paddingLeft: 5,
      fontSize: 16
    },

    button: {
      width: 280,
      height: 40,
      padding: 5,
      backgroundColor: "#1877f3",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5 ,
      marginTop: 15
    },

    form: {
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },

    account: {
      color: "#1877f3" ,
      fontWeight: "bold",
      fontSize: 15,
    }
})

