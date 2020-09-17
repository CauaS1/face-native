import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';

import Config from '../components/Friends/ConfigSection';

import { Avatar, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

export default class Friends extends Component {
  state = {
    visible: false,
    userInfo: null,
    requested: null
  }

  topComponents() {
    let FriendsBar = this.props.bar
    return (
      <View>
        <Config bar={FriendsBar} />


        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>People You May Know</Text>
          </View>
        </View>
      </View>
    );
  }

  buttonAdd() {
    if (this.state.requested === null) {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.add]} onPress={() => this.setState({ requested: true })}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Friend</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.remove]}>
            <Text style={{ color: "#050505", fontWeight: "bold" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      )
    } else if (this.state.requested === true) {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.remove, styles.removeBig]} onPress={() => this.setState({ requested: false })} >
            <Text style={{ color: "#050505", fontWeight: "bold" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.add]} onPress={() => this.setState({ requested: true })}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Friend</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.remove]}>
            <Text style={{ color: "#050505", fontWeight: "bold" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    const inform = this.props.info
    return (
      <View>
        <FlatList
          data={inform}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={this.topComponents()} //with the ListHeaderComponent the components will not repeat  
          renderItem={({ item }) => (
            <View style={styles.peopleContainer}>
              <TouchableOpacity onPress={() => this.setState({ visible: true, userInfo: item })}>
                <Image source={item.photo} style={styles.photo} />
              </TouchableOpacity>
              <View style={styles.geralContent}>

                <Text style={styles.name}>{item.name}</Text>
                {this.buttonAdd()}
              </View>
            </View>
          )}
        />

        <Modal
          isVisible={this.state.visible}
          swipeDirection="down"
          scrollTo="top"
          backdropColor="#000"
          style={styles.bottomModal}
        >
          <View style={modal.modalContainer}>
            {this.state.userInfo && (

              <View style={modal.header}>
                <Avatar
                  rounded
                  source={this.state.userInfo.photo}
                  size={100}
                />
                <View style={modal.about}>
                  {console.log(this.state.userInfo)}
                  <Text style={modal.name}>{this.state.userInfo.name}</Text>
                  <Text style={{ color: '#626971' }}>{this.state.userInfo.bio}</Text>
                </View>
              </View>
            )}

            {this.state.userInfo && (
              <View style={modal.followers}>
                <TouchableOpacity style={modal.followersView}>
                  <Text style={modal.followBold}>Friends</Text>
                  <Text>{this.state.userInfo.friends}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={modal.followersView}>
                  <Text style={modal.followBold} >Followed by</Text>
                  <Text> {this.state.userInfo.followers} </Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={modal.buttonsContainer}>
              <TouchableOpacity style={modal.button}>
                <Text>Add Friend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[modal.button, modal.buttonTrash]} onPress={() => this.setState({ visible: false })} >
                <Icon type="font-awesome" color="#1a76f6" size={18} name="trash" />
              </TouchableOpacity>

              <TouchableOpacity style={modal.button}>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


      </View>
    );
  }
}

const modal = StyleSheet.create({
  modalContainer: {
    width: "100%",
    backgroundColor: '#fff',
    height: 240,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  header: {
    width: "85%",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  about: {
    margin: 5,
    marginLeft: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  //followers
  followers: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },
  followersView: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: "#ccc"
  },
  followBold: {
    fontWeight: "bold",
    fontSize: 16
  },

  //buttons
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    width: 140,
    padding: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTrash: {
    width: 50,
  }



})

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    margin: 14
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#050505"
  },

  geralContent: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  //Peoples
  peopleContainer: {
    flexDirection: "row",
    margin: 15,
    marginTop: 5,
    marginBottom: 5

  },
  photo: {
    width: 85,
    height: 85,
    borderRadius: 50
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5

  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 115,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  add: {
    backgroundColor: "#1a76f6",
    marginRight: 10
  },
  remove: {
    backgroundColor: '#e5e6eb'
  },
  removeBig: {
    width: 230,
  },

  //modal
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
})