import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';

import TopBar from '../components/TopBar';
import HeaderStore from '../components/Store/HeaderStore';

const { width, height } = Dimensions.get('window');

const numberGrid = 2;

const itemWidth = width / numberGrid

export default class Store extends Component {
  state = {
    visible: false,
    userInfo: null
  }

  topComponents() {
    const MarketBar = this.props.bar;
    return (
      <View>
        <TopBar bar={MarketBar} />
        <HeaderStore />

        <View style={styles.today}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }} >Today's Picks</Text>
        </View>
      </View>
    );
  }

  modalContainer() {
    const info = this.state.userInfo;
    return (

      <Modal
        isVisible={this.state.visible}
      >
        <View style={modal.modalContainer}>
          <View style={modal.header}>
            {info && (
              <Image source={info.itemPhoto} style={modal.image} />
            )}

            {info && (
              <View style={modal.informations}>
                <Text style={modal.name}>{info.seller}</Text>
                <Text style={modal.price}>${info.price} </Text>
              </View>
            )}



          </View>

          {info && (
            <View style={modal.about}>
              <Text style={modal.textAbout} >{info.about}</Text>
            </View>
          )}

          {info && (
            <View>
              <Text style={modal.condition}>Condition: <Text style={{ fontWeight: "normal", fontSize: 15 }}>{info.condition}</Text> </Text>
            </View>
          )}


          <View style={modal.buttonSection}>
            <TouchableOpacity style={modal.button}>
              <Icon type="font-awesome-5" name="facebook-messenger" size={20} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[modal.button, modal.fvButton]}>
              <Icon type="font-awesome-5" name="bookmark" size={20} color="#050505" />
              <Text style={{ color: "#050505", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal >

    );
  }

  render() {
    const ItemsMarket = this.props.items;
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={ItemsMarket}
          numColumns={numberGrid}
          ListHeaderComponent={this.topComponents()}
          keyExtractor={item => item.price}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "#fff" }}>
              <TouchableOpacity style={styles.items}
                onLongPress={() => this.setState({ visible: true, userInfo: item })}
                delayLongPress={100}
                onPressOut={() => this.setState({ visible: false })}
              >
                <Image source={item.itemPhoto} style={styles.image} />
                <View style={styles.informations}>
                  <Text style={styles.price} > ${item.price} </Text>
                  <Text style={styles.city} >{item.city}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        { this.modalContainer()}
      </View>
    );

  }
}

const modal = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: height / 2,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  header: {
    width: "100%",
    height: "32%",
    flexDirection: 'row',
    justifyContent: "flex-start",
    marginLeft: 10,
    marginRight: 10,
    alignContent: "center"
  },
  image: {
    width: width / 2.8,
    height: "100%",
    borderRadius: 5
  },

  //Informations
  informations: {
    width: "80%",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 15,
  },

  //About
  about: {
    width: "85%",
    marginLeft: 10,
    height: "28%",
  },
  textAbout: {
    fontSize: 15,
    color: "#333"
  },
  condition: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16
  },

  //Buttons
  buttonSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    width: "48%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '#1a76f6',
    height: 40,
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30
  },
  fvButton: {
    backgroundColor: '#e5e6eb',
    paddingLeft: 40,
    paddingRight: 40
  }



})

const styles = StyleSheet.create({
  today: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  image: {
    width: itemWidth,
    height: itemWidth,
  },
  items: {
    marginBottom: 15,
  },

  informations: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  city: {
    fontSize: 15.5,
    color: '#626971'
  }
})