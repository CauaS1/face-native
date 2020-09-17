import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Icon, Badge } from 'react-native-elements';

import Start from './src/pages/Start';
import Header from './src/components/Header';
import Home from './src/pages/Home';
import Friends from './src/pages/Friends';
import Videos from './src/pages/Videos';
import Store from './src/pages/Store';
import Notifications from './src/pages/Notifications';

//Data

let info = [
  {
    name: "Etty Fidele",
    photo: require('./src/img/etty-fidele.jpg'),
    id: 1,
    friends: "1.5k",
    followers: "820",
    bio: "Be the best person <3"
  },
  {
    name: "Manny Moreno",
    photo: require('./src/img/manny-moreno.jpg'),
    id: 2,
    friends: "1.2k",
    followers: "250",
    bio: "Programming is life "
  },
  {
    name: "Daniel Lincon",
    photo: require('./src/img/daniel-lincon.jpg'),
    id: 3,
    friends: "3.7k",
    followers: "1.3k",
    bio: "Photographer"
  },
  {
    name: "Jane Erhunse",
    photo: require('./src/img/jeffery.jpg'),
    id: 4,
    friends: "1.1k",
    followers: "452",
    bio: "<3 Travelling around the Wolrd"
  },
  {
    name: "Sophia Resly",
    photo: require('./src/img/sophia-resly.jpg'),
    id: 5,
    friends: "5.9k",
    followers: "3.2k",
    bio: "React Native Delevoper"
  }
]

let allNotifications = [
  {
    name: "Nicole Wolf",
    photo: require('./src/img/nicole-dev.jpg'),
    data: "Sep 16 at 08:01",
    id: 1,
    friends: "1.5k",
    type: "Friend" 
  },
  {
    name: "React <Devs />",
    photo: require('./src/img/pc.jpg'),
    data: "Sep 16 at 03:05",
    id: 2,
    members: "126k",
    type: "Group"
  },
  {
    name: "Fernando Hernandez",
    photo: require('./src/img/fernando-hernandez.jpg'),
    data: "Sep 15 at 18:37",
    id: 3,
    friends: "5.5k",
    type: "Friend"
  },
  {
    name: "Barbara Dungan",
    photo: require('./src/img/barbara-dungan.jpg'),
    data: "Sep 13 at 02:51",
    id: 4,
    friends: "1k",
    type: "Friend" 
  },
  {
    name: "Unsplash",
    photo: require('./src/img/unsplash-logo.png'),
    data: "Sep 10 at 05:52",
    id: 5,
    members: "267k" ,
    type: "Group"
  }
]

let topFriends = 'Friends';
let topMarketplace = 'Marketplace';
let topNotifications = 'Notifications';

function StartScreen() {
  return <Start />
}

//TopTabs 

function HomePage() {
  return <Home />
}
function FriendsPage() {
  return <Friends info={info} bar={topFriends}  />
}
function VideosPage() {
  return <Videos />
}
function StorePage() {
  return <Store bar={topMarketplace} />
}
function NotificationsPage() {
  return <Notifications notific={allNotifications} bar={topNotifications} />
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() { //cafe of any error, delete Navigator container 
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator tabBarOptions={{
        showIcon: true,
        showLabel: false,
        style: {
          height: 50,
        },
        activeTintColor: "#1877f3",
        inactiveTintColor: "#ccc",
        labelStyle: {
          color: "#000"
        }
      }} >

        <Tab.Screen name="Home" component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 name="home" size={20} color={focused ? '#1877f3' : '#676767'} />
            )
          }} />
        <Tab.Screen name="Friends" component={FriendsPage} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user-friends" size={20} color={focused ? '#1877f3' : '#676767'} />
          )
        }} />
        <Tab.Screen name="Videos" component={VideosPage} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='desktop' type='font-awesome' size={20} color={focused ? '#1877f3' : '#676767'} />
            //<MaterialIcons name="ondemand-video" size={20} color={focused ? '#1877f3' : '#676767'} />
          )
        }} />
        <Tab.Screen name="Store" component={StorePage} options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="store" size={20} color={focused ? '#1877f3' : '#676767'} />
          )
        }} />
        <Tab.Screen name="Notifications" component={NotificationsPage} options={{
          tabBarIcon: ({ focused }) => (
            <Icon name='bell' type='font-awesome' size={20} color={focused ? '#1877f3' : '#676767'} />
            //   <Badge value="15" status="error" co />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChangeLater" screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Initial" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;