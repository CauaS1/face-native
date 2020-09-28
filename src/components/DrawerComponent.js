/*import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerItem,  DrawerContentScrollView,} from '@react-navigation/drawer';
import {  useTheme,  Avatar, Button, Title, Caption,  Paragraph,  Drawer, TouchableRipple, Switch, } from 'react-native-paper'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerComponent = (props) => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={150} source={require('../img/profile.png')} style={{ marginTop: 30 }} />

      <Text style={styles.name} >CauaS1</Text>

      <View style={styles.listSection}>
        <Button icon="home" mode="outlined" color="#bbb" >Home</Button>
        <Button icon="newspaper" mode="outlined" color="#bbb" >Workspace</Button>
        <Button icon="school" mode="outlined" color="#bbb" >School</Button>
        <Button icon="city" mode="outlined" color="#bbb" >Hometown</Button>
        <Button icon="heart" mode="outlined" color="#bbb" >Relationship Status</Button>
      </View>

      <Button icon="logout" mode="text" color="#bbb"> Log Out</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
  },

  listSection: {
    width: "100%",
    flexDirection: 'column',
    alignContent: "flex-start",
    justifyContent: 'flex-start'
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#050505"
  }
})

export default DrawerComponent;*/

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Button,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export default function DrawerContent(props) { //If there was a error like ...render Drawer.View you need do an Export Default
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image source={require('../img/profile.png')} size={55} />
            <View style={styles.name}>
              <Title style={styles.title}>CauaS1</Title>
              <Caption style={styles.caption} >Caua Souza</Caption>
            </View>
          </View>


          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>856</Paragraph>
              <Caption style={styles.caption} >Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>1980</Paragraph>
              <Caption style={styles.caption} >Friends</Caption>
            </View>
          </View>
        </View>

        <View style={styles.about} >
          <Drawer.Section title="About">
            <DrawerItem icon={({ color, size }) => (
              <FontAwesome5
                name="home"
                color={color}
                size={size}
              />
            )}
              label="City"
              onPress={() => { }} />

            <DrawerItem icon={({ color, size }) => (
              <FontAwesome5
                name="suitcase"
                color={color}
                size={size}
              />
            )}
              label="Workspace"
              onPress={() => { }} />

            <DrawerItem icon={({ color, size }) => (
              <FontAwesome5
                name="school"
                color={color}
                size={size}
              />
            )}
              label="School"
              onPress={() => { }} />

            <DrawerItem icon={({ color, size }) => (
              <FontAwesome5
                name="city"
                color={color}
                size={size}
              />
            )}
              label="Hometown"
              onPress={() => { }} />

            <DrawerItem icon={({ color, size }) => (
              <FontAwesome5
                name="heart"
                solid
                color={color}
                size={size}
              />
            )}
              label="Relationship Status"
              onPress={() => { }} />
          </Drawer.Section>
        </View>

        <Button icon="logout" mode="text" color="#ccc" style={styles.logout} onPress={() => { props.navigation.navigate('Login') }}>
          Logout
        </Button>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: 30
  },
  userInfoSection: {
    paddingLeft: 20,
    flexDirection: "row"
  },
  name: {
    marginLeft: 12,
    justifyContent: "center"
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 5
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  section: {
    flexDirection: "row",
  },

  //about -----  
  about: {
    marginTop: 30,
  },

  //logout
  logout: {
    marginTop: "30%"
  }


});