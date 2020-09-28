import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import firebase from 'firebase'
import 'firebase/auth';

export default class Start extends Component {
  state = {
    mail: '',
    password: '',
    message: ''
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyC1wwhxja1fUAD3FBK8CpjgB6SPwb9oZpc",
      authDomain: "face-react.firebaseapp.com",
      databaseURL: "https://face-react.firebaseio.com",
      projectId: "face-react",
      storageBucket: "face-react.appspot.com",
      messagingSenderId: "353914961184",
      appId: "1:353914961184:web:210d2ae0356d160d5a2b45",
      measurementId: "G-GLP18HZXCJ"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  message() {
    if (!this.state.message) {
      return null
    }

    return (
      <View style={styles.messageBox}>
        <Text style={{ color: '#050505' }} > {this.state.message} </Text>
      </View>
    )
  }

  loginAccount() {
    this.setState({ message: "" })
    const { mail, password } = this.state;

    const loginUserSuccess = user => {
      this.setState({ message: "Success" })
      this.props.navigation.navigate('MainContent')
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(loginUserSuccess)
      .catch(error => {
        this.setState({ message: error.code })
      })
  }

  createAccountButton() {
    return (
      <TouchableOpacity style={styles.createAcc} onPress={() => {
        this.props.navigation.navigate('Register')
      }} >
        <Text style={styles.account}>Create New Facebook Account</Text>
      </TouchableOpacity>
    );
  }

  button() {
    return ( //error here
      <TouchableOpacity style={styles.button}
        onPress={() => { this.loginAccount() }}>
        <Text style={{ fontWeight: "bold", color: "#fff" }} >Log In</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image style={styles.img} source={require('../img/face-logo.png')} />
          <TextInput placeholder="Email" style={styles.inputs}
            value={this.state.mail}
            onChangeText={value => this.onChangeHandler('mail', value)}
          />
          <TextInput placeholder="Password" style={styles.inputs}
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />

          {this.button()}
          {this.message()}
        </View>
        { this.createAccountButton()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  img: {
    width: 70,
    height: 70,
    margin: 10
  },
  inputs: {
    width: "90%",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 5,
    fontSize: 16
  },

  button: {
    width: "85%",
    height: 40,
    padding: 5,
    backgroundColor: "#1877f3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15
  },

  messageBox: {
    width: "65%",
    height: 40,
    backgroundColor: "#e5e6eb",
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },

  form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },

  account: {
    color: "#1877f3",
    fontWeight: "bold",
    fontSize: 15,
  }
})

