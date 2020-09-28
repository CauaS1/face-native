import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Config from '../components/Friends/ConfigSection';

import { Avatar, Icon } from 'react-native-elements';

import Modal from 'react-native-modal';

const FriendItem = ({ item, onPressPhoto }) => {
  const [requested, setRequested] = React.useState(false)
  return (
    <View style={{backgroundColor: "#fff"}}>
      <View style={styles.peopleContainer}>
        <TouchableOpacity onPress={() => console.log('nothing by now')}>
          <Image source={item.photo} style={styles.photo} />
        </TouchableOpacity>
        <View style={styles.geralContent}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.buttonContainer}>
            {!requested ?
              <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={[styles.button, styles.add]} onPress={() => setRequested(true)}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Friend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.remove]} 
                  onPress={() => setRequested(false)} 
                >
                  <Text style={{ color: "#050505", fontWeight: "bold" }}>Remove</Text>
                </TouchableOpacity>
              </View>
              :
              <TouchableOpacity style={[styles.button, styles.remove, styles.removeBig]} onPress={() => setRequested(false)} >
                <Text style={{ color: "#050505", fontWeight: "bold" }}>Remove Request</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </View>
  )
}




export default class Friends extends Component {
  state = {
    visible: false,
    userInfo: null,
    data: this.props.info
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

  removeSuggestion = id => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    })
  }

  onPressPhoto = ({ visible, userInfo }) => { //thy to do it later
    if (visible === undefined) {
      return null
    } else {
      return (
        <Modal
          isVisible={visible}
          swipeDirection="down"
          backdropColor="#000"
          style={styles.bottomModal}
        >
          <View style={modal.modalContainer}>
            {userInfo && (
              <View style={modal.header}>
                <Avatar
                  rounded
                  source={userInfo.photo}
                  size={100}
                />
                <View style={modal.about}>
                  <Text style={modal.name}>{userInfo.name}</Text>
                  <Text style={{ color: '#626971' }}>{userInfo.bio}</Text>
                </View>
              </View>
            )}

            {userInfo && (
              <View style={modal.followers}>
                <TouchableOpacity style={modal.followersView}>
                  <Text style={modal.followBold}>Friends</Text>
                  <Text>{userInfo.friends}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={modal.followersView}>
                  <Text style={modal.followBold} >Followed by</Text>
                  <Text> {userInfo.followers} </Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={modal.buttonsContainer}>
              <TouchableOpacity style={modal.button}>
                <Text>Add Friend</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[modal.button, modal.buttonTrash]} onPress={() => console.log('das')} >
                <Icon type="font-awesome" color="#1a76f6" size={18} name="trash" />
              </TouchableOpacity>

              <TouchableOpacity style={modal.button}>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
          renderItem={({ item }) => <FriendItem item={item} /*onPressPhoto={this.onPressPhoto}*/ />}
        />

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
    backgroundColor: "#fff"
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
    alignItems: 'flex-start',
  },

  //Peoples
  peopleContainer: {
    flexDirection: "row",
    margin: 15,
    marginTop: 5,
    marginBottom: 5,
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
    width: "43%",
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